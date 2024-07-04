import moment from 'moment';


// Middleware
export const logger = (req, res,next) => {
    console.log(`${req.protocol}//${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next()
}