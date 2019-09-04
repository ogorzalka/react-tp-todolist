import React, { Component } from 'react';
import TodoHeader from "./TodoHeader"; // l'utilisation du composant "TodoHeader" dans "TodoList" nécessite de l'importer
import Todo from "../Todo/Todo"; // l'utilisation du composant "AddNewTodo" dans "TodoList" nécessite de l'importer
import styles from './TodoList.module.scss';  // on importe les styles du module (l'extension *.module.scss indique qu'il doit cloisonner les styles du composant
import AddNewTodo from "../AddNewTodo/AddNewTodo"; // l'utilisation du composant "AddNewTodo" dans "Todolist" nécessite de l'importer

export default class TodoList extends Component {

    // fonction qui gère le rendu
    render() {
        return (
            <div className={styles.todolist}>
                <TodoHeader>{this.props.header}</TodoHeader>
                <div className={styles.cards}>
                    <Todo />
                    <AddNewTodo />
                </div>
            </div>
        );
    }
}
