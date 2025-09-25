import React from 'react';
import Hero from '../../components/hero';
import HowItWorks from '../../components/HowItWorks';
import RewardsShowcase from '../../components/RewardsShowcase';
import Footer from '../../components/Footer';
import MyAccount from '../../components/profile';
import FAQ from '../Faq/Faq';
function Home() {
    return <>
      {/* <MyAccount/> */}
      <Hero />
      <HowItWorks /> 
      <RewardsShowcase />
      <Footer />
    </>
}
export default Home;