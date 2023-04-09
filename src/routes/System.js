import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom';
import SysHeader from '../containers/system/SysHeader';
import Login from '../containers/auth/Login';

class System extends Component {

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
            <React.Fragment>
                <SysHeader />
                <div className='system-container'>
                    <div className='system-list'>
                        This is the system page
                        {/* <Router>
                            <Routes>
                                <Route exact path='/' Component={SystemHeader} />
                            </Routes>
                        </Router> */}
                    </div>
                </div >
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
