import { NavLink, Redirect } from "react-router-dom";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { AppRootStateType } from "../../Redux/redax-store";
import { useSelector } from "react-redux";
import { DialogsType } from "../../Redux/Dialogs-reducer";
import { AddmessageFormRedux } from "./AddMessageForm";

export type AddmessageFormType = {
  newMessageBody: string;
};

type dialogsType = {
  addChatContainer: (newMessageBody: string) => void;
  isAuth: boolean;
};
const DialogsItems = (props: any) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + "" + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
export const Dialogs = (props: dialogsType) => {
  const dialogsMessage = useSelector<AppRootStateType, DialogsType>(
    (state) => state.dialogsReducer
  );
  let DialogsElements = dialogsMessage.DialogsData.map((d) => (
    <DialogsItems name={d.name} id={d.id} />
  ));
  let messagesElement = dialogsMessage.MessagesData.map((m) => (
    <Message message={m.message} />
  ));

  const addNewMessage = (inputData: AddmessageFormType) => {
    props.addChatContainer(inputData.newMessageBody);
  };
  if (!props.isAuth) return <Redirect to={"/Login"} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <span>{DialogsElements}</span>
      </div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <AddmessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};


