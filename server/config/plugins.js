module.exports = ({ env }) => ({
    email: {
        config: {
            provider: "nodemailer",
            providerOptions: {
                host: "smtp.rackhost.hu",
                port: 465,
                auth: {
                    user: env("EMAIL_USER", "dev@bytemates.hu"),
                    pass: env("EMAIL_PASS", "karolyi423"),
                },
                logger: true,
                debug: true,
            },
            settings: {
                defaultFrom: "dev@bytemates.hu",
                defaultReplyTo: "dev@bytemates.hu",
            },
        },
    },
});