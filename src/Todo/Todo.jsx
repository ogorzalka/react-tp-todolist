import React, { Component } from 'react';
import styles from './Todo.module.scss';  // on importe les styles du module (l'extension *.module.scss indique qu'il doit cloisonner les styles du composant

class Todo extends Component {

    // autre méthode pour déclarer le state initial
    constructor(props) {
        super(props);
        // L'état est « sauvegardé » dans un objet litéral
        this.state = {
            todos : [ 'Ma tâche' ]
        };

    }

    // fonction qui gère le rendu
    render() {

        const { todos } = this.state; // on destructure this.state à la manière de la fonction "list" en php

        return (
            todos.map((item,i) => <div key={i} className={styles.todo}>{item}</div>)

        );
    }
}

export default Todo;
