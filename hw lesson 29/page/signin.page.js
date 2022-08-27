const Page = require('./page');
class SigninPage extends Page  {
    get signinUrl() { return $('[href="/login"]') }
    get emailInput() { return $('#login_field') }
    get passwordInput() { return $('#password') }
    get signinConfirmButton() {return $('[class="btn btn-primary btn-block js-sign-in-button"]')}
    get forgotPasswordLink() { return $('[href="/password_reset"]') } 
    get forgotPasswordEmailInput() { return $('[placeholder="Enter your email address"]') } 

    async login (email, password) {
            await this.emailInput.setValue(email);
            await this.passwordInput.setValue(password);
            await this.signinConfirmButton.click();
    }
    open () {
            return super.open('login');
    }

    async clickforgotPassword() {
        await this.forgotPasswordLink.click();
    }
    async setForgotEmail (value) {
        await this.forgotPasswordEmailInput.waitForDisplayed();
        await this.forgotPasswordEmailInput.setValue(value);
    }
    
}
module.exports = new SigninPage()