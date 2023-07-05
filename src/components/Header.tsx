import React from 'react';
import styles from '../styles/header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <span className={styles.dashBoardHeader}>Dashboard</span>
            <div>
                <span>
                    <p className={styles.greeting}>Good morning, Blessing ⛅️</p>
                    <p className={styles.summary}>Check out your dashboard summary.</p>
                </span>
                <a>View  analytics</a>
            </div>
        </header>
    )
}

export default Header;