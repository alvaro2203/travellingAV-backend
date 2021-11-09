module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'travellingav'),
        username: env('DATABASE_USERNAME', 'alvaro'),
        password: env('DATABASE_PASSWORD', 'alvaro'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
