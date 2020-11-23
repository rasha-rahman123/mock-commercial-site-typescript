import { NextPage } from "next";
import React from "react";
import { AboutContent } from "../components/About/AboutContent";
import { Layout } from "../components/Layout";

interface aboutProps {
  scroll: number;
  wind: number;
}

const about: NextPage<aboutProps> = ({ scroll,wind }) => {
  return (
    <Layout scroll={scroll} title="About Mock">
      <div
        style={{
          width: "90vw",
          minHeight: "88vh",
          marginTop: "10vh",
          padding: "2.5vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 3,
        }}
      >
        <AboutContent scroll={scroll} wind={wind}/>
      </div>
    </Layout>
  );
};

export default about;
