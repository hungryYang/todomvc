import React,{Component} from 'react'
import {connect} from 'react-redux'

import {addTodo} from '../actions.js'

class AddTodo extends Component {

    constructor(props,context){
        super(props,context)

        this.onSubmit = this.onSubmit.bind(this)
        // this.refInput = this.refInput.bind(this)
        this.onInputChange = this.onInputChange.bind(this)

        this.state={
            state:''
        }
    }

    onSubmit(e){
        e.preventDefault()

        const input = this.input

        const inputValue = this.state.value
        if(!inputValue.trim()){
            return 
        }

        this.props.onAdd(inputValue)

        this.setState({value:''})
    }

    onInputChange(e){
        this.setState({
            value:e.target.value
        })
    }

    // refInput(node){
    //     this.input = node
    // }

    render(){
        return (
            <div className = "add-todo">
                <form onSubmit={this.onSubmit}>
                    {/*<input type="text" className="new-todo" ref={this.refInput}/>*/}
                    <input type="text" onChange={this.onInputChange} value={this.state.value} className="new-todo"/>
                    <button className="add-button" type="submit">
                        添加
                    </button>
                </form> 
            </div>
        )
    }
}

function mapDispatchToprops(dispatch,ownProps){
    return {
        onAdd:(text)=>{
            dispatch(addTodo(text))
        }
    }
}

export default connect(null,mapDispatchToprops)(AddTodo)