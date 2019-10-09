import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyling = () => {
        return {
            textDecoration: this.props.done ? 'line-through':'none'
        }
    }

    render() {
        return (
            <div style={this.getStyling()} className='task'>
                <input type="checkbox" onChange={this.props.markComplete}/>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default TodoItem
