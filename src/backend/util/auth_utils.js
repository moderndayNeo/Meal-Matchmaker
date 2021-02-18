exports.validUsernameAndPassword = (data) => {
    let { username, password } = data

    if (!username || !password) return false
    if (username.length < 5 || password.length < 6) return false
    // could DRY up here with a minPasswordLength variable imported from User model

    return true
}
