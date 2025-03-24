import "../styles/globals.css";
import "../styles/careerStyles.css";
import FloatingButtons from "../components/Common/FloatingButtons";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FloatingButtons />
    </>
  );
}
