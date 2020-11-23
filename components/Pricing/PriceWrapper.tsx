import React from "react";
import { NextPage } from "next";
import { Box, Card, Heading } from "rebass";
import { PriceCard } from "./PriceCard";
import { Transition } from "react-transition-group";

interface PriceWrapperProps {}

export const PriceWrapper: NextPage<PriceWrapperProps> = ({}) => {
  const prices = [
    {
      type: "Basic",
      colors: {
        color1: "#F32DE7",
        color2: "#388AB2",
        color3: "#B3D9ED",
      },
    },
    {
      type: "Casual",
      colors: {
        color1: "#00DCF5",
        color2: "#CED4EC",
        color3: "#3DCB6E",
      },
    },
    {
      type: "Lover",
      colors: {
        color1: "#00DE77",
        color2: "#E0E100",
        color3: "#B86E5D",
      },
    },
  ];
  return (
    <Transition timeout={0} in={true} appear>
     {(status) => (
        <Box
        width="100vw"
        height="100vh"
        sx={{
          paddingTop: ["30%","15%","10%","10%","10%"],
          paddingBottom: ["40%","30%","10%","0%","0%"],
          px: '10%',
          display: "flex",
          justifyContent: "space-between",
          alignItems: ['center', 'center', 'normal'],
          flexDirection: ['column','column','row','row','row']
        }}
      >
        {prices.map((x,i) => (
          <PriceCard type={x.type} deg={i*70+'deg'} status={status} version={i} colors={x.colors} />
        ))}
      </Box>
     )}
    </Transition>
  );
};
