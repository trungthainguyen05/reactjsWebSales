import React, { Component } from 'react';
import './Contact.scss'

class Contact extends Component {

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
            <div >
                Hello from contact
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

// export default connect(mapStateToProps, mapDispatchToProps)(Contact);
export default Contact;
