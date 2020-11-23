import React from 'react'
import {NextPage} from 'next'
import { Box } from 'rebass';

interface FooterProps {
text: string
}

export const Footer: NextPage<FooterProps> = ({text}) => {
        return <Box sx={{
            margin: '2vh auto',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            px: 10,
            py: 2,
            borderRadius: 10,
            zIndex: 10
        }}>
            Privacy Policy | Sitemap | © 2021 {text}
        </Box>;
}