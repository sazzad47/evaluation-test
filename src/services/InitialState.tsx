import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import useLocalStorage from '../hooks/useLocalStorage';
import { Todo } from '../types';
import { addTodos } from '../redux/reducer';

const InitialState = () => {
    const [todos] = useLocalStorage<Todo[]>("todos");
    const dispatch = useDispatch();

    const dispatchTodosToStore = (todos: Todo[]) => {
    todos.forEach((todo) => {
        dispatch(addTodos(todo));
    });
    };

    useEffect(() => {
    if (Array.isArray(todos)) {
        dispatchTodosToStore(todos);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, todos]);

  return <></>
}

export default InitialState