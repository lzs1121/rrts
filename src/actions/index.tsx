import axios from 'axios';
import { Dispatch } from 'redux';
import { AcitonTypes } from './types';

interface FetchTodosAction {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<FetchTodosAction[]>(url);

    dispatch({
      type: AcitonTypes.fetchTodos,
      payload: response.data
    });
  };
};
