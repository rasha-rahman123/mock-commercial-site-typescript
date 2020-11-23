import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import theme from '../styles/theme'
import '../styles/globals.css'
interface Props {
  Component: React.FC,
  pageProps: any
}
const MyApp:React.FC<Props> = ({ Component, pageProps }) => {
  useEffect(() => {
    document.onscroll = checkScroll
})
let wind = typeof window !== 'undefined' && window.innerHeight;
const [lowerHalf, setLowerHalf] = useState<number>(0)
function checkScroll(e: any ){
    e = e || window.event
    setLowerHalf(e.target.scrollingElement.scrollTop);
    
}
  return <ThemeProvider theme={theme}>
    <div className="si">
  </div>
  <Component {...pageProps} scroll={lowerHalf} wind={wind} />
  </ThemeProvider>
}

export default MyApp
