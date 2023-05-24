import store from "../store";
import { setLoginModalVisible } from "../store/actions";
function triggerLoginModal() {
  store.dispatch(setLoginModalVisible(true));
}

export { triggerLoginModal };
