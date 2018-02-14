import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import UploadField from './UploadField.js';

const ButtonAdd = styled(FloatingActionButton) `
    position: absolute;
    right: 0;
    top: 0;
`;

const FieldTitle = styled.div`
    padding: 20px;
`;

const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const ImageItem = styled.div`
    padding: 10px;
    &:hover {
        background: #ccc;
       
    }
`;

const GalleryWrapper = styled.div`
    position: relative;
    margin: 20px;
`;

const ImageFieldStyled = styled.div`
    & .options {
        text-align: center;
        span {
            cursor: pointer;
            margin: 5px;
            &:hover {
                color: red;
                text-decoration: underline;
            }
    
        }
    }
`;

class ImageField extends PureComponent {

    removeImage = () => {
        this.props.onRemove(this.props.image);
    }

    render() {
        return (
            <ImageFieldStyled>
                <div className="img">
                    <img src={this.props.image} height="100px" />
                </div>
                <div className="options">
                    <span onClick={this.removeImage}>Remove</span>
                </div>
            </ImageFieldStyled>
        );
    }
}

class GalleryItem extends PureComponent {

    state = {
        image: null,
    };

    componentDidMount = () => {
        if (this.props.image) {
            this.setState({ image: this.props.image });
        }
    }


    onUploadFile = (image) => {
        this.setState({ image });
        this.props.onImageAdded(image);
    }

    render() {
        return (
            <ImageItem>
                {!this.state.image && <UploadField onUploadFile={this.onUploadFile} />}
                {this.state.image &&
                    <ImageField
                        image={this.state.image}
                        onRemove={this.props.onRemove}
                    />}
            </ImageItem>
        );
    }
}


class GalleryField extends PureComponent {
    state = {
        items: [],
    }

    componentDidMount = () => {
        if (this.props.defaultValues) {
            this.setState({ items: this.props.defaultValues });
        }
    }

    add = () => {
        this.setState({ items: ['', ...this.state.items] });
    }


    onImageAdded = (image) => {
        // remove first empty element
        this.state.items.splice(0,1);
        this.setState({ items: [ image, ...this.state.items] }
            , () => {
                this.props.onUpdateGallery(this.state.items);
            });
    }

    onRemove = (image) => {
        const index = this.state.items.indexOf(image);
        const imgs = [...this.state.items];
        imgs.splice(index, 1);
        this.setState({ items: [...imgs] });
    }


    render() {
        return (
            <GalleryWrapper>
                <FieldTitle>Gallery: </FieldTitle>
                <ButtonAdd onClick={this.add}>
                    <ContentAdd />
                </ButtonAdd>
                <Images>
                    {this.state.items.map((item, index) =>
                        <GalleryItem
                            key={`${index}.${item}`}
                            onImageAdded={this.onImageAdded}
                            onRemove={this.onRemove}
                            image={item}
                        />)}
                </Images>
            </GalleryWrapper>);
    }
}

export default GalleryField;