
import FeaturedProducts from "@/components/FeaturedProduts"
import Hero from "@/components/Hero"
import LatestProducts from "@/components/LatestProduct"
import ShopixOffer from "@/components/ShopixOffer"
import TreandingProject from "@/components/TreandingProject"
import TreandingProject2 from "@/components/TreandingProject2"
import DiscountItem from "@/components/DiscountItem"

import React from 'react'

function page() {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <LatestProducts/>
      <ShopixOffer/>
      <TreandingProject/>
      <TreandingProject2/>
      <DiscountItem/>
      
    </div>
  )
}

export default page
