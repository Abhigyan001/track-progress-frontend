import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers,
  updateUsers,
  createUser,
  addUser,
} from '../slices/usersSlice';
import { sigIn, setCurrentUser } from '../slices/statusSlice';
import { fetchActivities, updateActivities } from '../slices/activitiesSlice';
import { showMessage } from '../helpers/index';

const LoginPage = () => {
  const [inputName, setInputName] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const ready = true;

  const handleLogin = e => {
    e.preventDefault();
    if (inputName.length >= 3 && ready) {
      const idx = users.findIndex(user => user.name.split(' ')[0].toLowerCase() === inputName.toLowerCase());

      if (idx !== -1) {
        dispatch(setCurrentUser(users[idx]));
        fetchActivities(users[idx].id)
          .then(response => dispatch(updateActivities(response)));
      } else {
        createUser({ name: inputName })
          .then(response => {
            if (response) {
              dispatch(addUser(response));
              dispatch(setCurrentUser(response));
            }
          });
      }

      dispatch(sigIn());
      setInputName('');
    } else {
      if (inputName.length === 0) showMessage('Please enter your name!');
      if (!ready) showMessage('Please make sure the server is connected first!');
    }
  };

  const checkServerStatus = () => {
    if (!ready) {
      fetchUsers()
        .then(response => dispatch(updateUsers(response)));
    }
  };

  return (
    <div className="Login-page">

      <div className="App-logo">
        <h2>Track Progress</h2>
        <i className="fas fa-dumbbell fa-3x" />
        <h3>Measure Your Daily Exercises.</h3>
      </div>

      <form onSubmit={handleLogin} className="Login-form">
        <input
          onChange={e => setInputName(e.target.value)}
          value={inputName}
          type="text"
          minLength="3"
          maxLength="30"
          placeholder="Input Your Name ..."
        />

        <button type="submit" className="btn">Login</button>
      </form>

      <div className="footer-note">
        <div
          className="status-message"
          style={
            ready ? { color: '#97e492', fontStyle: 'normal' } : { color: 'rgb(207, 56, 10)' }
          }
        >
          Server is
          {' '}
          {ready ? 'Connected' : 'Not Connected'}

        </div>

        {
          ready
            ? ''
            : (
              <button type="button" onClick={() => checkServerStatus()}>
                Connect
              </button>
            )
        }

      </div>

    </div>
  );
};

export default LoginPage;
