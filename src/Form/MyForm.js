import React, { Component } from 'react';
import TodoItem from './TodoItem';

class MyForm extends Component {
    state = { valueInput: '', todo: [] };

    handleChange = (event) => {
        console.log(event)
        this.setState({ valueInput: event.target.value });
        this.setState({ newTodo: { todo: event.target.value, isCompleted: false } });


    }

    handleSubmit = (event) => {
        const todoArr = this.state.todo.slice()
        todoArr.push(this.state.newTodo)
        this.setState({ todo: todoArr });
        event.preventDefault();
    }

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                </label>
                    <input type="text" value={this.state.valueInput} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                <TodoItem />
                <TodoItem />

            </main>
        );
    }
}

export default MyForm
