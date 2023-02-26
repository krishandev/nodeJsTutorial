function ageDetector(req, res, next) {
    if (req.query.age > 18) {

        // res.send("You are above 18, you can enter");
        next();
    } else {

        res.send("You can not access the website")
    }
}

module.exports = ageDetector;