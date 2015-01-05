'use strict';

var Joi = require('joi');
var path = require('path');

module.exports = function(server) {

  // static file server
  ['css', 'js', 'images'].forEach(function(a) {
    server.route({
      method: 'GET',
      path: '/public/' + a + '/{filename}', // param* for other syntax
      handler: {
        file: function (request) {
          return path.join('public', a, request.params.filename);
        }
        /* why is this syntax not working?
        directory: {
          path: __dirname + '/public'
        }
        */
      }
    });
  });

  server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, reply) {
      reply.view('index', {})
        .header('Content-Type', 'text/html;charset=UTF-8');
    }
  });

  server.route({
    method: 'POST',
    path: '/contact',
    config: {
      validate: {
        options: {abortEarly: false},
        payload: {
          name: Joi.string().min(3).max(10).label('Name'),
          email: Joi.string().email().label('Email'),
          phone: Joi.string().min(7).max(12).label('Phone'),
          'life-status': Joi.any().allow(['Single', 'Married']).label('Life Status'),
          prayer: Joi.string().optional().label('Prayer'),
          'whatcha-need': Joi.string().optional().label('How can we best serve you?'),
        }
      }
    },
    handler: function(request, reply) {
      /*
      var data = {
        from: 'example@gmail.com',
        to: 'dustan.kasten@gmail.com',
        subject: 'Example Subject',
        html: {
          path: 'contact-email.jsx'
        },
        context: {
          name: 'Example User'
        }
      };

      var Mailer = request.server.plugins.mailer;
      Mailer.sendMail(data, function (err, info) {
        reply();
      });
      */

      reply('Thank you.');
    }
  });

};
