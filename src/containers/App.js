import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route, redirect, Navigate } from 'react-router-dom';
import './App.scss';

import { PATH } from '../utils';
import System from '../routes/System';
import { userIsAuthenticated, userIsNotAuthenticated } from '../HOC/authentication';
import HomePage from './HomePage';
import Login from './auth/Login';

// import { ToastContainer } from 'react-bootstrap';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    async componentDidMount() {
        this.handlePersistorState();
    }

    componentDidUpdate(prevProps, PrevState, SnapShot) {
        // if (prevProps.language !== this.props.language) {

        // }
    }

    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path={PATH.LOGIN} element={<Login />} />
                        <Route path={PATH.SYSTEM} element={<System />} />
                        <Route path={PATH.HOME} element={<HomePage />} />

                        <Route
                            path="*"
                            element={<Navigate to="/" replace />}
                        />

                    </Routes>
                </Router>

                {/* <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                /> */}

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        // language: state.app.language,
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
