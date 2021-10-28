// Returning an array of the username and domain for a standard email address
function emailParts(email) {
  let emailCase = email.toLowerCase();
  return emailCase.split("@");
}
