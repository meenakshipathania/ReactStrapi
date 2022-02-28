module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b6651aa1e38aee8ee3f6c92b26cf8f1'),
  },
});
