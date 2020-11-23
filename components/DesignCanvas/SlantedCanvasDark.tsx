import React from 'react'
import {NextPage} from 'next'
import styles from '../../styles/Home.module.css'

interface SlantedCanvasDarkProps {

}

export const SlantedCanvasDark: NextPage<SlantedCanvasDarkProps> = ({}) => {
    return <svg
    className={styles.svgD}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    preserveAspectRatio="none"
  >
    <polygon fill="navy" points="0,250 1000,0 1000,250" />
    <rect x="0" y="249" width="1000" height="502" fill="navy" />
    <polygon fill="navy" points="0,750 1000,750 0,1000" />
  </svg>;
}