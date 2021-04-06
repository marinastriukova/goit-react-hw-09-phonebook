import style from './ContactsList.module.css';
import styles from '../Phonebook.module.css';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/phonebook/phonebook-operations';
import selectors from '../../redux/phonebook/phonebook-selectors';


export default function ContactsList() {
const dispatch = useDispatch();

const contacts = useSelector(selectors.getVisibleContacts)

const onRemove = id => dispatch(operations.deleteContact(id))


    return (
        <TransitionGroup component="ul" className={style.list}>
            {contacts.length === 0 ? <CSSTransition in={contacts.length === 0} timeout={250} classNames={styles} unmountOnExit>
            <p>Add contacts please</p>
            </CSSTransition> :
            (contacts.map(contact => {
                return (
                    <CSSTransition key={contact.id} in={true} appear={true} timeout={250} classNames={styles} unmountOnExit>
                        <li className={style.items}>
                            <p>
                                <span>{contact.name}: </span>
                                <span>{contact.number}</span>
                            </p>
                            <button className={style.button} onClick={() => onRemove(contact.id)}>Delete</button>
                        </li>
                    </CSSTransition>)
            }
            ))}
        </TransitionGroup>)
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
    onRemove: PropTypes.func
}





