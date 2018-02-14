import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import { Tabs, Tab } from 'material-ui/Tabs';
import Checkbox from 'material-ui/Checkbox';

import PageBase from 'components/containers/admin/commons/PageBase.js';

import ImageField from 'components/containers/admin/commons/Fields/ImageField';

import { createCategory, updateCategory, loadCategoryById } from 'components/actions';

const styles = {
    toggleDiv: {
        maxWidth: 300,
        marginTop: 40,
        marginBottom: 5
    },
    toggleLabel: {
        color: grey400,
        fontWeight: 100
    },
    buttons: {
        marginTop: 30,
        float: 'right'
    },
    saveButton: {
        marginLeft: 5
    }
};

const rootUrl = '/admin/categories';

class CategoriesForm extends Component {

    state = {
        active: false
    };

    componentDidMount = () => {
        // on Edit Mode
        if (this.props.match.params.id) {
            this.props.actions
                .loadCategoryById(this.props.match.params.id)
                .subscribe((item) => {
                    this.setState({ ...item });
                });
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log(this.state)
    }


    cancel = () => {
        this.goToListPage();
    }

    save = () => {

        if (this.props.match.params.id) {
            this.props.actions
                .updateCategory({
                    ...this.state,
                    updated_at: new Date().getTime(),
                })
                .subscribe(this.goToListPage);

        } else {
            this.props.actions
                .createCategory({
                    ...this.state,
                    user_id: this.props.user.uid,
                    created_at: new Date().getTime(),
                })
                .subscribe(this.goToListPage);
        }
    }

    goToListPage = () => {
        this.props.history.push({ pathname: rootUrl });
    }

    onFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onCheck = (event, isInputChecked) => {
        this.setState({ active: isInputChecked });
    }
    onUpdateMiniIcon = (image) => {
        this.setState({ mini_icon: image });
    }
    onUpdateIcon = (image) => {
        this.setState({ icon: image });
    }


    render() {

        return (
            <PageBase title="Community Form"
                navigation="Community / Form Page">
                <div>
                    <Tabs>
                        <Tab label="General" >
                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Name"
                                name="name"
                                value={this.state.name}
                                floatingLabelText="Name"
                                fullWidth={true}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                fullWidth={true}
                                hintText="Description"
                                value={this.state.description}
                                name="description"
                                multiLine={true}
                                rows={2}
                                rowsMax={4}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="color"
                                name="color"
                                value={this.state.color}
                                floatingLabelText="color"
                                fullWidth={true}
                            />
                            
                            <ImageField
                                key={`icon=${this.state.id}`}
                                title="Icon: "
                                defaultValue={this.state.icon}
                                onUpdate={this.onUpdateIcon} />
                            <Divider />
                            <ImageField
                                key={`minicon=${this.state.id}`}
                                title="Mini Icon: "
                                defaultValue={this.state.mini_icon}
                                onUpdate={this.onUpdateMiniIcon} />

                            <Divider />
                            <Checkbox
                                label="Active"
                                checked={this.state.active}
                                onCheck={this.onCheck}
                            />
                            <Divider />
                        </Tab>

                    </Tabs>
                    <Divider />
                    <div style={styles.buttons}>
                        <RaisedButton label="Cancel" onClick={this.cancel} />
                        <RaisedButton label="Save" onClick={this.save}
                            style={styles.saveButton}
                            type="submit"
                            primary={true} />
                    </div>
                </div>
            </PageBase>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};


const mapDispatchToProps = () => {
    return {
        actions: {
            createCategory, updateCategory, loadCategoryById
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoriesForm));