import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentPage } from '../../slices/statusSlice';

const Header = () => {
  const { currentPage } = useSelector(state => state.status);
  const dispatch = useDispatch();

  return (
    <div className="App-header">
      <Link
        to="/"
        className={currentPage === 'track progress' ? 'left-btn-off' : 'left-btn-on'}
        onClick={() => dispatch(setCurrentPage('track progress'))}
      >
        <i className="fas fa-chevron-left fa-2x" />
      </Link>
      <Link to="/" onClick={() => dispatch(setCurrentPage('track progress'))}>
        <h3 className="App-title">
          {currentPage || 'track progress'}
        </h3>
      </Link>
      <Link
        to="/"
        className="right-btn-off"
      >
        right
      </Link>

    </div>
  );
};

export default Header;
