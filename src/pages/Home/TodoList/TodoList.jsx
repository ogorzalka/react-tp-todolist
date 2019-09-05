import React, { Component } from 'react';
import TodoHeader from "./TodoHeader"; // l'utilisation du composant "TodoHeader" dans "TodoList" nécessite de l'importer
import Todo from "../Todo/Todo"; // l'utilisation du composant "AddNewTodo" dans "TodoList" nécessite de l'importer
import styles from './TodoList.module.scss';  // on importe les styles du module (l'extension *.module.scss indique qu'il doit cloisonner les styles du composant
import InputToggler from "./../../../components/InputToggler/InputToggler";

class TodoList extends Component {

    // autre méthode pour déclarer le state initial
    constructor(props) {

        super(props);

        // L'état est « sauvegardé » dans un objet litéral
        this.state = {
            todos : [ 'Ma tâche' ]
        };

    }

    handleNewTodo = (text) => {
        this.setState(prevState => ({
            todos : [ ...prevState.todos, text ]
        }));
    }

    // fonction qui gère le rendu
    render() {

        const { todos } = this.state;

        return (
            <div className={styles.todolist}>
                <TodoHeader>{this.props.header}</TodoHeader>
                <div className={styles.cards}>
                    { todos.map((item,i) => <Todo key={i}>{item}</Todo>) }
                    <InputToggler onClickSubmit={this.handleNewTodo} buttonTxt="Ajouter la carte">+ Ajouter une autre carte</InputToggler>
                </div>
            </div>
        );
    }
}

export default TodoList;
