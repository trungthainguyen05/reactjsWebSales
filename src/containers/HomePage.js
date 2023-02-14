import React, { Component } from 'react';
import './HomePage.scss';
// import { withRouter } from "react-router-dom";
import Color from '../HOC/Color';

class HomePage extends Component {

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

            < div >
                This is the homePage
            </div >
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         language: state.app.language,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
// export default HomePage;
export default Color(HomePage);
