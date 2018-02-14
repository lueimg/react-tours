import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Checkbox from 'material-ui/Checkbox';
import MapField from 'components/containers/admin/commons/Fields/MapField';
import ImageField from 'components/containers/admin/commons/Fields/ImageField';
import VideoField from 'components/containers/admin/commons/Fields/VideoField';
import BusinessGalleryField from 'components/containers/admin/commons/Fields/BusinessGalleryField';
import PageBase from 'components/containers/admin/commons/PageBase.js';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';
import { Tabs, Tab } from 'material-ui/Tabs';
import styled from 'styled-components';
import { createBusiness, LoadBusinessItem, UpdateBusiness, LoadCategoriesList, loadCommunityList } from 'components/actions';


const CheckStyled = styled(Checkbox)`
    margin: 20px 0px;
`;

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

class BusinessForm extends Component {

    state = {
        categories: [],
        communities: [],
        item: {
            media: {
                images: [],
                video: {
                    url: '',
                    description: ''
                },
                logo: '',
                qrcode: ''
            },
            active: false
        }
    };

    componentDidMount = () => {
        this
            .props
            .actions
            .LoadCategoriesList()
            .subscribe((categories) => this.setState({ categories }));

        this
            .props
            .actions
            .loadCommunityList()
            .subscribe((communities) => this.setState({ communities }));
        // on Edit Mode
        if (this.props.match.params.id) {
            this
                .props
                .actions
                .LoadBusinessItem(this.props.match.params.id)
                .subscribe((item) => {
                    this.setState({ item });
                });
        }

        // console.log('cdm', this.state);
    }

    cancel = () => {
        this
            .props
            .history
            .push({ pathname: '/admin/business' });
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('cdu', this.state.item);
    }

    save = () => {

        if (this.props.match.params.id) {
            this
                .props
                .actions
                .UpdateBusiness({
                    ...this.state.item,
                    updated_at: new Date().getTime(),
                })
                .subscribe(this.goToBusinessHome);

        } else {
            this
                .props
                .actions
                .createBusiness({
                    ...this.state.item,
                    user_id: this.props.user.uid,
                    created_at: new Date().getTime(),
                })
                .subscribe(this.goToBusinessHome);
        }
    }

    goToBusinessHome = () => {
        this
            .props
            .history
            .push({ pathname: '/admin/business' });
    }

    onCategoryChange = (e, key) => {
        const category_id = this.state.categories[key].id;
        this.setState({ item: { ...this.state.item, category_id } });
    }

    onCommunityChange = (e, key) => {
        const community_id = this.state.communities[key].id;
        this.setState({ item: { ...this.state.item, community_id } });
    }

    onUpdateLogo = (image) => {
        const media = { ...this.state.item.media, logo: image };
        this.setState({ item: { ...this.state.item, media } });
    }

    onUpdateQrcode = (image) => {
        const media = { ...this.state.item.media, qrcode: image };
        this.setState({ item: { ...this.state.item, media } });
    }

    onUpdateVideo = (data) => {
        const media = { ...this.state.item.media, video: { ...data } };
        this.setState({ item: { ...this.state.item, media } });
    }

    onUpdateBusinessGallery = (list) => {
        const media = { ...this.state.item.media, images: [...list] };
        this.setState({ item: { ...this.state.item, media } });
    }

    onFieldChange = (event) => {
        this.setState({ item: { ...this.state.item, [event.target.name]: event.target.value } });
    }

    onAddressUpdate = (data) => {
        const address = {
            text: data.places[0].formatted_address,
            lat: data
                .places[0]
                .geometry
                .location
                .lat(),
            lng: data
                .places[0]
                .geometry
                .location
                .lng()
        };
        this.setState({ item: { ...this.state.item, address } });
    }

    onCheck = (event, isInputChecked) => {
        this.setState({ item: { ...this.state.item, active: isInputChecked} });
    }


