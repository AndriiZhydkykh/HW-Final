const Page = require('./page');

class SignupPage extends Page  {
get emailInput() { return $('#email') }
get emailButton() { return $('[data-optimizely-event="click.signup_continue.email"] ') }
get passwordInput() { return $('#password') }
get passwordButton() { return $('[data-optimizely-event="click.signup_continue.password"]') }
get usernameInput() { return $('#login') }
get usernameButton() { return $('[data-optimizely-event="click.signup_continue.username"]') }
get mailingInput() { return $('#opt_in') }
get continueButton() { return $('[data-optimizely-event="click.signup_continue.opt-in"]') }
get verifyText() { return $('[class*="text-mono text-bold"]') }


    async setEMail (value) {
        await this.emailInput.waitForClickable({timeout:20000})
        await this.emailInput.setValue(value);
    }
    async clickEmailButton () {
        await this.emailButton.waitForClickable({timeout:20000})
        await this.emailButton.click();
        
    }
    async setPassword (value) {
        await this.passwordInput.setValue(value);
    }
    async clickPasswordButton () {
        await this.passwordButton.waitForClickable(3)
        await this.passwordButton.click();
    }

async setUsername (value) {
    await this.usernameInput.setValue(value);
    
}

async clickUserNameButton () {
    await this.usernameButton.waitForClickable()
    await this.usernameButton.click();
}

async setMailing (value) {
    await this.mailingInput.setValue(value);
}

async clicktoContinueButton() {
    await this.continueButton.waitForClickable()
    await this.continueButton.click();
}
open () {
    return open();
}
}
module.exports = new SignupPage()