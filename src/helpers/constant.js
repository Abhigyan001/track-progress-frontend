import React from 'react';

export const ACTIVITY_TYPE = [
  'html',
  'css',
  'ruby',
  'javascript',
  'react',
  'rubyonrails',
];







export const ACTIVITY_ICONS = activity => {
  switch (activity) {
    case 'html':
      return (<i className="fas fa-folder fa-2x" />);
    case 'css':
      return (<i className="fas fa-folder fa-2x" />);
    case 'ruby':
      return (<i className="fas fa-folder fa-2x" />);
    case 'javascript':
      return (<i className="fas fa-folder fa-2x" />);
    case 'react':
      return (<i className="fas fa-folder fa-2x" />);
    default:
      return (<i className="fas fa-folder fa-2x" />);
  }
};
