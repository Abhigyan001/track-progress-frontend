import React from 'react';
import { useSelector } from 'react-redux';
import AddDataHome from './home';
import AddActivity from './addActivity';

const AddDataPage = () => {
  const { currentPage } = useSelector(state => state.status);

  const selectPage = current => {
    const activity = current.split(' ')[1];
    switch (current) {
      case 'add jogging':
      case 'add pushup':
      case 'add skipping':
      case 'add squats':
      case 'add swimming':
        return <AddActivity activity={activity} />;
      default:
        return <AddDataHome />;
    }
  };

  const page = selectPage(currentPage);

  return (
    <div className="addData-page">
      {page}
    </div>
  );
};

export default AddDataPage;
