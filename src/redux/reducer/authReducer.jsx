import {
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
  REGiSTER,
  REGISTER_ERROR,
  UPDATE_INFO,
} from "./../type";
const initialState = {
  // login: false,
  login: JSON.parse(localStorage.getItem("login")) || false,
  data: JSON.parse(localStorage.getItem("data")) || {},
  register: {},
  loginErr: "",
  registerErr: "",
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      localStorage.setItem("login", true);
      localStorage.setItem("data", JSON.stringify(action.payload));

      return {
        ...state,
        login: true,
        data: action.payload,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("login");
      localStorage.removeItem("data");
      return {
        ...state,
        login: false,
        data: null,
      };
    }
    case REGiSTER: {
      localStorage.setItem("data", JSON.stringify(action.payload));

      return {
        ...state,
        login: true,
        data: action.payload,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loginErr: action.payload,
      };
    }
    case REGISTER_ERROR: {
      return {
        ...state,
        registerErr: action.payload,
        loginErr: "",
      };
    }
    case UPDATE_INFO: {
      return {
        ...state,
        login: true,
        data: action.payload,
      };
    }
    default:
      return state;
  }

  return state;
}
