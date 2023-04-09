import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeLanguageApp } from '../store/actions';


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    async componentDidMount() {
        let { isLoggedIn } = this.props;
    }

    componentDidUpdate(prevProps, PrevState, SnapShot) {
        if (prevProps.language !== this.props.language) {

        }
    }


    render() {

        return (
            <React.Fragment>
                <div>this is the homepage</div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
