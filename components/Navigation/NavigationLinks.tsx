import React from "react";
import { NavigationLinkButton } from "./NavigationLinkButton";
import styles from "../../styles/Home.module.css";
import { Box } from "rebass";

interface NavigationLinksProps {}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({}) => {
  return (
    <Box sx={{zIndex: 20}}  className={styles.navButtonHolder}>
      {["Home", "About", "Pricing", "Contact"].map((x, i) => (
        <NavigationLinkButton key={i} title={x} />
      ))}
    </Box>
  );
};
