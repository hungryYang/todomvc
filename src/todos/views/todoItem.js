import React from 'react'

const TodoItem = ({onToggle,onRemove,completed,text})=>{
    const checkedProp = completed?{checked:true}:{}

    return (
        <li
        className="todo-item"
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
        >
            <input type="checkbox" className="onToggle" {...checkedProp} readOnly onClick={onToggle}/>
            <label className="text">{text}</label>
            <button className="remove" onClick={onRemove}>x</button>
        </li>
    )
   
}

export default TodoItem;