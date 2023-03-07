import React, { Component } from 'react';
import './HomePage.scss';
// import { withRouter } from "react-router-dom";
// import Color from '../HOC/Color';



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

            <div className="container" >
                <div className="row">
                    <div className="col-6 form-group">
                        <label>
                            Age:
                        </label>
                        <input className="form-control"
                            value={this.state.fullName}
                            onChange={(event) => this.handleOnChangeInput(event, 'fullName')}
                        />
                    </div>
                    <div className="col-6 form-group">
                        <label>
                            Ten:
                        </label>
                        <input className="form-control"
                            value={this.state.fullName}
                            onChange={(event) => this.handleOnChangeInput(event, 'fullName')}
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

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
// export default HomePage;
export default HomePage;
