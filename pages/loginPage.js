class LoginPage
{
    constructor(page)
    {
        this.page= page
        this.username = "#email1"
        this.password = "#password1"
        this.loginButton = ".submit-btn"
    }

    async loginToApplication()
    {
        await this.page.fill(this.username,"admin")
        await this.page.fill(this.password,"admin@123")
        await this.page.click(this.loginButton)
    }
}

module.exports = LoginPage;

