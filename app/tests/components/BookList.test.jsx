import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import * as actions from 'actions';
import {BookList} from 'App';

describe('BookList', () => {
 it('should exist', () => {
  expect(BookList).toExist();
 });
});
