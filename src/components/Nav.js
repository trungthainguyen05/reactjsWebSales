import React, { Component } from 'react';
import './Nav.scss'
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {

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
            <div className="topnav">
                <NavLink to="/" activeclassname="active">Home</NavLink>
                <NavLink to="/Product" activeclassname="active">Product</NavLink>
                <NavLink to="/Contact" activeclassname="active">Contact</NavLink>
                <NavLink to="/user" activeclassname="active">ListUser</NavLink>

                {/* <Link to="/">Home</Link>
                <Link to="/Product">Product</Link>
                <Link to="/Contact">Contact</Link> */}

                {/* <a className="active" href="/">Home</a>
                <a href="/Product">Product</a>
                <a href="/Contact">Contact</a> */}
            </div>
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

// export default connect(mapStateToProps, mapDispatchToProps)(Nav);
export default Nav;
