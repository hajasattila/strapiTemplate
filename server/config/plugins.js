module.exports = ({ env }) => ({
    email: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.rackhost.hu",
        port: 465,
        secure: true, // A secure true értéke szükséges lehet az SSL/TLS-hez a 465-ös porton
        auth: {
          user: env("EMAIL_USER", "dev@bytemates.hu"),
          pass: env("EMAIL_PASS", "karolyi423"),
        },
      },
      settings: {
        defaultFrom: "dev@bytemates.hu",
        defaultReplyTo: "dev@bytemates.hu",
      },
    },
  });
  