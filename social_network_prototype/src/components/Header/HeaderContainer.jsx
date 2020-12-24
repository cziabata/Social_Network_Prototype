import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "./../../redux/auth_reducer";
import Header from "./Header.jsx";
import * as axios from "axios";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setAuthUserData();
    }
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);