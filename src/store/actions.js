import { TRIGGER_LOGIN_MODAL } from "./constants";
export const setLoginModalVisible = (isOpen) => ({
  type: TRIGGER_LOGIN_MODAL,
  payload: isOpen,
});
