'use strict';

const http = require('http');

exports.get = (event, context, callback) => {
  var statusCode = 200;
  var query      = event.queryStringParameters.q
  var uri        = 'http://172.19.0.1:9200/_search?q='+query;
  
  http.get(uri, (response) => {
    let data = '';
    response.on('data',(chunk)=> {
      data += chunk;
    });
    response.on('end',() => {
      statusCode = 200
      callback(null, {
        statusCode: statusCode,
        body: data
      });
    });
  })
  .on('error', (err) => {
    statusCode = 500
    callback(null, {
      statusCode: statusCode,
      body: 'FOO ' + err.message
    });
  });
  
  
  
}