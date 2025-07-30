import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || 5003,
    mongodbUrl: process.env.MONGODB_URL || ''
}
export default config