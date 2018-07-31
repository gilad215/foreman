import {
  LAYOUT_SHOW_LOADING,
  LAYOUT_HIDE_LOADING,
  LAYOUT_CHANGE_ITEMS,
  LAYOUT_CHANGE_ORG,
  LAYOUT_CHANGE_LOCATION,
} from '../LayoutConstants';

import reducer from '../LayoutReducer';

import { testReducerSnapshotWithFixtures } from '../../../common/testHelpers';
import { layoutMock } from '../Layout.fixtures';

const fixtures = {
  'should return the initial state': {},
  'should handle LAYOUT_SHOW_LOADING': {
    action: {
      type: LAYOUT_SHOW_LOADING,
    },
  },
  'should handle LAYOUT_HIDE_LOADING': {
    action: {
      type: LAYOUT_HIDE_LOADING,
    },
  },
  'should handle LAYOUT_CHANGE_ITEMS with changeActive': {
    action: {
      type: LAYOUT_CHANGE_ITEMS,
      payload: {
        active: 'Monitor',
        menuItems: layoutMock.items,
      },
    },
  },
  'should handle LAYOUT_CHANGE_ITEMS without changeActive': {
    action: {
      type: LAYOUT_CHANGE_ITEMS,
      payload: {
        menuItems: layoutMock.items,
      },
    },
  },
  'should handle LAYOUT_CHANGE_ORG': {
    action: {
      type: LAYOUT_CHANGE_ORG,
      payload: {
        org: 'org1',
      },
    },
  },
  'should handle LAYOUT_CHANGE_LOCATION': {
    action: {
      type: LAYOUT_CHANGE_LOCATION,
      payload: {
        location: 'yaml',
      },
    },
  },
};

describe('Layout reducer', () => testReducerSnapshotWithFixtures(reducer, fixtures));
