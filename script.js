function addUser() {
  let userName = document.getElementById("userName").value;
  let userPassword = document.getElementById("userPassword").value;

  if (userName && userPassword) {
    let userData = JSON.parse(localStorage.getItem("users")) || [];
    userData.push({ userName, userPassword });
    localStorage.setItem("users", JSON.stringify(userData));
  }
}
function login() {
  let userNameLogin = document.getElementById("userNameN").value;
  let userPasswordLogin = document.getElementById("userPasswordP").value;
  const data = JSON.parse(localStorage.getItem("users")) || [];
  const matched = data.find(
    (x) => x.userName === userNameLogin && x.userPassword === userPasswordLogin
  );
  if (matched) {
    alert(`sucessfully loggedin by ${matched.userName}`);
  } else {
    alert("not matched");
  }
}
