class LoginScreen {
    constructor() {
        this.usernameInput = "~Username input field"
        this.passwordInput = "~Password input field"
        this.loginButton = "~Login button"
        this.errorMessage = "//android.view.ViewGroup[@contect-desc='generic-error-message']/android.widget.TextView"
    }

    async fillLoginForm(username, password) {
        await $(this.usernameInput).setValue(username)
        await $(this.passwordInput).setValue(password)
        await $(this.loginButton).click()
    }
}

export default new LoginScreen()

