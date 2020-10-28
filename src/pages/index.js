import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../pages/app';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { Router } from "@reach/router"


export default () => {
  const { title, lang, description } = headData;
  console.log("Hello Erick")
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Erick Gavin'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Erick Gavin Portfolio Site'} />
      </Helmet>
      <Router>
        <App path="/"/>
      </Router>
    </>
  );
};
