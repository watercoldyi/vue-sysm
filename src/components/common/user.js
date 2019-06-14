var set = function (k, v) {
    if (v == null) {
        sessionStorage.removeItem(k)
    }
    else {
        sessionStorage.setItem(k, v)
    }
}
var get = function (k) {
    return sessionStorage.getItem(k)
}

var user = {}
user.getName = function () {
    return get("userName")
}
user.getIcon = function () {
    return get("userIcon")
}
user.getToken = function () {
    return get("userToken")
}
user.setName = function (name) {
    set("userName", name)
}
user.setIcon = function (v) {
    set("userIcon", v)
}
user.setToken = function (v) {
    set("userToken", v)
}
user.clear = function () {
    user.setName(null)
    user.setIcon(null)
    user.setToken(null)
}

export default user