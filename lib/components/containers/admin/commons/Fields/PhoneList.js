import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ButtonAdd = styled(FloatingActionButton) `
position: absolute;
right: 0;
top: 0;
`;

const FieldTitle = styled.div`
    padding: 20px;
`;


const ButtonSave = styled(RaisedButton) `
    margin: 12px;
`;

const PhoneListStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const PhoneViewStyled = styled.div`
margin: 12px;
`;


class PhoneForm extends PureComponent {

    state = {
        name: '',
        phone: ''
    };

    add = () => {
        if (!this.state.name) return false;
        if (!this.state.phone) return false;

        this.props.onPhoneAdded({ name: this.state.name, phone: this.state.phone });
        this.setState({ name: '', phone: '' });
    }

    onFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <TextField
                    onChange={this.onFieldChange}
                    hintText="Name"
                    name="name"
                    value={this.state.name}
                    floatingLabelText="Name"

                />
                <TextField
                    onChange={this.onFieldChange}
                    hintText="phone"
                    name="phone"
                    value={this.state.phone}
                    floatingLabelText="phone"

                />
                <ButtonSave label="Save" primary={true} onClick={this.add} />
            </div>
        );
    }
}


class PhoneView extends PureComponent {

    remove = () => {
        this.props.onRemove({ ...this.props });
    }


    render() {
        return (
            <PhoneViewStyled>
                <Card>
                    <CardHeader
                        title={this.props.phone}
                        subtitle={this.props.name}
                    />
                    <CardActions>
                        <FlatButton onClick={this.remove} label="remove" />
                    </CardActions>
                </Card>
            </PhoneViewStyled>
        );
    }
}

PhoneView.propTypes = {
    id: PropTypes.string,
    onRemove: PropTypes.func.isRequired
};


class PhoneList extends PureComponent {

    state = {
        items: []
    }
    componentDidMount = () => {
        if (this.props.defaultValues) {
            // console.log(this.props.defaultValues)
            this.setState({ items: this.props.defaultValues });
        }
    }

    onPhoneAdded = (item) => {
        this.setState({ items: [item, ...this.state.items] }, () => {
            this.props.onUpdate(this.state.items);
        });

    }

    onPhoneRemoved = (item) => {
        const newList = this.state.items.filter((x) => x.name !== item.name && x.phone !== item.phone);
        this.setState({ items: newList }, () => {
            this.props.onUpdate(this.state.items);
        });
    }

    render() {
        return (
            <div>
                <PhoneForm onPhoneAdded={this.onPhoneAdded} />
                <PhoneListStyled>
                    {this.state.items.map((item, index) => (
                        <PhoneView
                            key={`${item.phone}-${item.name}`}
                            id={`${index}-${item.name}`}
                            onRemove={this.onPhoneRemoved}
                            {...item}
                        />
                    ))}
                </PhoneListStyled>

            </div>
        );
    }
}

PhoneList.propTypes = {
    onUpdate: PropTypes.func.isRequired,
};

export default PhoneList;