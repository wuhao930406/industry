import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, matchPath, createRoutes} from 'react-router-dom';

import appRouter from '../router.jsx';

const routes = createRoutes(appRouter());

const router = express.Router();

router.get('/home', (req, res) => {
  matchPath({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps}/>);
      res.render('index', {title: 'Express', data: false, content});
    } else {
      res.status(404).send('Not Found');
    }
  });
});
