// 200 = OK
// 500 = Internal Server Error
export const setHeader = (res, statusCode) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
}
