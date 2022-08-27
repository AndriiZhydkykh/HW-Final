const Page = require('./page');
class PricingPage extends Page {
    get headerPricingButton() { return $('//summary [contains(text(),"Pricing")]') } 
    get headerPricingPlansLink() { return $('details [href="/pricing"]') }
    get joinFreeButton () { return $('[href*="pricing-card-free"]') }
    get usernameInput() { return $('#user_login') }
    get emailInput() { return $('#user_email') }
    get passwordinput() { return $('#user_password') }
    get welcomText() { return $('h1*=First') }


    open() {
        return super.open('pricing');
      }
    async moveToHeaderPricingButton() {
        await this.headerPricingButton.moveTo();
        await this.headerPricingPlansLink.waitForClickable({ timeout: 3000 });
    }
    async clickHeaderPricingPlansLink() {
        await this.headerPricingPlansLink.doubleClick();
        
    }
    async scrollToJoinFreeButton() {
        await this.joinFreeButton.scrollIntoView();
    }
    async clickToJoinFreeButton() {
        await this.joinFreeButton.click();
    }

    async signUp (username,email,password) {
        await this.usernameInput.setValue(username);
        await this.emailInput.setValue(email);
        await this.passwordinput.setValue(password);
    }
}
module.exports = new PricingPage()