    render() {
        return (
            <PageBase title="Business Form" navigation="Business / Form Page">
                <div>
                    <Tabs>
                        <Tab label="General">
                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Name"
                                name="name"
                                value={this.state.item.name}
                                floatingLabelText="Name"
                                fullWidth={true} />
                            <SelectField
                                floatingLabelText="Community"
                                value={this.state.item.community_id}
                                onChange={this.onCommunityChange}
                                fullWidth={true}>
                                {this
                                    .state
                                    .communities
                                    .map((item) => (<MenuItem key={item.id} value={item.id} primaryText={item.name} />))}
                            </SelectField>

                            <SelectField
                                floatingLabelText="Category"
                                value={this.state.item.category_id}
                                onChange={this.onCategoryChange}
                                fullWidth={true}>
                                {this
                                    .state
                                    .categories
                                    .map((cat) => (<MenuItem key={cat.id} value={cat.id} primaryText={cat.name} />))}
                            </SelectField>

                            <TextField
                                onChange={this.onFieldChange}
                                fullWidth={true}
                                hintText="Business Description"
                                value={this.state.item.description}
                                name="description"
                                multiLine={true}
                                rows={2}
                                rowsMax={4} />
                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Site"
                                name="site"
                                value={this.state.item.site}
                                floatingLabelText="Site"
                                fullWidth={true} />
                            <TextField
                                onChange={this.onFieldChange}
                                floatingLabelText="Facebook"
                                name="facebook"
                                value={this.state.item.facebook}
                                fullWidth={true} />
                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Twitter"
                                name="twitter"
                                value={this.state.item.twitter}
                                floatingLabelText="Twitter"
                                fullWidth={true} />
                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Email"
                                name="email"
                                value={this.state.item.email}
                                floatingLabelText="Email"
                                fullWidth={true} />
                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Phone"
                                name="phone"
                                value={this.state.item.phone}
                                floatingLabelText="Phone"
                                fullWidth={true} />
                            <ListItem primaryText="Address Search" />
                            <MapField
                                key={`map-${this.state.item.id}`}
                                onAddressUpdate={this.onAddressUpdate}
                                defaultValues={this.state.item.address} />
                            <Divider />

                            <CheckStyled
                                label="Active"
                                checked={this.state.item.active}
                                onCheck={this.onCheck}
                            />
                            <Divider />

                        </Tab>
                        <Tab label="Media">
                            <BusinessGalleryField
                                key={`bgf-${this.state.item.id}`}
                                defaultValues={this.state.item.media.images}
                                onUpdate={this.onUpdateBusinessGallery} />
                            <Divider />
                            <ImageField
                                key={`logo-${this.state.item.id}`}
                                title="Logo: "
                                defaultValue={this.state.item.media.logo}
                                onUpdate={this.onUpdateLogo} />
                            <Divider />
                            <ImageField
                                key={`qrcode-${this.state.item.id}`}
                                title="QR code: "
                                defaultValue={this.state.item.media.qrcode}
                                onUpdate={this.onUpdateQrcode} />
                            <Divider />
                            <VideoField
                                key={`videof-${this.state.item.id}`}
                                defaultValues={this.state.item.media.video}
                                onUpdate={this.onUpdateVideo} />
                            <Divider />

                            

                        </Tab>
                        <Tab label="Subscritions">
                                    comming soon!
                        </Tab>
                        <Tab label="Deals">
                        comming soon!</Tab>
                    </Tabs>
                    <Divider />

                    <div style={styles.buttons}>
                        <RaisedButton label="Cancel" onClick={this.cancel} />

                        <RaisedButton
                            label="Save"
                            onClick={this.save}
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
    return { user: state.user };
};

const mapDispatchToProps = () => {
    return {
        actions: {
            LoadBusinessItem,
            createBusiness,
            UpdateBusiness,
            LoadCategoriesList,
            loadCommunityList
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessForm));