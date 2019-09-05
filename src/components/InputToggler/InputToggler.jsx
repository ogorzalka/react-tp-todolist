import React, { Component } from 'react';
import styles from './InputToggler.module.scss';  // on importe les styles du module (l'extension *.module.scss indique qu'il doit cloisonner les styles du composant
import Button from './../Button/Button';
import PropTypes from 'prop-types';

class InputToggler extends Component {

    state = {
        type: 'button',
        textareaValue: ''
    };

    propDefault = {
        'buttonTxt' : 'Ajouter'
    };

    addListInput = () => {
        this.setState(state => ({
            type: 'input'
        }));
    };

    checkForm = (event) => {

        const { textareaValue } = this.state;

        event.preventDefault();

        if (textareaValue !== '') {
            this.props.onClickSubmit(textareaValue);

            this.setState(state => ({
                textareaValue: '',
                type: 'button'
            }));
        }
    }

    updateTextValue = event => {
        const { value} = event.target;

        this.setState(() => ({ 'textareaValue' : value }));

        // this.setState(() => ({ [name] : value })); autre méthode qui permet d'ajouter dynamiquement l'ensemble des name de champs
    }

    // fonction qui gère le rendu
    render() {
        const { type } = this.state;

        let props = Object.assign(this.propDefault, this.props);
        const { buttonTxt } = props;

        if (type === 'button') {
            return (
                <button onClick={this.addListInput} className={styles.add}>
                    <span className="placeholder">{this.props.children}</span>
                </button>
            );
        } else {
            return (
                <form onSubmit={this.checkForm} className="card-composer">
                    <div className="list-card">
                        <div className="card-details">
                            <textarea name="textareaValue" onChange={this.updateTextValue} className="list-card-composer-textarea js-card-title"></textarea>
                        </div>
                    </div>
                    <div className="card-button">
                        <Button type="submit" className="primary confirm mod-compact js-add-card" mode="primary">{buttonTxt}</Button>
                    </div>
                </form>
            );
        }
    }
}

InputToggler.propTypes = {
    buttonTxt: PropTypes.string
}

export default InputToggler;
