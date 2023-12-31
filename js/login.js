// 定义一个固定的账户和密码
var account = "user";
var pwd = "pw123!";

// 获取登录按钮元素
var loginBtn = document.getElementById("login-btn");
    // 为登录按钮添加点击事件
    loginBtn.addEventListener("click", function() {
    // 调用checkLogin函数，检查登录信息
    checkLogin();
});

// 定义一个检查登录信息的函数
function checkLogin() {
    // 获取用户输入的用户名和密码
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 判断用户名和密码是否正确
    if (username == account && password == pwd) {
        // 如果正确，跳转到main.html页面
        window.location.href = "main.html";
    } else {
        // 如果错误，弹出提示框
        alert("用户名或密码错误，请重新输入！");
    }
}