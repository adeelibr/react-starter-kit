export default ({ loading = jest.fn(), loader = jest.fn() }) => {
  const isOkay = true;
  if (isOkay) {
    return loading;
  }
  return loader;
};
