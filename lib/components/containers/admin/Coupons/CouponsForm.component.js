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

import { loadCouponModeForSelect, loadCouponsItem, createCoupons, updateCoupons } from 'components/actions';

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


class CouponsForm extends Component {

    state = {
        coupon_used_modes: [],
        deals: [],
        item: {
            used_at: '',
            owner: '',
            valid_date: '',
            coupon_used_mode_id: '',
            deal_id: []
        }
    };

    componentDidMount = () => {
        this.props.actions
            .loadCouponModeForSelect()
            .subscribe((coupon_used_modes) => this.setState({ coupon_used_modes }));

        // on Edit Mode
        if (this.props.match.params.id) {
            this.props.actions.loadCouponsItem(this.props.match.params.id)
                .subscribe((item) => {
                    this.setState({ item });
                });
        }
    }

    cancel = () => {
        this.props.history.push({ pathname: '/admin/coupons' });
    }

    save = () => {
        if (!this.state.item.name) return false;

        const borders = this.state.borders.map((polygon) => polygon.shape.getPath().getArray().map((x) => x.toJSON()));

        if (this.props.match.params.id) {
            this.props.actions
                .updateCoupons({
                    ...this.state.item,
                    borders,
                    updated_at: new Date().getTime()
                })
                .subscribe(this.goToListPage);

        } else {
            this.props.actions
                .createCoupons({
                    ...this.state.item,
                    borders,
                    user_id: this.props.user.uid,
                    created_at: new Date().getTime()
                })
                .subscribe(this.goToListPage);
        }
    }

    goToListPage = () => {
        this.props.history.push({ pathname: '/admin/coupons' });
    }


    onCouponUsedChange = (e, key) => {
        this.setState({
            item: {
                ...this.state.item,
                coupon_used_mode_id: this.state.coupon_used_modes[key].id
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
            <PageBase title="Coupons Form"
                navigation="Coupons / Form Page">
                <div>
                    <Tabs>
                        <Tab label="General" >

                          <TextField
                              onChange={this.onFieldChange}
                              hintText="Used at"
                              name="used_at"
                              value={this.state.item.used_at}
                              floatingLabelText="Used at"
                              fullWidth={true}
                          />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Owner"
                                name="owner"
                                value={this.state.item.owner}
                                floatingLabelText="Owner"
                                fullWidth={true}
                            />

                            <SelectField
                                floatingLabelText="Used Mode"
                                value={this.state.item.coupon_used_mode_id}
                                onChange={this.onCouponUsedChange}
                                fullWidth={true}>
                                {this.state.coupon_used_modes.map((item) =>
                                    (<MenuItem
                                        key={item.id}
                                        value={item.id}
                                        primaryText={item.name}
                                    />))}
                            </SelectField>

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Valid Date"
                                name="valid_date"
                                value={this.state.item.valid_date}
                                floatingLabelText="Valid Date"
                                fullWidth={true}
                            />

                            <CheckField
                                label="Saved"
                                checked={this.state.item.active}
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
            loadCouponModeForSelect,
            loadCouponsItem,
            createCoupons,
            updateCoupons
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CouponsForm));
