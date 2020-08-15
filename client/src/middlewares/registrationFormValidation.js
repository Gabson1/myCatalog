// TODO: Client side validation for registration

export const validateRegistrationForm = (username, email, password, passwordRep) => {
  let errors = {};
  if (!email.value.trim()) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
    errors.email = 'Email address is invalid';
  }
  return errors;
}