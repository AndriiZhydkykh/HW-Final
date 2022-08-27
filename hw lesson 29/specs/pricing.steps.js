const assert =require('assert')
const MainPage = require('../page/main.page');
const PricingPage = require('../page/pricing.page');

describe('Test case 12 - authorization with free plan  ', () => {
    it('Open Mainpage', async () => {
        await MainPage.open();
    })
    
    it('Hower pricing button in header', async () => {
        await PricingPage.moveToHeaderPricingButton();
        await browser.pause(1000)
    })
    it('Click on the plans link in dropdown list ', async () => {
        await PricingPage.clickHeaderPricingPlansLink();
        await expect(browser).toHaveUrl('https://github.com/pricing')
    })

    it('Sroll to the join for free button', async () => {
        await PricingPage.scrollToJoinFreeButton();
    })
    it('Click on the join for free button', async () => {
        await PricingPage.clickToJoinFreeButton();
        await PricingPage.usernameInput.waitForDisplayed({ timeout: 15000 })
    })
   it('set username,email,password input ', async () => {
        await PricingPage.signUp('AndriiZhidkikh1234','kinomanjjjj@gmail.com','2181681Andrey');
    })

})