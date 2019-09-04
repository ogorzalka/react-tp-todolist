import React, { Component } from 'react';
import styles from './AddNewTodo.module.scss'; // on importe les styles du module (l'extension *.module.scss indique qu'il doit cloisonner les styles du composant

class AddNewTodo extends Component {

    // fonction qui gère le rendu
    render() {

        return (
            <button className={styles.new}>
                + Ajouter une autre carte
            </button>
        );
    }
}

export default AddNewTodo;
