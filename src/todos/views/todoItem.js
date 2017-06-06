import React,{Component} from 'react'
import {toggleTodo,removeTodo} from '../actions.js'
import {connect} from 'react-redux'

class TodoItem extends Component{
    constructor(){
        super(...arguments)
    }

    render(){
        const {onToggle,onRemove,completed,text} = this.props
        console.log('enter TodoItem render: ' + text);
        return (
            <li className = "todo-item"
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
            >   
                <input type="checkbox" className="tooggle" checked={completed ? "checked" : ""} readOnly onClick={onToggle}/>
                <label className="text">{text}</label>
                <button className="remove" onClick={onRemove}>x</button>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps;
  return {
    onToggle: () => dispatch(toggleTodo(id)),
    onRemove: () => dispatch(removeTodo(id))
  }
};

export default connect(null,mapDispatchToProps)(TodoItem);
