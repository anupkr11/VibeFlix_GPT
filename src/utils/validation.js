export const validation = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  if (!emailRegex.test(email) || email.length === 0) {
    return "Invalid Email format";
  }

  if (!passwordRegex.test(password) || password.length === 0) {
    return "Password must be at least 8 characters long and contain both letters and numbers.";
  }

  return null;
};
