import React, { useState } from "react";
import { NextPage } from "next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Transition } from "react-transition-group";
import { Box } from "rebass";

interface IndexLeftContentProps {}

export const IndexLeftContent: NextPage<IndexLeftContentProps> = ({}) => {
  const [loaded, setLoaded] = useState<boolean | undefined>();
  return (
    <Box
      sx={{
        width: "100%",
        height: ['40%','60%',"100%"],
        background: "linear-gradient(130deg,#86868640,#FFFFFF40)",
        borderRadius: 30,
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Transition timeout={1000} in={loaded}>
        {(status) => (
          <div
            style={{
              position: "absolute",

              padding: "0 20px",
              transform: status === 'entered' ? 'scaleY(1)' : 'scaleY(0)',
              background: status === 'entered' ? "#FFFFFF" : "#FFFFFF00",
              zIndex: 3,
              borderRadius: status === 'entered' ? 10 : 0,
              transition: "background 300ms ease-in-out, border-radius 300ms ease 600ms,transform 300ms ease-in-out 100ms",
            }}
          >
           <Box display={['none','none','none','initial']}>
           <h2
              style={{
                opacity: status === "entered" ? 1 : 0,
                transform:
                  status === "entered" ? "translateY(0)" : "translateY(2vh)",
                transition: "all 300ms ease-in-out 300ms"
              }}
            >
              Welcome to Mock Company
            </h2>
           </Box>
          </div>
        )}
      </Transition>
      <Transition timeout={1000} in={true} appear>
              {(status) => (
                <Box    sx={{
                  borderRadius: status === 'entered' ? 10 : 0,
                  transition: 'all 300ms ease-in-out',
                  transform: ['translateX(-103vw)','translateX(-20vw)','translateX(0vw)'],
                  color: ['white','white','white','black','black']
             
                }}>
                   <Box      
          sx={{
                   transform: ['scale(0.5)','scale(0.75)','scale(0.85)','scale(1)'],
                   width: ["40px","600px"],
                   height: ["40px","400px"]
                 }}>
                   <LazyLoadImage
                 alt="alt text"
                 afterLoad={() => setLoaded(true)}
                 width="100%"
                 height="100%"
           
                 src={`https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} // use normal <img> attributes as props
               />
                   </Box>
                </Box>
              )}
      </Transition>
    </Box>
  );
};
