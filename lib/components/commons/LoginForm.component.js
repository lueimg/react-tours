import React from 'react';
// import FirebaseApi from '../../firebaseApi.js';
import FirebaseApi from 'components/FirebaseApi.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        waitingForRedirect: false
    };

    goTo = (path) => {
        this.props.history.push({ pathname: '/' + path });
        this.removeOverlay();
    }
    componentWillUnmount = () => {
        this.removeOverlay();
    }

    removeOverlay = () => {
        // todo: # remove in differente way
        jQuery('.modal-backdrop').remove();
    }



    loginUser = (event) => {
        if (!this.state.email || !this.state.password) alert('Porfavor ingrese ambos datos');
        event.preventDefault();
        FirebaseApi
            .logInUser(this.state.email, this.state.password)
            .then(() => this.setState({ waitingForRedirect: true }))
            .catch((error) => alert(error.message));
    }

    loginWithFacebook = () => {
        FirebaseApi
            .fbLogin()
            .then(() => this.setState({ waitingForRedirect: true }));
    }

    redirect = () => {
        if (this.props.user) {
            switch (this.props.user.profile.role) {
                case 'admin':
                case 'business':
                    this.goTo('admin');
                    break;
                case 'user':
                    this.goTo('dashboard');
                    $('body').removeClass('modal-open'); $('.bs-example-modal-lg').removeClass('in'); $('.modal-backdrop').hide()
                    break;
                default:
                    this.goTo('dashboard');
                    $('body').removeClass('modal-open'); $('.bs-example-modal-lg').removeClass('in'); $('.modal-backdrop').hide()
                    break;
            }
        }
    }

    componentDidUpdate = () => {
        if (this.state.waitingForRedirect) {
            this.redirect();
        }
    }

    onChangeInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        return (
            <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="rotate">&times;</span>
                        </button>
                        <div className="text-center contents">
                            <h3>Welcome</h3>
                            <img src="images/logo_popup.png" alt="" className="img-responsive img-modal" />
                            <div>
                                <div>admin@detourmaps.ga , business@test.com, with any Facebook</div>
                                <input className="center-block" type="text" placeholder="Email" name="email" onChange={this.onChangeInput} />
                                <input className="center-block" type="password" placeholder="Password" name="password" onChange={this.onChangeInput} />
                                <input className="center-block" type="submit" value="Login" onClick={this.loginUser} />
                                <div>Or</div>
                                <input className="center-block" type="submit" value="Facebook Login" onClick={this.loginWithFacebook} />
                            </div>
                            <img src="images/logo_white.png" alt="" className="img-responsive center-block logo-modal" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default withRouter(connect(mapStateToProps)(LoginForm));