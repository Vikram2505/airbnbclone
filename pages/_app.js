import '../styles/global.css'
import { Router } from 'next/router'
import ProgressBar from 'bar-of-progress/index'


// const progress = new ProgressBar({
//   size: 4,
//   color: '#fe59se',
//   className: 'z-50',
//   delay: '100'
// });

// Router.events.on('routeChangeStart',progress.start)
// Router.events.on('routeChangeComplete', progress.finish)
// Router.events.on('routeChangeError',progress.finish)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

