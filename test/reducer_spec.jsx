import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        users: List.of(
          Map({ name: Map({ title: 'mr', first: 'Joe', last: 'Bloggs' }) }),
          Map({ name: Map({ title: 'ms', first: 'Jane', last: 'Doe' }) })
        )
      }),
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      users: [{
        name: {
          title: 'mr',
          first: 'Joe',
          last: 'Bloggs',
        },
      }, {
        name: {
          title: 'ms',
          first: 'Jane',
          last: 'Doe',
        },
      }],
    }));
  });

  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        users: [{
          name: {
            title: 'mr',
            first: 'Joe',
            last: 'Bloggs',
          },
        }, {
          name: {
            title: 'ms',
            first: 'Jane',
            last: 'Doe',
          },
        }],
      },
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      users: [{
        name: {
          title: 'mr',
          first: 'Joe',
          last: 'Bloggs',
        },
      }, {
        name: {
          title: 'ms',
          first: 'Jane',
          last: 'Doe',
        },
      }],
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        users: [{
          name: {
            title: 'mr',
            first: 'Joe',
            last: 'Bloggs',
          },
        }, {
          name: {
            title: 'ms',
            first: 'Jane',
            last: 'Doe',
          },
        }],
      },
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      users: [{
        name: {
          title: 'mr',
          first: 'Joe',
          last: 'Bloggs',
        },
      }, {
        name: {
          title: 'ms',
          first: 'Jane',
          last: 'Doe',
        },
      }],
    }));
  });
});
