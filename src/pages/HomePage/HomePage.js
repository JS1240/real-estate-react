import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Intro, Offer, Special, Recent, Contact, Reviews, FAQ } from '../../container/HomePageContainer';
import './HomePage.scss';

const HomePage = () => {
  return (
    <Layout> 
      <Intro /> 
    </Layout>
  )
}

export default HomePage