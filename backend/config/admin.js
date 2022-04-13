module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e89046f7967c3dacfda73c75ee79ac82'),
  },
});
