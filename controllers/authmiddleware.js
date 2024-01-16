function authMiddleware(req, res, next) {
  if (req.session.loggedIn) {
    return next();
  }
  res.redirect("/user/forms");
}

module.exports = authMiddleware;
