import React, { Component } from 'react';
import './HomeHeader.scss'
import { Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux";

class HomeHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowLanguage: false,
            language: '',
        }
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, PrevState, SnapShot) {
        // if (prevProps.language !== this.props.language) {

        // }
    }

    render() {
        console.log('>>Check language from redux: ', this.props.language)
        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <div className='header-logo' src='https://bookingcare.vn/assets/icon/bookingcare-2020.svg'>

                        </div>
                    </div>
                    <div className='center-content'>
                        <div className='child-content-center active1'>
                            <NavLink to="/" activeclassname="active">Home</NavLink>
                        </div>
                        <div className='child-content-center'>
                            <NavLink to="/Product" activeclassname="active">Product</NavLink>
                        </div>
                        <div className='child-content-center'>
                            <NavLink to="/Contact" activeclassname="active">Contact</NavLink>
                        </div>
                        <div className='child-content-center'>
                            <NavLink to="/user" activeclassname="active">ListUser</NavLink>
                        </div>
                        <div className='child-content-center'>
                            <NavLink to="/auth/login" activeclassname="active">Login</NavLink>
                        </div>
                    </div>
                    <div className='right-content'>
                        <div className='child-content-right notify'>
                            Thông báo
                        </div>
                        <div className='child-content-right support'>
                            Hỗ trợ
                        </div>
                        <div className='child-content-right language'>
                            Ngôn ngữ

                            <select className='select-language'>
                                <option className='option-language'>VI</option>
                                <option className='option-language'>EN</option>
                            </select>
                        </div>
                        <div className='child-content-right login'>
                            Đăng nhập
                        </div>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
