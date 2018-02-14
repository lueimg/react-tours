import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import { Tabs, Tab } from 'material-ui/Tabs';

import GalleryField from 'components/containers/admin/commons/Fields/GalleryField';
import PhoneList from 'components/containers/admin/commons/Fields/PhoneList';
import BordersField from 'components/containers/admin/commons/Fields/BordersField';
import PageBase from 'components/containers/admin/commons/PageBase.js';
import { CheckField } from 'components/containers/admin/commons/Fields';

import { loadPartnersForSelect, loadCommunityItem, createCommunity, updateCommunity } from 'components/actions';

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


class CommunityForm extends Component {

    state = {
        partners: [],
        borders: [],
        item: {
            id: '',
            name: '',
            description: '',
            partner_id: '',
            zipcode: '',
            images: [],
            phones: [],
            borders: []
        }
    };

    componentDidMount = () => {
        this.props.actions
            .loadPartnersForSelect()
            .subscribe((partners) => this.setState({ partners }));

        // on Edit Mode
        if (this.props.match.params.id) {
            this.props.actions.loadCommunityItem(this.props.match.params.id)
                .subscribe((item) => {
                    this.setState({ item });
                });
        }
    }

    cancel = () => {
        this.props.history.push({ pathname: '/admin/communities' });
    }

    save = () => {
        if (!this.state.item.name) return false;

        const borders = this.state.borders.map((polygon) => polygon.shape.getPath().getArray().map((x) => x.toJSON()));

        if (this.props.match.params.id) {
            this.props.actions
                .updateCommunity({
                    ...this.state.item,
                    borders,
                    updated_at: new Date().getTime()
                })
                .subscribe(this.goToListPage);

        } else {
            this.props.actions
                .createCommunity({
                    ...this.state.item,
                    borders,
                    user_id: this.props.user.uid,
                    created_at: new Date().getTime()
                })
                .subscribe(this.goToListPage);
        }
    }

    goToListPage = () => {
        this.props.history.push({ pathname: '/admin/communities' });
    }


    onPartnerChange = (e, key) => {
        this.setState({
            item: {
                ...this.state.item,
                partner_id: this.state.partners[key].id
            }
        });
    }

    onFieldChange = (event) => {
        this.setState({
            item: {
                ...this.state.item,
                [event.target.name]: event.target.value
            }
        });
    }

    onUpdateGallery = (items) => {
        this.setState({
            item: {
                ...this.state.item,
                images: items
            }
        });
    }

    onUpdatePhones = (phones) => {
        this.setState({
            item: {
                ...this.state.item,
                phones: phones
            }
        });
    }

    onCheck = (event, isInputChecked) => {
        this.setState({
            item: {
                ...this.state.item,
                active: isInputChecked
            }
        });
    }

    onUpdateBorders = (borders) => {
        this.setState({ borders });
        // Google map works async so before to save , whe need to ge last coordeantes in the map
        // .shape.getPath().getArray().map(x => x.toJSON())
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
                                value={this.state.item.name}
                                floatingLabelText="Name"
                                fullWidth={true}
                            />
                            <SelectField
                                floatingLabelText="Partner"
                                value={this.state.item.partner_id}
                                onChange={this.onPartnerChange}
                                fullWidth={true}>
                                {this.state.partners.map((item) =>
                                    (<MenuItem
                                        key={item.id}
                                        value={item.id}
                                        primaryText={item.name}
                                    />))}
                            </SelectField>
                            <TextField
                                onChange={this.onFieldChange}
                                fullWidth={true}
                                hintText="Description"
                                value={this.state.item.description}
                                name="description"
                                multiLine={true}
                                rows={2}
                                rowsMax={4}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Zipcode"
                                name="zipcode"
                                value={this.state.item.zipcode}
                                floatingLabelText="zipcode"
                                fullWidth={true}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="population"
                                name="population"
                                value={this.state.item.population}
                                floatingLabelText="population"
                                fullWidth={true}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="state"
                                name="state"
                                value={this.state.item.state}
                                floatingLabelText="state"
                                fullWidth={true}
                            />

                            <BordersField
                                key={`borderField-${this.state.item.id}`}
                                defaultValues={this.state.item.borders}
                                onUpdate={this.onUpdateBorders} />

                            <CheckField
                                label="Active"
                                checked={this.state.item.active}
                                onCheck={this.onCheck}
                            />
                            <Divider />
                        </Tab>
                        <Tab label="Media" >
                            <GalleryField
                                key={`gallery-${this.state.item.id}`}
                                defaultValues={this.state.item.images}
                                onUpdateGallery={this.onUpdateGallery}
                            />
                        </Tab>
                        <Tab label="Useful Phones">
                            <PhoneList
                                key={`phones-${this.state.item.id}`}
                                defaultValues={this.state.item.phones}
                                onUpdate={this.onUpdatePhones}
                            />
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
            loadPartnersForSelect,
            loadCommunityItem,
            createCommunity,
            updateCommunity
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityForm));