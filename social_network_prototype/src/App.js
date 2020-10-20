import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="main_content">
          <Route path="/profile" render={ () => <Profile posts={props.state.profilePage.posts} addPost={props.addPost} 
                                                         newPostText={props.state.profilePage.newPostText}
                                                         updateNewPostText={props.updateNewPostText}/> }/>
          <Route path="/dialogs" render={ () => <Dialogs messages={props.state.dialogsPage.messages} dialogs={props.state.dialogsPage.dialogs}/> }/>
        </div>
      
      </div>
    </BrowserRouter>
  )
}

export default App;
