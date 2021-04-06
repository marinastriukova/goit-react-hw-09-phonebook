import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth'
import styles from '../form.module.css';

export default function Registration() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case ('name'):
                setName(value);
                break;

            case 'email':
                setEmail(value);
                break;

            case ('password'):
                setPassword(value);
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <h1 className={styles.title}>Registration</h1>

            <form className={styles.form}
                onSubmit={handleSubmit}
                autoComplete='off'
            >
                <label className={styles.label}>
                    Name
                    <input
                        className={styles.input}
                        type='text'
                        name="name"
                        value={name}
                        onChange={handleChange}>
                    </input>
                </label>

                <label className={styles.label}>
                    Email
                    <input
                        className={styles.input}
                        type='email'
                        name="email"
                        value={email}
                        onChange={handleChange}>
                    </input>
                </label>

                <label className={styles.label}>
                    Password
                    <input
                        className={styles.input}
                        type='password'
                        name="password"
                        value={password}
                        onChange={handleChange}>
                    </input>
                </label>

                <button className={styles.button} type='submit'>Register</button>
            </form>
        </div>
    )
}


