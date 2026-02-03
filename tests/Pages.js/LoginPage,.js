class Loginpage{
    constructor(page){
        this.page=page;
        this.username=page.locator("//input[@name='username']");
        this.password=page.locator("//input[@name='password']");
        this.buuton=page.locator("//input[@type='Submit']");

    }
    async visiturl(){
        await this.page.goto("https://adactinhotelapp.com/index.php")
    }
    async enterUsername(){
        await this.username.fill("aswinvishnu007")
    }
    async enterPassword(){
        await this.password.fill("vishnu@2000")
    }
    async clickButton(){
        await this.buuton.click()
    }
}   