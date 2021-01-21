import React from "react";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( dialogs => <DialogItem id={dialogs.id} name={dialogs.name} key={dialogs.id}/> );

    let messageElements = props.messages.map( messages => <MessageItem message={messages.message} key={messages.id}/> );

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    
    const AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
                <button>Send Message</button>
            </form>
        )
    }

    const AddMessageFormRedux = reduxForm({
        form: "dialogAddMessageForm"
    })(AddMessageForm)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
              { dialogsElements }
            </div>
            <div className={classes.messagesItems}>
               { messageElements }   
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs;