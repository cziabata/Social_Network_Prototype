import React from "react";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( dialogs => <DialogItem id={dialogs.id} name={dialogs.name} key={dialogs.id}/> );

    let messageElements = props.messages.map( messages => <MessageItem message={messages.message} key={messages.id}/> );

    let newMessageText = React.createRef();

    let sendMessage = () => {
        props.sendMessage()
    }
    let updateNewMessage = () => {
        let text = newMessageText.current.value;
        props.updateNewMessage(text)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
              { dialogsElements }
            </div>
            <div className={classes.messagesItems}>
               { messageElements }
               <textarea ref={newMessageText} onChange={updateNewMessage} value={props.newMessage}></textarea>
               <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs;