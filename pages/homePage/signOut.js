class SignOut {

    constructor(page) 
    {
        this.page = page;
        this.menu = "img[alt='menu']";
        this.signOutOption = "//button[normalize-space()='Sign out']"
    }

    async signOutFromApplication() 
    {
        await this.page.click(this.menu);
        await this.page.click(this.signOutOption);
    }
}

module.exports = SignOut;