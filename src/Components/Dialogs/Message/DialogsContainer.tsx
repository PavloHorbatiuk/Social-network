import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/redax-store";
import {DialogsType, sendMessageBodyAC, updateNewMessageBodyAC} from "../../../Redux/Dialogs-reducer";
import {Dialogs} from "../Dialogs";

// const DialogsItems = (props: any) => {
//     let path = '/dialogs/' + props.id;
//     return (
//         <div className={s.dialog + '' + s.active}>
//             <NavLink to={path}>{props.name}</NavLink>
//         </div>
//     )
// }


export const DialogsContainer = () => {
    const dispatch = useDispatch();
    const dialogsMessage = useSelector<AppRootStateType, DialogsType>(state => state.dialogsReducer)

    const addChatContainer = () => {
        dispatch(sendMessageBodyAC());

    }
    const onNewChangeNewBody = (body:string) => {
        debugger
        dispatch(updateNewMessageBodyAC(body));
    }

    return (
        <Dialogs
            onNewChangeNewBody={onNewChangeNewBody}
            addChatContainer={addChatContainer}
            newMessageBody={dialogsMessage.newMessageBody}

        />
            )
}