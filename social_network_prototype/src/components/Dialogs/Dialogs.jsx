import React from "react";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( dialogs => <DialogItem id={dialogs.id} name={dialogs.name}/> );

    let messageElements = props.messages.map( message => <MessageItem message={message.message}/> );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
              { dialogsElements }
            </div>
            <div className={classes.messagesItems}>
               { messageElements }
               <textarea></textarea>
               <button>Send Messge</button>
            </div>
        </div>
    )
}

export default Dialogs;