import dotenv from "dotenv";

dotenv.config({quiet:true});

export const ENV={
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL,
    NODE_ENV : process.env.NODE_ENV,
    INNGEST_EVENT_KEY : process.env.INNGEST_EVENT_KEY,
    INNGEST_SIGNING_KEY : process.env.INNGEST_SIGNING_KEY,
    STREM_API_KEY : process.env.STREM_API_KEY,
    STREM_API_SECRET : process.env.STREM_API_SECRET,
    CLIENT_URL : process.env.CLIENT_URL
};