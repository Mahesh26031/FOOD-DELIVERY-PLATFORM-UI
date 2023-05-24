import { TRIGGER_LOGIN_MODAL } from "../constants";

const INIT_STATE = {
  loginModalOpen: false,
};

const App = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TRIGGER_LOGIN_MODAL:
      return {
        ...state,
        loginModalOpen: action.payload,
      };

      return {
        ...state,
        userProfileOpen: action.payload,
      };
    default:
      return { ...state };
  }
};

export default App;
