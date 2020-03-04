import React from 'react';   
 
const TodoList = ({myTodos, deleteTodo, addTodo}) => {
    const myTodoList = myTodos.length ? (myTodos.map((m,i)=> {
        return (
        <div key={i} style={{borderBottom:'2px groove black', margin:'3%',borderRadius:'3px'}}>
            <div>
                {m.title}
            <span style={{color:'#fff', borderRadius: '100%', backgroundColor: 'red', margin: '15px',padding: '2px'}} onClick={()=> {deleteTodo(myTodos.id)}}>x</span>
            </div>
            <div>{m.status}</div>    
        </div> )})) 
        : 
        (<p>You have no Todos</p>)

    const myAddTodo = (myTodos =()=> {
        return (
            <div style={{borderBottom:'2px groove black', margin:'3%',borderRadius:'3px'}}>

            </div>
        )
    })
    return(
        <div>
            {myTodoList}
        </div>
    )
   
}

export default TodoList;

 // return(
    //     <div>
    //         {props.myTodos.map((m,i)=> {
    //             return (
    //                 <div key={i} style={{borderBottom:'2px groove black', margin:'3%',borderRadius:'3px'}}>
    //                     {/* <div>{m.id}</div> */}
    //                     <div>{m.title}</div>
    //                     <div>{m.status}</div>
    //                 </div> 
    //             )
    //         })}
    //     </div>
    // )

