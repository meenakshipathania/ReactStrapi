module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ["AksUfX/eFTPhmlh3XwtMng==",
            "koAVrLNryXzzMcz6jl3VWw==",
            "LKQSppXUcmiokvAwC+FYEw==",
            "9YCT66mHnaKAHBMwOwFqXA==" ],
  },
});
