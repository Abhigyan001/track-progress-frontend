import React from 'react';
import PropTypes from 'prop-types';

class TopNav extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <header>
          <nav className="navbar navbar-inverse bg-blue fixed-top">
            <h1 className="navbar-brand abs">Progress Tracker</h1>
          </nav>
        </header>
      </>
    );
  }
}

export default TopNav;