import { createActionTypes } from '../utils'

export const ITEM = createActionTypes('ITEM', [
  'GET',
  'GET_ONE',
  'GET_PHOTOS',
  'FAVOURITE',
  'SAVE',
  'PUT',
  'PATCH',
  'DELETE',
  'SUCCESS',
  'FAILURE',
])

export default ITEM
