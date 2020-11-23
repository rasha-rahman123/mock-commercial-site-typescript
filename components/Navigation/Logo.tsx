import { NextPage } from "next";
import Link from 'next/link';
import React from "react";
import { Box } from "rebass";
import styles from "../../styles/Home.module.css";

interface LogoProps {
  text: string;
  scrollState?: any;
}

export const Logo: NextPage<LogoProps> = ({ text,scrollState }) => {
  return <Box className={styles.logo} sx={{
      zIndex: 20,
      height: ['5rem'],
      background: scrollState && '#FFFFFF00',
    
      color: scrollState ? '#000' : 'white',
      // .logo:hover {
      //   transform: scale(1.05);
      //   color: rgb(61, 90, 255);
      //   background: white;
      //   text-decoration: none;
      //   cursor: pointer;
      // }
      
      boxShadow: scrollState && 'none',
      transition: 'all 300ms ease-in-out',
      //@ts-ignore
      ":hover":{
        transform: !scrollState && ['scale(1.01)','scale(1.02)','scale(1.03)','scale(1.05)','scale(1.05)'],
        color:   'rgb(61, 90, 255)',
        background: !scrollState && 'white',
        textDecoration: !scrollState &&  'none',
        cursor: 'pointer'


      }
      // margin: ['0 auto','0 auto',0]
    }}>
     {scrollState ?  <h4> <Link href="/"><a>{text}</a></Link></h4> :  <h1> <Link href="/"><a>{text}</a></Link></h1>}
    </Box>
};
