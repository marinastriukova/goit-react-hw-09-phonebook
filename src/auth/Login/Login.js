import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from '../form.module.css';

export default function Login () {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case ('password'):
                setPassword(value);
                break;
        }
    }


    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            
            dispatch(authOperations.logIn({email,password}));
        },[dispatch, email, password]
    ) 


    return (
        <div>
            <h1 className={styles.title}>Login</h1>

            <form onSubmit={handleSubmit} autoComplete='off' className={styles.form}>
                <label className={styles.label}>
                    Email
                        <input type="email"
                        name="email"
                        value={email}
                        className={styles.input}
                        onChange={handleChange} />
                </label>
                <label className={styles.label}>
                    Password
                        <input type="password"
                        name="password"
                        value={password}
                        className={styles.input}
                        onChange={handleChange} />
                </label>
                <button className={styles.button} type='submit'>Login</button>
            </form>
        </div>
    )
}

