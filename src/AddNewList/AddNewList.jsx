import React, { Component } from 'react';
import styles from './AddNewList.module.scss';  // on importe les styles du module (l'extension *.module.scss indique qu'il doit cloisonner les styles du composant

export default class AddNewList extends Component {

    // fonction qui gère le rendu
    render() {
        return (
            <button className={styles.add}>
                <span className="placeholder">+ Ajoutez une autre liste</span>
            </button>
        );
    }
}
