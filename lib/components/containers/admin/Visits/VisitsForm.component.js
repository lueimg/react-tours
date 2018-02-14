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

import { loadDealsTypeForSelect, loadVisitsItem, createVisits, updateVisits } from 'components/actions';

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


class VisitsForm extends Component {

    state = {
        deal_type: [],
        item: {
            id: '',
            amount_receipt: '',
            business_id: '',
            code_receipt: '',
            employee: '',
            valid: 1,
            visit_date: '',
            visitor_id: '',
            coupon_id: []
        }
    };

    componentDidMount = () => {
        this.props.actions
            .loadDealsTypeForSelect()
            .subscribe((deal_type) => this.setState({ deal_type }));

        // on Edit Mode
        if (this.props.match.params.id) {
            this.props.actions.loadVisitsItem(this.props.match.params.id)
                .subscribe((item) => {
                    this.setState({ item });
                });
        }
    }

    cancel = () => {
        this.props.history.push({ pathname: '/admin/visits' });
    }

    save = () => {
        if (!this.state.item.name) return false;

        const borders = this.state.borders.map((polygon) => polygon.shape.getPath().getArray().map((x) => x.toJSON()));

        if (this.props.match.params.id) {
            this.props.actions
                .updateVisits({
                    ...this.state.item,
                    borders,
                    updated_at: new Date().getTime()
                })
                .subscribe(this.goToListPage);

        } else {
            this.props.actions
                .createVisits({
                    ...this.state.item,
                    borders,
                    user_id: this.props.user.uid,
                    created_at: new Date().getTime()
                })
                .subscribe(this.goToListPage);
        }
    }

    goToListPage = () => {
        this.props.history.push({ pathname: '/admin/visits' });
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

    handleChange = (event, index, value) => {
        this.setState({
          item: {
              ...this.state.item,
              valid: value
          }
        });
    }

    render() {
        return (
            <PageBase title="Visits Form"
                navigation="Visits / Form Page">
                <div>
                    <Tabs>
                        <Tab label="General" >
                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Visit Date"
                                name="visit_date"
                                value={this.state.item.visit_date}
                                floatingLabelText="Visit Date"
                                fullWidth={true}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Amount Receipt"
                                name="amount_receipt"
                                value={this.state.item.amount_receipt}
                                floatingLabelText="Amount Receipt"
                                fullWidth={true}
                            />

                            <SelectField
                                floatingLabelText="Valid"
                                value={this.state.item.valid}
                                onChange={this.handleChange}
                                fullWidth={true}>
                                <MenuItem value={1} primaryText="Unknown" />
                                <MenuItem value={2} primaryText="Yes" />
                                <MenuItem value={3} primaryText="No" />
                            </SelectField>

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Code Receipt"
                                name="code_receipt"
                                value={this.state.item.code_receipt}
                                floatingLabelText="Code Receipt"
                                fullWidth={true}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Visitor"
                                name="visitor_id"
                                value={this.state.item.visitor_id}
                                floatingLabelText="Visitor"
                                fullWidth={true}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Employee"
                                name="employee"
                                value={this.state.item.employee}
                                floatingLabelText="Employee"
                                fullWidth={true}
                            />

                            <TextField
                                onChange={this.onFieldChange}
                                hintText="Business"
                                name="business_id"
                                value={this.state.item.business_id}
                                floatingLabelText="Business"
                                fullWidth={true}
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
            loadDealsTypeForSelect,
            loadVisitsItem,
            createVisits,
            updateVisits
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VisitsForm));
