import { initialState } from "../context/initialState";
import reducer from "../context/reducer";
import { StateProvider } from "../context/StateProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
