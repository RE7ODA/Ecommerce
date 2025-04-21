function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}
console.log(getUsers())
function registerAccount(email, password, name, address, phone) {
    var accounts = getUsers();
    var index = accounts.findIndex(accounts => accounts.email == email)
    if (index == -1) {
        accounts.push({
            email: email,
            password: password,
            name : name,
            address:address,
            phone:phone
        });
        saveUsers(accounts);
        alert("Account registered successfully, You will be redirected to the login Page in a seconds.")
        setTimeout(function () {
            window.location.href = "login.html"
        }, 1000)
    } else {
        alert("This email is already Registered, You will be redirected to the login Page in a seconds.")
        setTimeout(function () {
            return window.location.href = "login.html"
        }, 1000)
    }
}
function loginAccount(email, password) {
    var accounts = getUsers();
    var index = accounts.findIndex(accounts => accounts.email == email)
    if (index === -1) {
        alert("Invalid Username or Password.")
        setTimeout(function () {
            window.location.href = "register.html"
        }, 1000)
    } else {
        if (accounts[index].password === password) {
            alert("Successfully Logged In, Welcome Back.");
            var randomCode = Math.floor(100000 + Math.random() * 900000);
            accounts[index].randomCode = randomCode;
            saveUsers(accounts);
            setTimeout(function () {
                window.location.href = "index.html"
            }, 1000)
            localStorage.setItem('user', JSON.stringify(accounts[index]))
        } else {
            setTimeout(function () {
                window.location.href = "register.html"
            }, 1000)
            alert("Invalid Username or Password.")
        }
    }
}
