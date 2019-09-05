import React, { useState, useEffect } from 'react';
import styles from './Timer.module.scss'; // on importe les styles du module (l'extension *.module.scss indique qu'il doit cloisonner les styles du composant

const Timer = () => {
    // Array destructuring
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        // Lance l'intervale à l'initialisation
        let timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => (clearInterval(timerId));
    }, []);

    return (
        <div className={styles.timer}>{date.toLocaleTimeString()}</div>
    );
}

export default Timer;
