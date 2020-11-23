import Head from "next/head";
import styles from "../styles/Home.module.css";
import Counter from "./counter";
import { Navigation } from "../components/Navigation/Navigation";
import { Layout } from "../components/Layout";
import { NextPage } from "next";
import { IndexLeftContent } from "../components/Home/IndexLeftContent";
import { Transition } from "react-transition-group";
import { IndexRightContent } from "../components/Home/IndexRightContent";
import { Box } from "rebass";

interface Props {
  scroll: number;
}

export const Home: NextPage<Props> = ({scroll}) => {
  return (
    <Layout scroll={scroll} title="Mock Company Title">
      <Box
        sx={{
          width: "90vw",
          minHeight: "88vh",
          marginTop:["15vh","16vh","16vh","8vh","8vh"],
          padding: "2.5vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 3
        }}
      >
        <Transition timeout={300} in={true} appear>
          {(status) => (
            <Box
              sx={{
                width: ["0%","40%","50%","70%","70%"],
                display: ['none','none','inherit','inherit',"inherit"],
                padding: "20px",
                transform:
                  status === "entered" ? ["translateX(10vw)","translateX(0vw)","translateX(-10vw)"] : "translateX(-75vw)",
                transition: "all 500ms ease-in-out",
              }}
            >
              <IndexLeftContent />
            </Box>
          )}
        </Transition>
        <Transition timeout={2000} in={true} appear>
          {(status) => (
            <Box sx={{ width: ["100%","60%","50%","30%","30%"], padding: "20px" }}>
              <IndexRightContent status={status} />
            </Box>
          )}
        </Transition>
      </Box>
    </Layout>
  );
};

export default Home;
