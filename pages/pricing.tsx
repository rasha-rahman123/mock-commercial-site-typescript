import React from 'react'
import { Layout } from '../components/Layout';
import { PriceWrapper } from '../components/Pricing/PriceWrapper';

interface pricingProps {
scroll: number
}

const pricing: React.FC<pricingProps> = ({scroll}) => {
        return <Layout scroll={scroll} title="Mock's Pricing">
        <PriceWrapper />
      </Layout>;
}

export default pricing;