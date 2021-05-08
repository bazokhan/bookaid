const validateUsername = (username: string): boolean =>
  // start with at least 1 char
  // min length of 3 chars
  /^[a-zA-Z]{1,}[a-zA-Z0-9]{2,}$/i.test(username);

export default validateUsername;
