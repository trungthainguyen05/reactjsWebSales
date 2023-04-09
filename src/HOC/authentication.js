// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { BrowserRouter as Router, Routes, Route, redirect, Navigate } from 'react-router-dom';

// class authentication extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             isLogin: '',
//         }
//     }

//     async componentDidMount() {
//         this.setState({
//             isLogin: this.props.isLoggedIn,
//         })
//     }

//     componentDidUpdate(prevProps, PrevState, SnapShot) {
//         if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
//             this.setState({
//                 isLogin: this.props.isLoggedIn,
//             })
//         }
//     }


//     render() {
//         let { isLogin } = this.state.isLogin;
//         return (
//             <>
//                 {isLogin && <Navigate to="/system" replace />}
//             </>
//         );
//     }
// }

// const mapStateToProps = state => {
//     return {
//         isLoggedIn: state.user.isLoggedIn,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {

//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(authentication);
