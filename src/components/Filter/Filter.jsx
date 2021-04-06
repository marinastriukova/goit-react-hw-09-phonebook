import style from './Filter.module.css';
import styles from '../Phonebook.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import actions from '../../redux/phonebook/phonebook-actions';
import selectors from '../../redux/phonebook/phonebook-selectors';

export default function Filter() {

const dispatch = useDispatch();

const value = useSelector(selectors.getFilter);
const items = useSelector(selectors.getAllContacts);


const onChangeFilter = e => dispatch(actions.changeFilter(e.target.value))

    return(
        <CSSTransition in={items.length > 0} timeout={250} classNames={styles} unmountOnExit>
        <label className={style.label}>
            Find contacts by name
            <input 
            type="text"
            value={value}
            onChange={onChangeFilter}
            className={style.input}
            />
        </label>
        </CSSTransition>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func,
  };




