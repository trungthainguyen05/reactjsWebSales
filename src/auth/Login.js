import React, { Component } from 'react';
import { connect } from "react-redux";
import './Login.scss';
import { handleLoginApi } from "../services/userService";
import * as actions from "../store/actions";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, PrevState, SnapShot) {
        // if (prevProps.language !== this.props.language) {

        // }
    }

    handleOnChangeLogin = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: '',
        })
        try {
            let userInfo = await handleLoginApi(this.state.username, this.state.password);
            if (userInfo || userInfo.errCode !== 0) {
                this.setState({
                    errMessage: userInfo.errMessage,
                })
                console.log('>>>check status', userInfo.errMessage)
            }
            if (userInfo && userInfo.errCode === 0) {
                //Need to push user to the redux
                this.props.userLoginSuccess(userInfo.user)
                console.log('Login succeed: ', userInfo.user)
            }

        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className='container-fluid container-login'>
                <div className='row row-login'>
                    <div className='col-3 ad-left'>
                        Advertising left
                    </div>
                    <div className='col-6 login-content'>
                        <div className='text-login'>Please login to access more information</div>
                        <div className='form-group login-input col-12'>
                            <label>Username:</label>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Enter your username'
                                onChange={(event) => this.handleOnChangeLogin(event, 'username')}
                                name={'username'}
                            />
                        </div>
                        <div className='form-group login-input col-12'>
                            <label>Password:</label>
                            <input
                                type="password"
                                className='form-control'
                                placeholder='Enter your password'
                                onChange={(event) => this.handleOnChangeLogin(event, 'password')}
                                name={'password'}
                            />
                        </div>
                        <div className='col-12 btn-login-content'>
                            <button
                                className='btn-login'
                                onClick={() => { this.handleLogin() }}
                            >
                                Login
                            </button>
                        </div>
                        <div className='col-12 forget-password-content'>
                            <a className='forget-password' href=''>
                                Quen mat khau
                            </a>

                        </div>
                        <div className='col-12 icon-content'>
                            <div className='icon'>
                                <i className="fab fa-facebook"></i>
                                Facebook
                            </div>
                            <div className='icon'>
                                <i className="fab fa-google"></i>
                                Google
                            </div>
                            <div className='icon'>
                                <i className="fab fa-apple"></i>
                                Apple
                            </div>
                        </div>
                    </div>
                    <div className='col-3 ad-right'>
                        Advertising right
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
