import '../styles/global.css'
import NextNProgress from 'nextjs-progressbar'
function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <NextNProgress 
        color="#f87171"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={false}
        options={
          {easing: 'ease', speed: 500}
        }
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

