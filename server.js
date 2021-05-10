const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enforce=require('express-sslify');

const app= express();

app.use(enforce.HTTPs({ trustProtoHeader: true }));
app.use(serveStatic(root: _dirname + '/dist'));
app.use(history())


app.listen( port: process.env.PORT || 5000);