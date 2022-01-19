import { InjectedFormProps } from "redux-form";
import { AddmessageFormType } from "./Dialogs";
import { Field, reduxForm } from "redux-form";
import s from "./Dialogs.module.css";
import { Textarea } from "../Common/FormsControl/FormsControls";
import { maxLengthCreator, required } from "../utils/validators";

const  maxlenght50 = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<AddmessageFormType>> = (
  props
) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={s.inputStyle}
          component={Textarea}
          validate={[required, maxlenght50]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button className={s.button}>Sent</button>
      </div>
    </form>
  );
};

export const AddmessageFormRedux = reduxForm<AddmessageFormType>({
  form: "dialogAddMessageForm",
})(AddMessageForm);
