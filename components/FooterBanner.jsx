import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';
// import Image from 'next/image';

const FooterBanner = ({ footerBanner: {product, saleTime, largeText1, largeText2, midText, smallText, desc, buttonText, image, discount } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img src={urlFor(image)} className="footer-banner-image" height={600} alt='product' />
        
      </div>
    </div>
  )
}

export default FooterBanner