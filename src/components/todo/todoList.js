import React from 'react';   
import { FaTrashAlt } from 'react-icons/fa';
import CompletedTodo from './completedTodo';
 
const TodoList = ({myTodos, deleteTodo, addTodo, completedTodo}) => {
    const myTodoList = myTodos.length ? (myTodos.map((m,i)=> {
        return (
        <div key={i} style={{borderBottom:'2px groove black', alignItems:'center', width: '100%', padding:'10px'}}>
            <div>
                <span className='mr-3'><input type="checkbox" value=""  onClick={ ()=> {completedTodo(m.id)}} /></span>
                {m.title}
                <span className="text-danger px-3" onClick={ ()=> {deleteTodo(m.id)}}><FaTrashAlt /></span>
            </div>
            <div>{m.status}</div>    
        </div> )})) 
        : 
            (<p>You have no Todos</p>)
// Dont delete comment
    const myAddTodo = (myTodos =()=> {
        return (
            <div style={{borderBottom:'2px groove black', margin:'3%',borderRadius:'3px'}}>

            </div>
        )
    })
    return(
        <div style={myTodoListStyle}>
            {myTodoList}
        </div>
    )
    
}
const myTodoListStyle = {
    alignItems: 'center',
    
}

export default TodoList;
