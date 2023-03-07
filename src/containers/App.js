import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from '../components/Nav';
import HomePage from './HomePage';
import Contact from './Contact';
import ListUser from '../Example/ListUser';
import Login from '../auth/Login';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, PrevState, SnapShot) {
        // if (prevProps.language !== this.props.language) {

        // }
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <Nav />
                </div>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/Contact" element={<Contact />} />
                    <Route exact path="/user" element={<ListUser />} />
                    <Route exact path="/auth/login" element={<Login />} />
                </Routes>

            </Router>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
