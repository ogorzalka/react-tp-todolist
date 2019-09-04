import React, { Component } from 'react';
import styles from './AddNewList.module.scss';  // on importe les styles du module (l'extension *.module.scss indique qu'il doit cloisonner les styles du composant

class AddNewList extends Component {

    state = {
        type: 'button'
    };

    addListInput = () => {
        this.setState(state => ({
            type: 'input'
        }));
    };

    // fonction qui gère le rendu
    render() {

        const { type } = this.state;

        if (type === 'button') {

            return (
                <button onClick={this.addListInput} className={styles.add}>
                    <span className="placeholder">+ Ajoutez une autre liste</span>
                </button>
            );
        } else {
            return (
                <div className="card-composer">
                    <div className="list-card">
                        <div className="card-details">
                            <textarea className="list-card-composer-textarea js-card-title"></textarea>
                        </div>
                    </div>
                    <div className="card-button">
                        <input className="primary confirm mod-compact js-add-card" type="submit" value="Ajouter une carte" />
                    </div>
                </div>
            );
        }
    }
}

export default AddNewList;
