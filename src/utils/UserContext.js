import React, { createContext, useReducer, useEffect, useState } from 'react';
import { ACTION_TYPES } from '../store/actions/action_type';
import { initialState, UserReducer } from '../store/reducers/userReducer';
import { toast } from 'react-toastify';
import { GLOBAL_URL } from '../store/GlobalConstants';

const localUser = localStorage.getItem('state');

export const UserContext = createContext();

export const UserStateProvider = (props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState, () => {
    return localUser ? JSON.parse(localUser) : initialState;
  });
  const [isFetching, setIsFetching] = useState(false);

  //use Localstorage to set initial value after a refresh
  useEffect(() => {
    localUser &&
      dispatch({ type: ACTION_TYPES.REFRESH, payload: JSON.parse(localUser) });
  }, []);

  //save selected states to localstorage on Authentication
  useEffect(() => {
    state.isAuthenticated &&
      localStorage.setItem(
        'state',
        JSON.stringify(state, [
          'username',
          'email',
          'isLoggedIn',
          'isAuthenticated',
          'token',
          'miniPlayer',
          'showCall',
        ])
      );
  }, [state.isAuthenticated]);

  //loader for Login and Signup
  useEffect(() => {
    let loader;
    isFetching
      ? (loader = toast.loading('We are working on it...', {
          position: 'top-center',
        }))
      : toast.dismiss(loader);
  }, [isFetching]);

  //handle the input state for user information
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: ACTION_TYPES.ONCHANGE,
      field: name,
      payload: value,
    });
  };

  // handle logout
  const logout = (e, link) => {
    localStorage.removeItem('state');
    window.location.replace('/');
    return dispatch({ type: ACTION_TYPES.LOGOUT });
  };

  // handle login
  const login = (event) => {
    event.preventDefault();
    const params = new URLSearchParams({
      password: state.password,
      username: state.username,
    });

    dispatch({
      type: ACTION_TYPES.LOGIN,
      payload: {
        username: state.username,
        password: state.password,
        token: 'token',
        isAuthenticated: true,
        isLoggedIn: true,
      },
    });
    setIsFetching(false);
    window.location.replace('/main');
  };

  // signup the user
  function signup(event) {
    event.preventDefault();

    dispatch({
      type: ACTION_TYPES.SIGNUP,
      payload: {
        username: state.username,
        password: state.password,
        token: 'token',
        isAuthenticated: true,
        isLoggedIn: true,
      },
    });
    window.location.replace('/main');
  }

  //Authentication function
  const Authenticate = (token) => {
    dispatch({
      type: ACTION_TYPES.AUTH,
      payload: {
        username: state.username,
        password: state.password,
        token: 'token',
        isAuthenticated: true,
        isLoggedIn: true,
      },
    });
  };

  //toggle miniplayer
  const toggleMiniPlayer = () => {
    dispatch({ type: ACTION_TYPES.SET_MINIPLAYER });
  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        handleChange,
        signup,
        toggleMiniPlayer,
        dispatch,
        AuthStatus: state.isAuthenticated,
        usernameState: state.username,
        passwordState: state.password,
        emailState: state.email,
        token: state.token,
        isLoggedIn: state.isLoggedIn,
        loginErr: state.loginErr,
        signupErr: state.signupErr,
        miniPlayer: state.miniPlayer,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
