import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Container } from "reactstrap";
import { Switch, Route, Redirect } from "react-router-dom";

const MyRouter = () => {
  return (
    <>
      <Header />
      <h1>Hello Body</h1>
      <Footer />
    </>
  );
};

export default MyRouter;
