import React, { useEffect } from "react";
import { NextPage } from "next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Transition } from "react-transition-group";
import { Box } from "rebass";

interface PersonBioContentProps {
  name: string;
  position: string;
  desc: string;
  avatar: string;
  k: any;
  scroll: number;
}

export const PersonBioContent: NextPage<PersonBioContentProps> = ({
  name,
  position,
  avatar,
  desc,
  k,
  scroll,
}) => {
  return (
    <Transition timeout={k * 1000} in={true} appear>
      {(status) => (
        <Box
          sx={{
            width: "96%",
            margin: "50px auto",
            fontSize: "1.2rem",
            display: "flex",
            flexDirection: ["column", "column", "row", "row", "row"],
            justifyContent: "space-between",
            transform: status === "entered" ? "scale(1)" : "scale(0)",
            background: "white",
            borderRadius: [10, 0, 0, 0, 0],
            paddingTop: 50,
            paddingBottom: 20,
            boxShadow: "2px 2px 10px #00000050",
            transition: "all 300ms ease-in-out",
          }}
        >
          <Box
            sx={{
              width: ["100%", "100%", "40%", "40%", "40%"],
              padding: "0% 5% 0% 5%",
              opacity: status === "entered" ? 1 : 0,
              transition: "all 300ms ease-in-out",
            }}
          >
            <Box>
              <Box
                width={[200, 300, 300, 300, 300]}
                sx={{
                  margin: "0 auto",
                }}
              >
                <LazyLoadImage
                  src={avatar}
                  width="100%"
                  height="100%"
                  style={{
                    borderRadius: 10,
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: ["100%", "100%", "50%", "50%", "50%"],
              padding: "0% 5% 0% 5%",
              textAlign: "right",
            }}
          >
            <Box>
              <h3>{name}</h3> <pre>{position}</pre>
            </Box>
            {desc}
          </Box>
        </Box>
      )}
    </Transition>
  );
};
