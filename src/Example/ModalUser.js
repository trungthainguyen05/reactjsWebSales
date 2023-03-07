import React, { Component } from 'react';
import './ModalUser.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


class ModalUser extends Component {

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

    handleOnChangeInput = () => {

    }

    render() {
        return (

            <div className="container modal-user">
                <div className="row row-mu-title">
                    <div className="col-12 col-mu-title">
                        User detail
                    </div>
                </div>
                <div className="row row-mu-body">
                    <div className="form-group col-4 input-container">
                        <label>Email: </label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group col-4 input-container">
                        <label>Password: </label>
                        <input
                            className="form-control"
                            type="password"
                            onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                            value={this.state.password}
                        />
                    </div>
                    <div className="form-group col-4 input-container">
                        <label>First name: </label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}
                            value={this.state.firstName}
                        />
                    </div>
                    <div className="form-group col-4 input-container">
                        <label>Last name: </label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group col-8 input-container">
                        <label>Address: </label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                            value={this.state.address}
                        />
                    </div>
                    <div className="form-group col-4 input-container">
                        <label>Phone number: </label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(event) => { this.handleOnChangeInput(event, "phonenumber") }}
                            value={this.state.phonenumber}
                        />
                    </div>
                    <div className="form-group col-4 input-container">
                        <label>Gender: </label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(event) => { this.handleOnChangeInput(event, "gender") }}
                            value={this.state.gender}
                        />
                    </div>
                    <div className="form-group col-4 input-container">
                        <label>Role: </label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(event) => { this.handleOnChangeInput(event, "role") }}
                            value={this.state.role}
                        />
                    </div>



                </div>
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

// export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
export default ModalUser;
