import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Observable } from 'rxjs/Observable';
import uuidv1 from 'uuid/v1';

import { FieldTitle, ShapeOptionsWrapper, ShapeListWrapper } from './index.js';

import RaisedButton from 'material-ui/RaisedButton';

class Shape extends Component {

    state = {
        length: 0,
        coordinates: []
    }

    shape = undefined;

    componentDidMount = () => {
        this.getCoordinates();

        this.props.item.getPaths().forEach((path) => {

            google.maps.event.addListener(path, 'insert_at', () => {
                // New point
                this.getCoordinates();
            });

            google.maps.event.addListener(path, 'remove_at', () => {
                // Point was removed
                this.getCoordinates();

            });

            google.maps.event.addListener(path, 'set_at', () => {
                this.getCoordinates();
                // Point was moved
            });

        });

        this.shape = this.props.item.getPath();
        this.setState({ length: this.shape.getLength() });
    }


    show = () => {
        console.log(this.getCoordinates());
    }

    getCoordinates = () => {
        const coordinates = this.props.item.getPath().getArray().map((coor) => coor.toJSON());
        // this.props.onUpdate(coordinates);
        return coordinates;
    }


    clear = () => {
        this.shape.clear();
        this.props.onClear(this.props.id);
    }

    getLength = () => {
        console.log(this.shape.getLength());
    }

    center = () => {
        // console.log('shape', this.props.item);
        const map = this.props.item.getMap();
        const firstCoordinate = this.props.item.getPath().getArray()[0].toJSON();
        map.setCenter(firstCoordinate);
    }



    render() {
        return (
            <ShapeOptionsWrapper>
                <label style={{ width: '100%' }}>Area #{this.props.index + 1} </label>
                <RaisedButton onClick={this.clear} secondary={true} > clear </RaisedButton>
                <RaisedButton onClick={this.center} primary={true} >center </RaisedButton>
            </ShapeOptionsWrapper>
        );
    }
}

Shape.proptypes = {
    id: PropTypes.number,
    item: PropTypes.object,
    onUpdate: PropTypes.func,
    onClear: PropTypes.func,
    index: PropTypes.number,
};


export default class BordersField extends Component {
    static propTypes = {
        onUpdate: PropTypes.func,
        // defaultValues: PropTypes.array
    }

    state = {
        shapes: []
    }

    componentDidMount = () => {
        if (this.props.defaultValues && this.props.defaultValues.length) {
            this.setState({
                shapes: [...this.props.defaultValues.map((coordinates) => {
                    let shape = new google.maps.Polygon({ paths: coordinates });
                    return { id: uuidv1(), shape };
                })]
            }, this.initializeDrawing);
        } else {
            this.initializeDrawing();
        }
    }

    initializeDrawing = () => {
        this.initMap().subscribe((shape) => {
            this.setState({
                shapes:
                [
                    ...this.state.shapes,
                    { id: uuidv1(), shape },
                ]
            }, this.updateParent);
        });
    }


    initMap = () => {
        return Observable.create((observer) => {


            let map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 47.6205588, lng: -122.3212725, },
                zoom: 6
            });

            let drawingManager = new google.maps.drawing.DrawingManager({
                drawingMode: google.maps.drawing.OverlayType.POLYGON,
                drawingControl: true,
                drawingControlOptions: {
                    position: google.maps.ControlPosition.TOP_CENTER,
                    drawingModes: ['polygon']
                },
                polygonOptions: {
                    clickable: false,
                    editable: true,
                }
            });
            drawingManager.setMap(map);

            // Adding 
            if (this.state.shapes.length) {
                this.state.shapes.map((polygon) => {
                    polygon.shape.setMap(map);
                    polygon.shape.setEditable(true);
                });

                // Go to first 
                const firstCoordinate = this.state.shapes[0].shape.getPath().getArray()[0].toJSON();
                map.setCenter(firstCoordinate);

                drawingManager.setOptions({ drawingMode: null });
                this.updateParent();
            }


            google.maps.event.addListener(drawingManager, 'polygoncomplete', (shape) => {
                // Stop drawing
                observer.next(shape);
            });
        });
    }

    removeShape = (id) => {
        const shapes = this.state.shapes.filter((item) => item.id !== id);
        this.setState({ shapes }, this.updateParent);
    }

    updateParent = () => {
        this.props.onUpdate(this.state.shapes);
    }

    render() {
        return (
            <div>
                <FieldTitle>Borders: </FieldTitle>
                <ShapeListWrapper>
                    {this.state.shapes.map((item, index) =>
                        <Shape
                            key={item.id}
                            index={index}
                            id={item.id}
                            item={item.shape}
                            onClear={this.removeShape}
                        />)}
                </ShapeListWrapper>
                <div id="map" style={{ height: 400 }}></div>
            </div>
        );
    }
}




