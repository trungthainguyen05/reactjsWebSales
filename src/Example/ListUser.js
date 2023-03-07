import React, { Component } from 'react';
import './ListUser.scss'
import { getAllUsers, getAllcodes } from '../services/userService';
import ModalUser from './ModalUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { ALLCODESTYPE } from '../utils/constant';

class ListUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listUsers: []
        }
    }

    async componentDidMount() {
        let res = await getAllUsers(10);
        this.setState({
            listUsers: res && res.userList ? res.userList : []
        })

        let genderList = await this.handleGetAllcodes('GENDER');
        console.log('>>> Check genderList', genderList)

    }

    handleGetAllcodes = async (inputType) => {
        if (!inputType) {
            inputType = 'ALL';
        }
        let res = await getAllcodes(inputType);
        return res
    }

    componentDidUpdate(prevProps, PrevState, SnapShot) {
        // if (prevProps.language !== this.props.language) {

        // }
    }

    handleEditUser = (item) => {
        // console.log('>>check userItem: ', item)
        this.props.deleteUserRedux(item);
    }

    handleDeleteUser = (item) => {

    }

    render() {
        // console.log('>>> check listUser: ', this.state.listUsers);
        // console.log('>> Check props: ', this.props)
        let arrUsers = this.state.listUsers
        return (
            <>
                <ModalUser />
                <div className="container table-container">
                    <div className="row row-table-title">
                        <div className="col-12 title">
                            list user from server
                        </div>
                    </div>

                    <div className="row row-table-content">
                        <div className="col-12 btn-add-new">
                            <button className="btn-new">
                                <span>
                                    Add new
                                </span>
                            </button>
                        </div>

                        <div className="col-12 col-table-content">
                            <table className="table-content">

                                <tbody>
                                    <tr>
                                        <th>No</th>
                                        <th>Last name</th>
                                        <th>First name</th>
                                        <th>Email</th>
                                        <th>Phone number</th>
                                        <th>Address</th>
                                        <th>Gender</th>
                                        <th>Action</th>
                                    </tr>

                                    {arrUsers && arrUsers.length > 0 &&
                                        arrUsers.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phonenumber}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.gender}</td>
                                                    <td>
                                                        <button
                                                            className="btn-edit"
                                                            onClick={() => this.handleEditUser(item)}
                                                        >
                                                            <i className="fas fa-pencil-alt">Edit</i>
                                                        </button>
                                                        <button
                                                            className="btn-delete"
                                                            onClick={() => this.handleDeleteUser(item)}
                                                        >
                                                            <i className="fas fa-trash">Delete</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataReduxUser: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete })
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
