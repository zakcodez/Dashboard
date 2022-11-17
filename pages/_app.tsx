import "bootstrap/dist/css/bootstrap.min.css"
import "../public/styles.css";

import Script from "next/script";

function App({ Component, pageProps }) {
	return (
		<>
			<Script src="/bootstrap.min.js" />
			<Component {...pageProps} />
		</>
	)
}

export default App;