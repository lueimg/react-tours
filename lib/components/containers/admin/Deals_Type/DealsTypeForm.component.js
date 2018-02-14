import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import { Tabs, Tab } from 'material-ui/Tabs';
import PageBase from 'components/containers/admin/commons/PageBase.js';
import { CheckField } from 'components/containers/admin/commons/Fields';

import { loadDealsTypeById, addDealsType, updateDealsType } from 'components/actions';

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

const rootUrl = '/admin/deal_type';

class DealsTypeForm extends Component {

    state = {
      //name: ''
        active: false
    };

    componentDidMount = () => {
        // on Edit Mode
        if (this.props.match.params.id) {
            this.props.actions
                .loadDealsTypeById(this.props.match.params.id)
                .subscribe((item) => {
                    this.setState({ ...item });
                });
        }
    }

    cancel = () => {
        this.goToListPage();
    }

    save = () => {

        if (this.props.match.params.id) {
            this.props.actions
                .updateDealsType({
                    ...this.state,
                    updated_at: new Date().getTime(),
                })
                .subscribe(this.goToListPage);

        } else {
            this.props.actions
                .addDealsType({
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


    // onPartnerChange = (e, key) => {
    //     // key is the index of the list , sum + 1 to get the correct id
    //     this.setState({ partner_id: this.state.partners[key].id });
    // }

    onFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onCheck = (event, isInputChecked) => {
        this.setState({ active: isInputChecked });
    }


    // onUpdateGallery = (items) => {
    //     this.setState({ images: items });
    // }

    // onUpdatePhones = (phones) => {
    //     this.setState({ phones });
    // }


    render() {



        return (
            <PageBase title="Deals Type Form"
                navigation="Deals Type / Form Page">
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
            loadDealsTypeById, addDealsType, updateDealsType
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DealsTypeForm));
