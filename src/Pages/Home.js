import React from 'react';
import Banner from '../Components/Home/Banner/Banner';
import Footer from '../Components/Footer';
import Offerings from '../Components/Home/Offerings/Offerings';
import FeaturedProducts from '../Components/Home/FeaturedProducts/FeaturedProducts';
import OpeningHours from '../Components/Home/OpeningHours/OpeningHours';

export default function Home() {
    return (
      <>
      <Banner />
      <Offerings />
      <FeaturedProducts />
      <OpeningHours />
      <Footer />
      </>
    );
  }