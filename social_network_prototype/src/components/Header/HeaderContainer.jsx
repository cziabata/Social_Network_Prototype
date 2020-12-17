import React from "react";
import { connect } from "react-redux";
import { setAuthInfo } from "./../../redux/auth_reducer";
import Header from "./Header.jsx";
import * as axios from "axios";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0) {
                let {id, login, email } = response.data.data;
                this.props.setAuthInfo({id, email, login});
            }
        })
    }
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthInfo})(HeaderContainer);