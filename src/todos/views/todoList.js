import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {FilterTypes} from '../../constants.js';

const TodoList = ({todos,onToggleTodo,onRemoveTodo}) => {
    console.log(todos)
    return (
        <ul className="todo-list">
        {
            todos.map((item)=>(
                <TodoItem
                    key={item.id}
                    text={item.text}
                    completed={item.completed}
                    id={item.id}
                />
            ))
        }
        </ul>            
    )
}

const SelectVisibleTodos = (todos,filter)=>{
    switch(filter){
        case FilterTypes.ALL:
            return todos
        case FilterTypes.COMPLETED:
            return todos.filter(item=>item.completed)
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item=>!item.completed)
        default:
            throw new Error('unsupported filter')
    }
}

const mapStateToProps = (state)=>{
    return {
        todos:SelectVisibleTodos(state.todos,state.filter)
    }
}

export default connect(mapStateToProps)(TodoList)