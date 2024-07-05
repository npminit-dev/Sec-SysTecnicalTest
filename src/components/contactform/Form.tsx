import styles from '@styles/contactform.module.css'
import { FormEvent, useReducer, useRef } from 'react';
import { Action, contactFormProps, initialState, State } from '../../../typedefs/contactform';
import { RxReload } from 'react-icons/rx';

const ContactForm = ({ setFormResult }: contactFormProps) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const form = useRef<HTMLFormElement|null>(null)
  const textarea = useRef<HTMLTextAreaElement|null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(validateTextArea(state.message)) setFormResult(state)
    else textarea.current?.classList.add(styles.invalid_textarea)
  }

  const validateTextArea = (text:string) => {
    const regex = /^.{20,500}$/;
    return regex.test(text.trim());
  }

  const handleReset = () => {
    form.current && form.current.reset()
    textarea.current && textarea.current.classList.remove(styles.invalid_textarea)
    dispatch({ type: 'RESET' })
    setFormResult(null)
  }

  return (
    <form id={styles.form} ref={form} onSubmit={(e) => handleSubmit(e)}>
      <h3 id={styles.form_title}>Contact me! 📬</h3>
      <label className={styles.label}>
        First name
        <input
          className={styles.input}
          value={state.firstName}
          onChange={(e) => dispatch({ type: 'SET_FIRST_NAME', payload: e.target.value })}
          minLength={2} maxLength={40} required
          pattern="^(?=(.*\S.*\S)).{2,}$" type="text"
          placeholder='Nicolas'
        />
      </label>
      <label className={styles.label}>
        Last name
        <input
          className={styles.input}
          value={state.lastName}
          onChange={(e) => dispatch({ type: 'SET_LAST_NAME', payload: e.target.value })}
          minLength={2} maxLength={40} required
          pattern="^(?=(.*\S.*\S)).{2,}$" type="text"
          placeholder='Gonzalez'
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
          value={state.email}
          type="email" required
          placeholder='nico_onpoint@gmail.com'
        />
      </label>
      <label className={styles.label}>
        Message
        <textarea
          id={styles.textarea}
          ref={textarea}
          onChange={(e) => {
            if(!validateTextArea(e.target.value)) e.target.classList.add(styles.invalid_textarea)
            else e.target.classList.remove(styles.invalid_textarea)
            dispatch({ type: 'SET_MESSAGE', payload: e.target.value })
          }}
          value={state.message}
          required minLength={20} maxLength={500}
          placeholder='I want to contact you! When can we have a meeting?'
        />
      </label>
      <div id={styles.buttons_box}>
        <RxReload id={styles.reset} onClick={handleReset}/>
        <button id={styles.submit} form={styles.form} type="submit">send</button>
      </div>
    </form>
  );
}

export default ContactForm;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FIRST_NAME':
      return { ...state, firstName: action.payload };
    case 'SET_LAST_NAME':
      return { ...state, lastName: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};