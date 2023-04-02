import React, { Component } from 'react';
import './HomeHeader.scss'
import { Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { LANGUAGES } from './../utils/constant'
import { changeLanguageApp } from './../store/actions';
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowLanguage: false,
            language: '',
            isActive: 'Home',
        }
    }

    async componentDidMount() {
        this.props.changeLanguageAppRedux(this.props.language);
        this.changeLanguage(this.props.language);

    }

    componentDidUpdate(prevProps, PrevState, SnapShot) {
        if (prevProps.language !== this.props.language) {
            let copyState = { ...this.state };
            copyState["language"] = this.props.language;
            this.setState({
                ...copyState
            })
            this.changeLanguage(this.props.language)
        }
    }

    changeLanguage = (item) => {
        let copyState = { ...this.state };
        copyState["language"] = item;
        this.setState({
            ...copyState
        });
        this.props.changeLanguageAppRedux(item);
    }

    changeActive = (item) => {
        let copyState = { ...this.state };
        copyState["isActive"] = item;
        this.setState({
            ...copyState
        })
    }

    render() {
        // console.log('>>Check language from redux: ', this.props.language)
        // console.log('>>CHeck state: ', this.state);
        let isActive = this.state.isActive;
        let language = this.state.language;
        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <div className='header-logo' src='https://bookingcare.vn/assets/icon/bookingcare-2020.svg'>

                        </div>
                    </div>
                    <div className='center-content'>
                        <div className={isActive === 'Home' ? 'child-content-center active1' : 'child-content-center'}>
                            <NavLink
                                to="/"
                                activeclassname="active"
                                onClick={() => this.changeActive('Home')}
                            >
                                <FormattedMessage id='homeheader.home' />
                            </NavLink>
                        </div>
                        <div className={isActive === 'Product' ? 'child-content-center active1' : 'child-content-center'}>
                            <NavLink
                                to="/Product"
                                activeclassname="active"
                                onClick={() => this.changeActive('Product')}
                            >
                                <FormattedMessage id='homeheader.product' />
                            </NavLink>
                        </div>
                        <div className={isActive === 'Contact' ? 'child-content-center active1' : 'child-content-center'}>
                            <NavLink
                                to="/Contact"
                                activeclassname="active"
                                onClick={() => this.changeActive('Contact')}
                            >
                                <FormattedMessage id='homeheader.contact' />
                            </NavLink>
                        </div>
                        <div className={isActive === 'ListUser' ? 'child-content-center active1' : 'child-content-center'}>
                            <NavLink
                                to="/user"
                                activeclassname="active"
                                onClick={() => this.changeActive('ListUser')}
                            >
                                <FormattedMessage id='homeheader.listuser' />
                            </NavLink>
                        </div>
                        <div className={isActive === 'Login' ? 'child-content-center active1' : 'child-content-center'}>
                            <NavLink
                                to="/auth/login"
                                activeclassname="active"
                                onClick={() => this.changeActive('Login')}
                            >
                                <FormattedMessage id='homeheader.login' />
                            </NavLink>
                        </div>
                    </div>
                    <div className='right-content'>
                        <div className='child-content-right notify'>
                            <FormattedMessage id='homeheader.announcement' />
                        </div>
                        <div className='child-content-right support'>
                            <FormattedMessage id='homeheader.help' />
                        </div>
                        <div className='child-content-right language'>
                            <FormattedMessage id='homeheader.language' />
                            <div className='select-language'>
                                <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}>
                                    <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VI</span>
                                </div>
                                <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}>
                                    <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
                                </div>
                            </div>
                        </div>
                        <div className='child-content-right login'>
                            <FormattedMessage id='homeheader.login' />
                        </div>
                    </div>
                </div>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
