import { initialState } from "../context/initialState";
import reducer from "../context/reducer";
import { StateProvider } from "../context/StateProvider";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //Global styles for toastify

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider StateProvider initialState={initialState} reducer={reducer}>
      <ToastContainer pauseOnFocusLoss={false} />
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
