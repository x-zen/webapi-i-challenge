import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_THIS_USER_START,
  GET_THIS_USER_SUCCESS,
  GET_THIS_USER_FAIL,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from '../actions';

const initialState = {
  users: [],
  singleUser: {},
  isAddingUser: false,
  isGettingUser: false,
  isGettingThisUser: false,
  isUpdatingUser: false,
  isDeletingUser: false,
  err: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_START:
      return {
        ...state,
        isAddingUser: true
      }
    case ADD_USER_SUCCESS:
      return {
        ...state,
        isAddingUser: false
      }
    case ADD_USER_FAIL:
      return {
        ...state,
        isAddingUser: false,
        err: action.payload
      }
    case GET_USER_START:
      return {
        ...state,
        isGettingUser: true
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        isGettingUser: false,
        users: action.payload
      }
    case GET_USER_FAIL:
      return {
        ...state,
        isGettingUser: false
      }
    case GET_THIS_USER_START:
      return {
        ...state,
        isGettingThisUser: true
      }
    case GET_THIS_USER_SUCCESS:
      return {
        ...state,
        isGettingThisUser: true,
        singleUser: action.payload
      }
    case GET_THIS_USER_FAIL:
      return {
        ...state,
        isGettingThisUser: true,
        err: action.payload
      }
    case UPDATE_USER_START:
      return {
        ...state,
        isUpdatingUser: true
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isUpdatingUser: false,
      }
    case UPDATE_USER_FAIL:
      return {
        ...state,
        isUpdatingUser: false,
      }
    case DELETE_USER_START:
      return {
        ...state,
        isDeletingUser: true
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isDeletingUser: false
      }
    case DELETE_USER_FAIL:
      return {
        ...state,
        isDeletingUser: false
      }
    default:
      return state;
  }
};

export default reducer;
