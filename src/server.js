const Hapi = require('@hapi/hapi');
// var routes = require('./routes').default;


const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '172.31.27.0',
    routes: {
    cors: {
          origin: ['*'],
      },
    },

  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};


init();