import React from "react";
import { NextPage } from "next";
import styles from "../../styles/Home.module.css";

interface SlantedCanvasWhiteProps {
  height?: number;
}

export const SlantedCanvasWhite: NextPage<SlantedCanvasWhiteProps> = ({
  height,
}) => {
  return (
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <polygon fill="white" points="0,250 1000,0 1000,250" />
      <rect x="0" y="249" width="1000" height="502" fill="white" />
      <polygon fill="white" points="0,750 1000,750 0,1000" />
    </svg>
  );
};
