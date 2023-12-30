const isStringNull = (str: string) => {
  const regex = /^$/;
  return regex.test(str);
};
export default isStringNull;
