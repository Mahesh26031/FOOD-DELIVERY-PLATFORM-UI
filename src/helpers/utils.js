import store from "../store";
import { setLoginModalVisible } from "../store/actions";
function triggerLoginModal() {
  store.dispatch(setLoginModalVisible(true));
}

function triggerCloseLoginModal() {
  store.dispatch(setLoginModalVisible(false));
}

export { triggerLoginModal, triggerCloseLoginModal };
