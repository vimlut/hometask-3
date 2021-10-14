const _ = require('lodash');
const Schemas = require('../schemas');

// error mapping
function errorResponse(schemaErrors) {
    const errors = schemaErrors.map((error) => ({
        path: error.path,
        message: error.message
    }));
    return { status: 'failed', errors };
}

module.exports = () => {
    const _supportedMethods = ['post', 'put'];
    const _validationOptions = {
        abortEarly: false,
        allUnknown: false
    };
    return (req, res, next) => {
        const route = req.originalUrl.split('/')[2];
        const method = req.method.toLowerCase();
        if (_.includes(_supportedMethods, method) && _.has(Schemas, route)) {
            const _schema = _.get(Schemas, route);
            const { error } = _schema.validate(req.body, _validationOptions);
            return error?.isJoi
                ? res.status(400).json(errorResponse(error.details))
                : next();
        }
        next();
    };
};
