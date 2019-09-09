exports.handler404 = (req, res, next) => {
  res
    .status(404)
    .json({ status: 404, message: 'Not Found' });
};

exports.handler500 = (err, req, res, next) => {
  console.log(err);

  res
    .status(err.status || 500)
    .json(err.message);
};
