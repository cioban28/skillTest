import { fromJS, List } from 'immutable'
import { ITEM } from '../actions/types'
import testReducer from './testReducer';
describe('testReducer', () => {
  const initialState = fromJS({
    data: new List([]),
    fetching: false,
    success: false,
    error: null,
  })
  it('returns the initial state when an action type is not passed', () => {
    const reducer = testReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should handle GET', () => {
    expect(
      testReducer(initialState, {
        type: ITEM.GET
      })
    ).toMatchSnapshot()
  })

  it('should handle GET_ONE', () => {
    expect(
      testReducer(initialState, {
        type: ITEM.GET_ONE
      })
    ).toMatchSnapshot()
  })
  
  it('should handle GET_PHOTOS', () => {
    expect(
      testReducer(initialState, {
        type: ITEM.GET_PHOTOS
      })
    ).toMatchSnapshot()
  })

  it('should handle SAVE', () => {
    expect(
      testReducer(initialState, {
        type: ITEM.SAVE
      })
    ).toMatchSnapshot()
  })

  it('should handle UPDATE', () => {
    expect(
      testReducer(initialState, {
        type: ITEM.UPDATE
      })
    ).toMatchSnapshot()
  })

  it('should handle DELETE', () => {
    expect(
      testReducer(initialState, {
        type: ITEM.DELETE
      })
    ).toMatchSnapshot()
  })

  it('should handle SUCCESS', () => {
    expect(
      testReducer(initialState, {
        type: ITEM.SUCCESS
      })
    ).toMatchSnapshot()
  })
});
