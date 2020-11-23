import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { Transition } from "react-transition-group";
import { PersonBioContent } from "./PersonBioContent";
import { Box } from "rebass";

interface AboutContentProps {
  scroll: number;
  wind: number;
}

export const AboutContent: NextPage<AboutContentProps> = ({ scroll, wind }) => {
  const workers = [
    {
      name: "Orlic Adams",
      position: "Founder/CEO",
      avatar:
        "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      desc:
        "Orlic Adams started Mock back when he was just a baby. He was barely walking when he decide that the world needed Mock. He quickly got admitted into school where he excelled past his peers to the point where he was finally admitted to the highest educatonal format yet. He graduated top of his class, and went on to create Mock. Mock is his passion and his dream since he was a child. He hopes you enjoy.",
    },
    {
      name: "Gweneth Normie",
      position: "COO",
      avatar:
        "https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      desc:
        "Gweneth started Mock back when he was just a baby. He was barely walking when he decide that the world needed Mock. He graduated top of his class, and went on to create Mock. Mock is his passion and his dream since he was a child. He hopes you enjoy.",
    },
    {
      name: "Rasha Rahman",
      position: "Engineer",
      avatar:
        "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/123184309_644051536278684_8887277192931406801_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=gh5MD2J79YEAX9rxBtX&_nc_tp=24&oh=5740837feccc95dee9b1c1f3ee64722f&oe=5FDA095E",
      desc:
        "Rasha Rahman is a true class gentleman. Whether it be fighting the dangers of mysogyny at night, or coding the best possible website for Mock in the day, Rasha is saving this world. After graduating from UCLA with incredible personal achievements, Rasha feels ready for anything.",
    },
  ];

  return (
    <Transition in={true} appear timeout={0}>
      {(status) => (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          <div
            className={styles.mainTitle}
            style={{
              margin: "50px auto",
              transform:
                status === "entered" ? "translateY(0)" : "translateY(5vh)",
              opacity: status === "entered" ? 1 : 0,
              transition:
                "transform 300ms ease-in-out 200ms,opacity 300ms ease-in-out 200ms,color 300ms ease-in-out 500ms",
              color: status === "entered" ? "white" : "black",
              width: "100%",
            }}
          >
            We Are Mock
          </div>
          {workers.map((x, i) => (
            <PersonBioContent
              name={x.name}
              position={x.position}
              avatar={x.avatar}
              desc={x.desc}
              k={i}
              scroll={scroll}
            />
          ))}
          <div
            style={{
              margin: "0 auto",
              color: "white",
            }}
          >
            <div
              style={{
                margin: "0 auto",
                color: 'black',
                opacity: scroll > +wind + 250 ? 1 : 0,
                transform:
                  scroll > +wind + 250 ? "translateY(0vh)" : "translateY(-3vh)",
                fontSize: "1rem",
                transition: "all 300ms ease",
              }}
              className={styles.mainTitle}
            >
              Want to join our team?
            </div>
            <div
              style={{
                margin: "10px 50vw",
                opacity: scroll > +wind + 280 ? 1 : 0,
                transform:
                  scroll > +wind + 280 ? "translateX(0vh)" : "translateX(3vw)",
                fontSize: "1rem",
                transition: "all 300ms ease 300ms",
              }}
              className={styles.mainTitle}
            >
              Want to be part of the best?
            </div>

            <Box
              sx={{
                margin: "10px auto",
                opacity: scroll > +wind + 310 ? 1 : 0,
                transform:
                  scroll > +wind + 310 ? "translateY(0vh)" : "translateY(3vh)",
                  fontSize: ["2rem","2rem","6rem","8rem"],
                transition: "all 300ms ease 600ms",
              }}
              className={styles.mainTitle}
            >
              Do you want to become one with Mock?
            </Box>
            <Box
              sx={{
                margin: "0 ",
                opacity: scroll > +wind + 340 ? 1 : 0,
                transform:
                  scroll > +wind + 340 ? "translateX(0vh)" : "translateX(30vw)",
                fontSize: ["2rem","2rem","6rem","8rem"],
                transition: "all 300ms ease 900ms",
                textDecoration: "underline",
              }}
              className={styles.mainTitle}
            >
              Click here to apply
            </Box>
          </div>
        </div>
      )}
    </Transition>
  );
};
