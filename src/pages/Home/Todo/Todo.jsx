import React, { Component } from 'react';
import styles from './Todo.module.scss';  // on importe les styles du module (l'extension *.module.scss indique qu'il doit cloisonner les styles du composant

class Todo extends Component {

    // fonction qui gère le rendu
    render() {

        return (
            <div className={styles.todo}>{this.props.children}</div>
        );
    }
}

export default Todo;
