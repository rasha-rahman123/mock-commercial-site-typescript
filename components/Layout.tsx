import React,{ReactNode} from "react";
import { Navigation } from "./Navigation/Navigation";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { SlantedCanvasWhite } from "./DesignCanvas/SlantedCanvasWhite";
import { SocialLayout } from "./SocialLayout";
import { SlantedCanvasDark } from "./DesignCanvas/SlantedCanvasDark";
import { Footer } from "./Footer";


interface LayoutProps {
    children?: ReactNode,
    title?: string,
    scroll: number
}

export const Layout = ({ children, title = 'This is the default title', scroll}: LayoutProps)=> {
  return ( //3
    <>
    <Head>
            <title>{title}</title>
        </Head>
    <div className={styles.container}>
        
      <Navigation scroll={scroll} />
      <div style={{
        zIndex: 10,
        marginTop: 50
      }}>{children}</div>
      <SocialLayout />
      <SlantedCanvasWhite height={title !== 'Mock Company Title' ? 100 : 60} />
  
     {((title === `Mock's Pricing`)  ||  (title === 'Mock Company Title') ) ? <></> : <SlantedCanvasDark />}
     <Footer text="Mock" />
    </div>
    </>
  );
};
