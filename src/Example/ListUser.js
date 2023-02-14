import React, { Component } from 'react';
import './ListUser.scss'
import { getAllUsers } from '../services/userService'

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
    }

    componentDidUpdate(prevProps, PrevState, SnapShot) {
        // if (prevProps.language !== this.props.language) {

        // }
    }

    render() {
        // console.log('>>> Check user List: ', this.state)
        let arrUsers = this.state.listUsers
        return (
            <div className="table-container">
                <div className="table-title">
                    list user from server
                </div>
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
                                        <td>Edit - Delete</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
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

// export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
export default ListUser;
