import React from 'react'
import {NextPage} from 'next'
import { Layout } from '../components/Layout';

interface contactProps {
    scroll: number;
}

export const contact: NextPage<contactProps> = ({scroll}) => {
        return (<Layout scroll={scroll} title="Mock's Pricing">
      
      </Layout>);
}

export default contact;