import React, { PureComponent, Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ImageField from 'components/containers/admin/commons/Fields/ImageField';
import Dialog from 'material-ui/Dialog';
import moment from 'moment';

const GalleryWrapper = styled.div`
    position: relative;
    margin: 20px;
`;
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
flex-wrap: wrap
`;


const ImageViewWrap = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px;
    flex: 1;
`;

const ViewWrap = styled.div`
display: flex;
`;

const GroupRight = styled.div`
margin: 10px;
`;

const GroupLeft = styled.div`

`;
const GroupFooter = styled.div`

`;

const Options = styled.div`

`;

const Name = styled.div`
font-size: 25px;
}
`;

const DateLabel = styled.div`

`;

const ButtonsWrap = styled.div`
    text-align: right

`;

const ButonStyled = styled(RaisedButton) `
    margin: 5px;
`;

class ImageView extends PureComponent {

    edit = () => {
        this
            .props
            .onEdit(this.props.id);
    }

    render() {
        return (
            <ImageViewWrap>
                <ViewWrap>
                    <GroupRight>
                        <img
                            src={this.props.url}
                            style={{
                                height: 100
                            }} />
                    </GroupRight>
                    <GroupLeft>
                        <Name>{this.props.name}</Name>
                        <DateLabel>
                            <label>start date:</label>
                            <span>{moment(this.props.start_date).format('MMM Do YY')}</span>
                        </DateLabel>
                        <DateLabel>
                            <label>end date:  </label>
                            <span>{moment(this.props.end_date).format('MMM Do YY')}</span>
                        </DateLabel>

                    </GroupLeft>


                </ViewWrap>
                <GroupFooter>
                    <Options>
                        <FlatButton label="Edit" primary={true} />
                        <FlatButton label="Remove" secondary={true} />
                    </Options>
                </GroupFooter>

            </ImageViewWrap>

        );
    }
}

ImageView.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    start_date: PropTypes.number,
    end_Date: PropTypes.number,
    important: PropTypes.bool,
    onEdit: PropTypes.func
};

class ImageForm extends PureComponent {
    defaultValues = {
        name: '',
        url: '',
        start_date: '',
        end_date: '',
        important: false
    }

    state = {
        ...this.defaultValues
    }



    onFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onUpdateImage = (image) => {
        this.setState({ url: image });
    }
    cancel = () => {
        this.setState({ ...this.defaultValues });
        this.props.onCancel();
    }

    save = () => {
        this.props.onUpdate(this.state);
    }
    onChangeStartDate = (_, date) => {
        this.setState({ start_date: date.getTime() });
    }

    onChangeEndDate = (_, date) => {
        this.setState({ end_date: date.getTime() });
    }

    onCheck = (event, isInputChecked) => {
        this.setState({ active: isInputChecked });
    }



    render() {
        return (
            <div>
                <ImageField defaultValue={this.state.url} onUpdate={this.onUpdateImage} />
                <Divider />
                <TextField
                    onChange={this.onFieldChange}
                    hintText="Name"
                    name="name"
                    value={this.state.name}
                    floatingLabelText="Name"
                />

                <DatePicker
                    onChange={this.onChangeStartDate}
                    hintText="Start date"
                    autoOk />

                <DatePicker
                    onChange={this.onChangeEndDate}
                    hintText="End date"
                    autoOk />

                <Checkbox
                    label="Important"
                    checked={this.state.active}
                    onCheck={this.onCheck}
                />
                <Divider />
                <ButtonsWrap>
                    <ButonStyled label="Cancel" onClick={this.cancel} />
                    <ButonStyled label="Save" onClick={this.save} type="submit" primary={true} />
                </ButtonsWrap>
            </div>
        );
    }
}

ImageForm.propTypes = {
    onUpdate: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

class BusinessGalleryField extends PureComponent {
    state = {
        formDisplayed: false,
        images: []
    }

    componentDidMount = () => {
        console.log('BGF cdm', this.props);
        if (this.props.defaultValues && this.props.defaultValues.length) {
            this.setState({ images: [...this.props.defaultValues] });
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('BGF cdu', this.state);
    }


    add = () => {
        if (!this.state.formDisplayed) {
            this.setState({ formDisplayed: true });
        }
    }

    addImage = (image) => {
        this.setState({
            formDisplayed: false,
            images: [
                image,
                ...this.state.images
            ]
        }, () => {
            this.props.onUpdate(this.state.images);
        });

    }

    onCancelForm = () => {
        this.setState({ formDisplayed: false });
    }


    editImage = (item) => { }

    removeImage = (item) => { }

    render() {

        const actions = [];

        // {this.state.formDisplayed && <ImageForm onUpdate={this.addImage} onCancel={this.onCancelForm} />}
        return (
            <GalleryWrapper>
                <FieldTitle>Business Images:
                </FieldTitle>
                <ButtonAdd onClick={this.add}>
                    <ContentAdd />
                </ButtonAdd>
                <Dialog
                    title="Add Business Image"
                    actions={actions}
                    modal={true}
                    open={this.state.formDisplayed} >
                    <ImageForm onUpdate={this.addImage} onCancel={this.onCancelForm} />
                </Dialog>


                <Images>
                    {this
                        .state
                        .images
                        .map((item, index) => <ImageView key={index} id={index} {...item} onEdit={this.editImage} />)}
                </Images>
            </GalleryWrapper>
        );
    }
}

BusinessGalleryField.propTypes = {
    defaultValues: PropTypes.array,
    onUpdate: PropTypes.func.isRequired
};

export default BusinessGalleryField;