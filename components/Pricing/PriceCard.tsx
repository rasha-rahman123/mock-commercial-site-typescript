import React from 'react'
import {NextPage} from 'next'
import { Box, Card, Heading } from 'rebass';

interface PriceCardProps {
    type: string;
    colors: {
        color1: string;
        color2: string;
        color3: string;
    }
    deg: string;
    status: string;
    version: number;
}

export const PriceCard: NextPage<PriceCardProps> = ({type, deg,colors, version, status}) => {
 
        return  <Card sx={{
            background: `linear-gradient(${deg},${colors.color1},${colors.color2},${colors.color3})`,
            borderRadius: 30,
            width: ['50%','50%','50%','50%','50%'],
            height: ['100%','100%'],
            m: 10,
            display: 'flex',
            paddingTop: '30px',
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'column',
            color: "white",
            boxShadow: '2px 2px 10px #00000040',
            backgroundSize: '600% 600%',
            backgroundPosition: '0 50%',
            opacity: status === 'entered' ? 1 : 0,
            transform: status === 'entered' ? 'translateY(0vh) translateX(0vh)' : version === 0 ? 'translateX(-100vw)' : version === 1 ? 'translateY(-100vh)' : 'translateX(100vw)',
            transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out, background-position 2s ease',
            transitionDelay: (300 + (100 * version)) + 'ms',
            ":hover": {
                transform: 'scale(1.05)',
                zIndex: 20,
                backgroundPosition: '100% 50%',
            }
        }}>
          <Heading sx={{
              fontFamily: 'inter',
              backgroundColor: '#100035',
              color: 'whitesmoke',
              padding: '3px 10px 3px 10px',
              borderRadius: 10
          }}>{type.toUpperCase()}</Heading>
          <Box width={'80%'} margin="10px auto" height="2px" backgroundColor="#FFFFFF60" />
          <Box sx={{
              position: 'absolute',
              bottom: 0
          }}>
              Get Started
          <Box width={'80%'} margin="10px auto" height="2px" backgroundColor="#FFFFFF60" />
          </Box>
          
        </Card>;
}