import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CUSTOMER_LOGIN_START,
  CUSTOMER_LOGIN_SUCCESS,
  CUSTOMER_LOGIN_ERROR,
  LOGOUT
} from '../actions';

const initialState = {
  token: null,
  farmerID: null,
  loginStart: false,
  loginError: false,
  getProduceStart: false,
  getProduceError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loginStart: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginStart: false,
        token: action.payload.token,
        farmerID: action.payload.id
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginStart: false,
        loginError: true
      };

      case CUSTOMER_LOGIN_START:
      return {
        ...state,
        customerLoginStart: true
      };

    case CUSTOMER_LOGIN_SUCCESS:
      return {
        ...state,
        customerLoginStart: false,
        token: action.payload
      };

    case CUSTOMER_LOGIN_ERROR:
      return {
        ...state,
        customerLoginStart: false,
        customerLoginError: true
      };

    case LOGOUT:
      return {
        ...state,
        token: null
      };

    default:
      return state;
  }
};

export default reducer;
