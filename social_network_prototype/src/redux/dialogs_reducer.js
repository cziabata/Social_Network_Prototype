const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

let initialState = {
    
        dialogs: [
            {id: "1", name: "USER 1"},
            {id: "2", name: "USER 2"},
            {id: "3", name: "USER 3"},
            {id: "4", name: "USER 4"},
          ],
        messages: [
            {id: "1", message: "MESSAGE 1"},
            {id: "2", message: "MESSAGE 2"},
            {id: "3", message: "MESSAGE 3"},
            {id: "4", message: "MESSAGE 4"},
          ],
        newMessage: "",
}

export let dialogs_reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: 
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: state.newMessage}],
                newMessage: "",
        }
        case UPDATE_NEW_MESSAGE: 
            return {
                ...state,
                newMessage: action.newMessage,
        }
        default:
            return state;
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE});
export const updateNewMessageAC = (text) => ({type: UPDATE_NEW_MESSAGE, newMessage: text})