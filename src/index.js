'use strict';

import textract from 'textract'
import nlp from 'compromise'
import config from '../config'
import express from 'express'
import chalk from 'chalk'

var Linkedin = require('node-linkedin')(config.clientId, config.clientSecret, config.callback);

let app = express();

app.set('port', (process.env.PORT || 8080))

app.get('/', function(req, res) {

})

app.listen(app.get('port'), () => {
  console.log(chalk.cyan('Server Started ' + new Date()));
  console.log(chalk.yellow(`http://localhost:${app.get('port')}`));
})
