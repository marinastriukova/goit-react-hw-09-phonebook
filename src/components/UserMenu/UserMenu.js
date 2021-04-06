import React, {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button:{
    padding: 3,
    backgroundColor: 'rgb(151, 155, 208)',
  }
};

export default function UserMenu () {
const dispatch = useDispatch();

const name = useSelector(authSelectors.getUsername);

const onLogout = useCallback(()=>{
  dispatch(authOperations.logOut())
}, [dispatch])

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>
      <button style={styles.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}
