import MainScreen from "./screens/MainScreen";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen></MainScreen>
    </Provider>
  );
}
