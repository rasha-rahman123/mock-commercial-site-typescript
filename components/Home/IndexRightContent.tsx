import React from "react";
import { NextPage } from "next";
import styles from '../../styles/Home.module.css'
import { Transition } from "react-transition-group";
import Link from "next/link";
import { Box } from "rebass";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IndexRightContentProps {
  status: string;
}

export const IndexRightContent: NextPage<IndexRightContentProps> = ({
  status,
}) => {
  return (
    <Transition in={true} timeout={300} appear>
        {(status) => (
            <Box
            sx={{
              height: "100%"
            }}
          >
            <Box className={styles.mainTitle} sx={{
                width: ['200px','200%','800px','600px','600px'],
              fontSize: ['3rem','4rem','5rem','6rem'],
                transform: status === 'entered' ? ['translateX(0vw)','translateX(0vw)','translateX(-45vw)','translateX(-20vw)'] : 'translateX(60vw)',
                transition: 'all 300ms ease-in-out 100ms'
            }}>
                The Best App that you will ever need or want
                <LazyLoadImage
                 alt="alt text"
                 width="400px"
                
                style={{
                  position: 'absolute',
                  top: 0,
                  opacity: 0.3
                }}
                 src={`https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} // use normal <img> attributes as props
               />
            </Box>
            <Box className={styles.mockP} sx={{
                width: ['200px','300px','400px','400px','600px'],
                transform: status === 'entered' ? ['translateX(0vw)','translateX(0vw)','translateX(-30vw)','translateX(-16vw)','translateX(-20vw)']  : 'translateX(60vw)',
                transition: 'all 300ms ease-in-out 400ms'
            }}>
                <p>
                    How could someone be so positive that this product, Mock, will be the best for you? We'll, it's because you would not be here otherwise. You were the chosen one to purchase this fine Mock, because without Mock, you would be nothing. Let us making this clear, by choosing Mock, not only are you choosing the best decisions in your own life, you are saving the world one Mock at a time. So next time you feel down, just know how glad you were to choose Mock.
                </p>
                <Link href="/about">
                    Learn More
                </Link>
            </Box>
          </Box>
        )}
    </Transition>
  );
};

/* <div
                style={{
                  width: "100%",
                  height: "15%",
                  background: "linear-gradient(-130deg,#86868640,#FFFFFF40)",
                  marginBottom: "10%",
                  borderRadius: 20,
                  transform: status === 'entered' ? 'translateX(0vw)' : 'translateX(76vw)',
                  transition: 'transform 500ms ease-in-out'
                
                }}
              >
                s
              </div>

              <div
                style={{
                  width: "100%",
                  marginTop: "5%",
                  height: "80%",
                  background: "linear-gradient(-130deg,#86868640,#FFFFFF40)",
                  borderRadius: 20,
                  transform: status === 'entered' ? 'translateX(0vw)' : 'translateX(76vw)',
                  transition: 'transform 500ms ease-in-out 500ms'
                }}
              >
                s
              </div> */
