import { Dispatch, SetStateAction } from "react";

export type contactFormProps = {
  setFormResult: Dispatch<SetStateAction<State|null>>
}

export type State = {
  firstName: string;
  lastName: string;
  email: string;
  message: string
};

export type Action =
  | { type: 'SET_FIRST_NAME'; payload: string }
  | { type: 'SET_LAST_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_MESSAGE'; payload: string }
  | { type: 'RESET' };

export const initialState: State = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
};