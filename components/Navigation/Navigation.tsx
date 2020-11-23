import { NextPage } from "next";
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { Box } from "rebass";
import styles from "../../styles/Home.module.css";
import { Logo } from "./Logo";
import { NavigationLinkButton } from "./NavigationLinkButton";
import { NavigationLinks } from "./NavigationLinks";

interface navigationProps {
  scroll: number;
}

export const Navigation: NextPage<navigationProps> = ({ scroll }) => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    typeof window !== "undefined" && setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.onresize = resizeThis;
  });

  function resizeThis(e: any) {
    e = e || window.event;
    console.log(e);
    typeof window !== "undefined" && setWidth(window.innerWidth);
  }

  useEffect(() => {
    scroll > 0 ? setState(true) : setState(false);
  }, [scroll]);

  const [state, setState] = useState<boolean>(false);

  return (
    <>{<Box sx={{
      position: 'absolute',
      zIndex: 19,
      top: state ? "1vh" : "7.5vh",
      width: '60vw',
      height: '24px',
      background: 'blue',
      borderRadius: 10,
      opacity: state ? 0 : 0.2,
      transition: 'all 300ms ease',
      ":hover":{
        opacity: 1
      }
    }}>
      
    </Box>}
    <Box
      className={styles.navigation}
      sx={{
        top: "5vh",
        transform: state ? ['translateY(-15vh)','translateY(0vh)'] : '',
        height: state ? ["8rem","4.0rem", '4rem','3.2rem'] : ["8rem","7rem","4.5rem","4.2rem","2rem"],
        background: state ? "rgba(245, 245, 245,1)" : "rgba(245, 245, 245,1)",
        transition: "all 300ms ease-in-out",
        borderTopLeftRadius: state ? '0' : '10px',
        borderTopRightRadius: state ? '0' : '10px',
        zIndex: 20,
        flexDirection: ['column','column','column','row','row'],
        textAlign: "center",
      }}
    >
    
      <Logo text={"MOCK"} scrollState={state} />
      <NavigationLinks />
    </Box></>
  );
};
