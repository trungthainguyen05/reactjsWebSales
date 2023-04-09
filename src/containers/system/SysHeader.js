import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom';
import { changeLanguageApp } from "../../store/actions";
import './SysHeader.scss';

class System extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuApp: [],
        }
    }

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    async componentDidMount() {
        let { userInfo } = this.props;


    }

    componentDidUpdate(prevProps, PrevState, SnapShot) {
        // if (prevProps.language !== this.props.language) {

        // }
    }


    render() {

        return (
            <React.Fragment>
                <div className='header-system-container'>
                    <div className='header-system-content'>
                        <div className='left-content'>
                            <div className='header-logo'>

                            </div>
                        </div>
                        <div className='center-content'>

                        </div>
                        <div className='right-content'>
                            <div className='login-status'>
                                <div>
                                    Xin chào! Bạn ....
                                </div>

                            </div>
                        </div>

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
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
