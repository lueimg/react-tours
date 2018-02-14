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
import ImageField from 'components/containers/admin/commons/Fields/ImageField';
import { CheckField } from 'components/containers/admin/commons/Fields';

import { loadDealsTypeForSelect, loadDealsItem, createDeals, updateDeals } from 'components/actions';

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


class DealsForm extends Component {

    state = {
        deal_type: [],
        item: {
            id: '',
            name: '',
            description: '',
            start_date: '',
            end_date: '',
            business_id: '',
            deal_type_id: '',
            description_value: '',
            equivalent_value: '',
            updated_at: '',
            image: [],
            image_coupon: [],
            coupon_ids: []
        }
    };

    componentDidMount = () => {
        this.props.actions
            .loadDealsTypeForSelect()
            .subscribe((deal_type) => this.setState({ deal_type }));

        // on Edit Mode
        if (this.props.match.params.id) {
            this.props.actions.loadDealsItem(this.props.match.params.id)
                .subscribe((item) => {
                    this.setState({ item });
                });
        }
    }

    cancel = () => {
        this.props.history.push({ pathname: '/admin/deals' });
    }

    save = () => {
        if (!this.state.item.name) return false;

        const borders = this.state.borders.map((polygon) => polygon.shape.getPath().getArray().map((x) => x.toJSON()));

        if (this.props.match.params.id) {
            this.props.actions
                .updateDeals({
                    ...this.state.item,
                    borders,
                    updated_at: new Date().getTime()
                })
                .subscribe(this.goToListPage);

        } else {
            this.props.actions
                .createDeals({
                    ...this.state.item,
                    borders,
                    user_id: this.props.user.uid,
                    created_at: new Date().getTime()
                })
                .subscribe(this.goToListPage);
        }
    }

    goToListPage = () => {
        this.props.history.push({ pathname: '/admin/deals' });
    }


    onDealsTypeChange = (e, key) => {
        this.setState({
            item: {
                ...this.state.item,
                deal_type_id: this.state.deal_type[key].id
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

    onCheckImportant = (event, isInputChecked) => {
        this.setState({
            item: {
                ...this.state.item,
                important: isInputChecked
            }
        });
    }

    onUpdateImg = (image) => {
        this.setState({ image: image });
    }
    onUpdateImgCoupon = (image) => {
        this.setState({ image_coupon: image });
    }

    render() {
        return (
            <PageBase title="Deals Form"
                navigation="Deals / Form Page">
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

                            <ImageField
                                key={`image=${this.state.id}`}
                                title="Image: "
                                defaultValue={this.state.image}
                                onUpdate={this.onUpdateImg} />
                            <Divider />
                            <ImageField
                                key={`image_coupon=${this.state.id}`}
                                title="Image Coupon: "
                                defaultValue={this.state.image_coupon}
                                onUpdate={this.onUpdateImgCoupon} />

                            <Divider />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Business"
                                name="business_id"
                                value={this.state.item.business_id}
                                floatingLabelText="Business"
                                fullWidth={true}
                            />

                            <SelectField
                                floatingLabelText="Deals Type"
                                value={this.state.item.deal_type_id}
                                onChange={this.onDealsTypeChange}
                                fullWidth={true}>
                                {this.state.deal_type.map((item) =>
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
                                hintText="Description Value"
                                name="description_value"
                                value={this.state.item.description_value}
                                floatingLabelText="Description Value"
                                fullWidth={true}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Equivalent Value"
                                name="equivalent_value"
                                value={this.state.item.equivalent_value}
                                floatingLabelText="Equivalent Value"
                                fullWidth={true}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Start Date"
                                name="start_date"
                                value={this.state.item.start_date}
                                floatingLabelText="Start Date"
                                fullWidth={true}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="End Date"
                                name="end_date"
                                value={this.state.item.end_date}
                                floatingLabelText="End Date"
                                fullWidth={true}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Updated at"
                                name="updated_at"
                                value={this.state.item.updated_at}
                                floatingLabelText="Updated at"
                                fullWidth={true}
                            />

                            <CheckField
                                label="Active"
                                checked={this.state.item.active}
                                onCheck={this.onCheck}
                            />
                            <CheckField
                                label="Important"
                                checked={this.state.item.important}
                                onCheck={this.onCheckImportant}
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
            loadDealsTypeForSelect,
            loadDealsItem,
            createDeals,
            updateDeals
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DealsForm));
