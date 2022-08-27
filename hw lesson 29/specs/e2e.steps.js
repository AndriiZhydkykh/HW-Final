const assert =require('assert')
const MainPage = require('../page/main.page');
const ProductPage = require('../page/product.page');
const ExplorePage = require('../page/explore.page');
const PricingPage = require('../page/pricing.page');


describe('Test case 11 - Hower Produc,Explore,Prising Button in header  ', () => {
    it('Open Mainpage', async () => {
        await MainPage.open();
    })
    it('Hower product button in header', async () => {
        await ProductPage.moveToToHeaderProductButton()// bug in github. Sometime is not open dropdown list
        await browser.pause(3000);
        await expect(ProductPage.headerProductButton).toBeDisplayed()
    })
    it('Hower explore button in header', async () => {
        await ExplorePage.moveToExploreButton()// bug in github. Sometime is not open dropdown list
        //await browser.pause(2000);
        await browser.pause(3000)
        await expect(ExplorePage.headerExploreButton).toBeDisplayed()
    })
    it('Hower pricing button in header', async () => {
        await PricingPage.moveToHeaderPricingButton();// bug in github. Sometime is not open dropdown list
        await browser.pause(3000);
        await expect(PricingPage.headerPricingButton).toBeDisplayed()
    })
})