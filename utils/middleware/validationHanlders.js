function validate() {
  return false;
}

function validationHandler(data, check = 'body') {
  return function(error, res, req, next) {
    const existeError = validate(res[check], data);
    (existeError ? next(new Error(error)) : next());
  };
}

module.exports = {
  validationHandler,
};
