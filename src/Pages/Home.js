import React from 'react';
import Banner from '../Components/Home/Banner/Banner';
import Offerings from '../Components/Home/Offerings/Offerings';
import OpeningHours from '../Components/Home/OpeningHours/OpeningHours';

export default function Home() {
    return (
      <>
      <Banner />
      <Offerings />
      <OpeningHours />
      </>
    );
  }