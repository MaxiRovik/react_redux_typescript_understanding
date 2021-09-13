import React, {useEffect} from 'react';
import {useTypedSelector} from "../hook/useTypedSelector";
import {useActions} from "../hook/useAction";



const TodoList: React.FC = () => {
    const {todos, page, error, limit, loading} = useTypedSelector(state => state.todo);
    const {fetchTodos, setTodoPage} = useActions();
    const pages = [1,2,3,4,5]

    useEffect(() => {
        fetchTodos(page,limit)
    }, [page]);

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error)
        return <h1>{error}</h1>

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id} style = {{padding:'10px'}}>{todo.id} - {todo.title}</div>
            )}
            <div style = {{display:'flex', justifyContent:'center'}}>
                {pages.map (p =>
                    <div onClick = {() => setTodoPage(p)}
                        style = {{border:p === page ? '3px solid green': '1px solid grey',
                        padding:'10px', fontSize: 24}}>
                        {p}</div> )}
            </div>

        </div>
    )

};

export default TodoList;