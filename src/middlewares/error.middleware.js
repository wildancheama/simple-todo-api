export const notFound = (req, res, next) => {
  res.status(400).json({ message: "Route not found"});
};

export const errorHandler = (err, req, res, next) => {
  console.error(err),
  res.status(500).json({ message: "Internal server error"});
}