import "../styles/global.css";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import store from "../store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // // To remove the copied div of Toast container
    // let root = document.querySelector("#__next");
    // root.children[0].remove();
  }, []);

  return (
    <>
      <NextNProgress
        color="#f87171"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={false}
        options={{ easing: "ease", speed: 500 }}
      />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
