import React from 'react'
import {NextPage} from 'next'
import styles from '../../styles/Home.module.css'

interface RectangleCanvasProps {

}

export const RectangleCanvas: NextPage<RectangleCanvasProps> = ({}) => {
        return <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
  <rect x="400" y="100" width="400" height="200"
        fill="yellow" stroke="navy" stroke-width="10"  />
      </svg>;
}