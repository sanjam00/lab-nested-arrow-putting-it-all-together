module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


function createLoginTracker(userInfo) {

  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else if (passwordAttempt !== userInfo.password) {
      return `Attempt ${attemptCount}: Login failed`;
    }

  }

  return loginAttempt;
}

const tracker = createLoginTracker({
  username: "james123",
  password: "password321"
})


console.log(tracker("wrongpass"));
console.log(tracker("wrongpass"));
console.log(tracker("wrongpass"));
console.log(tracker("password321"));