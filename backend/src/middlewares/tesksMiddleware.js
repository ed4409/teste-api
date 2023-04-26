const validateBody = (req, res, next) => {
const { body } = req;

if (body.title === undefined) {
    res.status(400).json({ massage: 'the field "title" is required'});
}
if (body.title === '') {
    return res.status(400).json({ massage: 'title cannot be empty'});
}
next();

};
module.exports = {
    validateBody,
};

