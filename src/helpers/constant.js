import React from 'react';

export const ACTIVITY_TYPE = [
  'jogging',
  'pushup',
  'skipping',
  'squats',
  'swimming',
];

export const ACTIVITY_UNITS = {
  jogging: 'km',
  pushup: 'sets',
  skipping: 'mins',
  squats: 'mins',
  swimming: 'meters',
};

export const ACTIVITY_ACT = {
  jogging: 'run',
  pushup: 'did',
  skipping: 'skipped',
  squats: 'workout',
  swimming: 'swim',
};

export const ACTIVITY_UNITS_LONG = {
  jogging: 'kilometers',
  pushup: 'sets',
  skipping: 'minutes',
  squats: 'minutes',
  swimming: 'meters',
};

export const ACTIVITY_CHANGE_VALUES = {
  jogging: 5,
  pushup: 1,
  skipping: 5,
  squats: 5,
  swimming: 50,
};

export const ACTIVITY_ICONS = activity => {
  switch (activity) {
    case 'jogging':
      return (<i className="fas fa-running fa-2x" />);
    case 'pushup':
      return (<i className="fas fa-heartbeat fa-2x" />);
    case 'skipping':
      return (<i className="fas fa-headphones-alt fa-2x" />);
    case 'squats':
      return (<i className="fas fa-dumbbell fa-2x" />);
    case 'swimming':
      return (<i className="fas fa-swimmer fa-2x" />);
    default:
      return (<i className="fas fa-walking fa-2x" />);
  }
};
