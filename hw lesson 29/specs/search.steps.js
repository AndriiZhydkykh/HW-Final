const assert =require('assert')
const MainPage = require('../page/main.page');
const SearchPage = require('../page/search.page');


describe('Test case 14 - Search webdriver io  ', () => {
    it('Open Mainpage', async () => {
        await MainPage.open();
    })
    
    it('Add text webdriver io  in search field', async () => {
        await SearchPage.addTextonSearch('webdriverio');
        
    })
    it('Press Enter key', async () => {
        await browser.keys("Enter");
        await expect(browser).toHaveUrl('https://github.com/search?q=webdriverio')
        
    })

    it('Click to the TypeScript link', async () => {
        await SearchPage.clickonTipeScript();
        await expect(browser).toHaveUrlContaining('Repositorie')
    })

    it('Click on first search result', async () => {
        await SearchPage.clickFirstResult();
        
    })

   it('Check url contain webdriverio ', async () => {
    await expect(browser).toHaveUrlContaining('webdriverio')
    })

})