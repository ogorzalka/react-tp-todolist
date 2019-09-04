import React, { Component } from 'react';
import styles from './Timer.module.scss'; // on importe les styles du module (l'extension *.module.scss indique qu'il doit cloisonner les styles du composant

class Timer extends Component {

    // autre méthode pour déclarer le state initial
    constructor(props) {
        super(props);
        // L'état est « sauvegardé » dans un objet litéral
        this.state = {
            datetime: new Date()
        };

    }

    updateTime = () => {
        this.setState(state => ({
            datetime : new Date()
        }));
    }

    componentDidMount() {
        this.intervalTimer = setInterval( () => this.updateTime(), 60 )
    }

    componentWillUnmount() {
        clearInterval( this.intervalTimer );
    }

    // fonction qui gère le rendu
    render() {
        const { datetime } = this.state;
        return <div className={styles.timer}>{datetime.toLocaleTimeString()}</div>;
    }
}

export default Timer;
