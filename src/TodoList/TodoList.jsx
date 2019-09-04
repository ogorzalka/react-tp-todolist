import React, { Component } from 'react';
import TodoHeader from "./TodoHeader";
import Todo from "../Todo/Todo";
import styles from './TodoList.module.scss';
import AddNewTodo from "../AddNewTodo/AddNewTodo";

export default class TodoList extends Component {
    render() {
        return (
            <div className={styles.todolist}>
                <TodoHeader>Mon titre</TodoHeader>
                <div className={styles.cards}>
                    <Todo />
                    <AddNewTodo />
                </div>
            </div>
        );
    }
}
