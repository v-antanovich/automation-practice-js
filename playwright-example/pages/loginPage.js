export class LoginPage {
    constructor(page) {
        this.page = page
        this.usernameInput = page.getByLabel('Username')
        this.passwordInput = page.getByLabel('Password')
        this.loginButton = page.getByRole('button', { name: ' Login' })
        this.succesLoginAlert = page.getByText('You logged into a secure area!')
    }

    async openPage() {
        await this.page.goto(`http://the-internet.herokuapp.com/login`)
    }

    setUsername(username) {
        return this.usernameInput.setValue(username)
    }

    setPasswod(password) {
        return this.passwordInput.setValue(password)
    }

    async login(username, password) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    async isLoginSuccess() {
        const isVisible = await this.succesLoginAlert.isVisible()
        return isVisible
    }
}