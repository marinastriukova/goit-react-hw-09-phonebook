import { useCallback, useEffect, useState } from 'react';
import Section from './Section/Section'
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { CSSTransition } from 'react-transition-group';
import style from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../redux/phonebook/phonebook-operations';
import selectors from '../redux/phonebook/phonebook-selectors';

export default function Phonebook() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');

    const contacts = useSelector(selectors.getAllContacts);

    const onInputChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case ('name'):
                setName(value);
                break;

            case ('number'):
                setNumber(value);
                break; 
        }
    }
  
    const submitForm = e => {
        e.preventDefault();
       

        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
                setError(true);
            setTimeout(() => {
                setError(false)
            }, 2000)
            return
        }

        onAddContact(name, number);
         reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    };

    useEffect(()=>{dispatch(operations.fetchItems())},[dispatch]);
    

    const onAddContact = useCallback(()=>{dispatch(operations.addContact(name, number))},[dispatch, name, number]);

    return (
        <div>
            <Section title='Phonebook'>
                <Form name={name}
                    number={number}
                    onChangeInput={onInputChange}
                    onSubmitForm={submitForm}></Form>
            </Section>
            <Section title='Contacts'>
                <CSSTransition timeout={250} classNames={style} >
                    <Filter />
                </CSSTransition>
                <CSSTransition timeout={500}>
                    <ContactsList />
                </CSSTransition>
                <CSSTransition in={error === true} timeout={1000} classNames={style} unmountOnExit>
                    <ErrorMessage />
                </CSSTransition>
            </Section>
        </div>
    )
}
