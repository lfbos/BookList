import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export class BookList extends React.Component {
 render () {
  return (
   <div>
    BookList
   </div>
  );
 }
};

export default Redux.connect(
 (state) => {
  return state;
 }
)(BookList);
