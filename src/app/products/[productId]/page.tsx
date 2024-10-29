import React from 'react';
import { Metadata } from 'next';

type Props = {
   params: {
      productId: string;
   };
};

export const generateMetadata = ({ params }: Props): Metadata => {
   return {
      title: `Product ${params.productId}`,
   };
};

export default function ProductDetail({ params }: Props) {
   return <div>ProductDetail {params.productId}</div>;
}
