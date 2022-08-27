const assert =require('assert')
const SigninPage = require('../page/signin.page');
const MainProfilePage = require('../page/main.profile.page');

describe('Test case 3 - Enter valid login and password ', () => {
    it('Open sign in page', async () => {
        await SigninPage.open();
    })
    it('Enter valid login and password', async () => {
        await SigninPage.login('kinomanj@gmail.com','2181681Andrey');
    })
    it('Checking welcomeText isDisplayed ', async () => {
      await expect(MainProfilePage.welcomText).toBeDisplayed()
    })
    it('Checking curent url is https://github.com/ ', async () => {
        await expect(browser).toHaveUrl('https://github.com/')
    })
    it('Checking curent url is https://github.com/ ', async () => {
        await expect(browser).toHaveUrl('https://github.com/')
        await browser.reloadSession()
    })
})
describe('Test case 4 - Reset password with empty Email field', () => {
    it('Open sign in page', async () => {
        await SigninPage.open();
    })
    it('Click forgot password', async () => {
        await SigninPage.clickforgotPassword();
    })
    it('Reset password with empty Email field', async () => {
        await SigninPage.setForgotEmail()
    })
})
describe('Test case 5 - Reset password with text without @com', () => {
    it('Open sign in page', async () => {
        await SigninPage.open();
    })
    it('Click forgot password', async () => {
        await SigninPage.clickforgotPassword();   
    })
    it('Enter email without @com ', async () => {
        await SigninPage.setForgotEmail('asdfgg')
    })
})
describe('Test case 6 - Reset email that has @@ ', () => {
    it('Open sign in page', async () => {
        await SigninPage.open();
    })
    it('Click forgot password', async () => {
        await SigninPage.clickforgotPassword();

    })
    it('Enter email with  @@com ', async () => {
        await SigninPage.setForgotEmail('kinomanj@@gmail.com');
    })
})
describe('Test case 7 - Reset email that has ".." in .com', () => {
    it('Open sign in page', async () => {
        await SigninPage.open();
    })
    it('Click forgot password', async () => {
        await SigninPage.clickforgotPassword();
    })
    it('Enter email with  ..com ', async () => {
        await SigninPage.setForgotEmail('kinomanj@gmail..com')
    })
})
describe('Test case 8 - Reset email with uncreated email', () => {
    it('Open sign in page', async () => {
        await SigninPage.open();
    })
    it('Click forgot password', async () => {
        await SigninPage.clickforgotPassword();
    })
    it('Enter uncreated email ', async () => {
        await SigninPage.setForgotEmail('nfjesnfkjdnsk@gmail.com')
    })
    })
describe('Test case 9 - Reset email with eror in ".com', () => {
    it('Open sign in page', async () => {
        await SigninPage.open();
    })
    it('Click forgot password', async () => {
        await  SigninPage.clickforgotPassword();

    })
    it('Enter email with .cos ', async () => {
        await SigninPage.setForgotEmail('kinomanj@gmail.cos')
    })
})
describe('Test case 10 - Reset email with valid email', () => {
    it('Open sign in page', async () => {
        await SigninPage.open();
    })
    it('Click forgot password', async () => {
        await SigninPage.clickforgotPassword();
    })
    it('Enter valid email ', async () => {;
        await SigninPage.setForgotEmail('kinomanj@gmail.com')
    })
})


