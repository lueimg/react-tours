import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';

import { Tabs, Tab } from 'material-ui/Tabs';


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createBusiness, LoadBusinessItem, UpdateBusiness, LoadCategoriesList } from 'components/actions';
// import PageBase from './commons/PageBase.js';
import PageBase from 'components/containers/admin/commons/PageBase.js';



class PageTest extends Component {

    state = {
        categories: [],
    };

    componentDidMount = () => {
        this.props.actions
            .LoadCategoriesList()
            .subscribe((categories) => this.setState({ categories }));

        // on Edit Mode
        if (this.props.match.params.fid) {
            this.props.actions.LoadBusinessItem(this.props.match.params.fid)
                .subscribe((businessItem) => {
                    this.setState({ ...businessItem });
                });
        }
    }

    cancel = () => {
        this.props.history.push({ pathname: '/admin/business' });
    }

    save = () => {

        if (this.props.match.params.fid) {
            this.props.actions
                .UpdateBusiness({
                    ...this.state,
                    updated_at: new Date().getTime(),

                    // no required properties
                    categories: undefined, // remove this property 
                })
                .subscribe(this.goToBusinessHome);

        } else {
            this.props.actions
                .createBusiness({
                    ...this.state, userId:
                    this.props.user.uid,
                    created_at: new Date().getTime(),

                    // no required properties
                    categories: undefined, // remove this property 
                })
                .subscribe(this.goToBusinessHome);
        }
    }

    goToBusinessHome = () => {
        this.props.history.push({ pathname: '/admin/business' });
    }


    onCategoryChange = (e, key) => {
        // key is the index of the list , sum + 1 to get the correct id
        this.setState({ category_id: this.state.categories[key].id });
    }

    onFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onAddressUpdate = (data) => {
        const address = {
            text: data.places[0].formatted_address,
            lat: data.places[0].geometry.location.lat(),
            lng: data.places[0].geometry.location.lng(),
        };
        this.setState({ address });
        // console.log('address',address);
        // console.log('data',data);
    }

    onUpdateGallery = (items) => {
        this.setState({ gallery: items });
    }


    render() {

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

        return (
            <PageBase title="Business Form"
                navigation="Business / Form Page">
                <div>
                    <Tabs>
                        <Tab label="General" >
                            
                        </Tab>
                        <Tab label="Media" >
                            
                        </Tab>
                        <Tab label="Subscritions">
                            
                        </Tab>
                        <Tab label="Deals">
                           
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
            LoadBusinessItem,
            createBusiness,
            UpdateBusiness,
            LoadCategoriesList
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageTest));