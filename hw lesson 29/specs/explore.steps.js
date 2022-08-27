const assert =require('assert')
const ExplorePage= require('../page/explore.page');
const PricingPage= require('../page/pricing.page');

describe('Test case 13 - Open Topics link  ', () => {
    it('Open PricingPage', async () => {
        await PricingPage.open();
        await expect(browser).toHaveUrl('https://github.com/pricing')
    })
    
    it('Hower explore button in header', async () => {
        await ExplorePage.moveToExploreButton();
        await browser.pause(1000)
        
    })
    it('Click on the explore gidhub link in dropdown list ', async () => {
        await ExplorePage.clicToExploreGithubLink();
        await expect(browser).toHaveUrl('https://github.com/explore')
    })

    it('Click on the topic link', async () => {
        await ExplorePage.clicToTopikLink();
    })
    it('check topics h1 isDisplayed()', async () => {
        await expect(ExplorePage.ExploreGithubTopicsH1).toBeDisplayed()
    })

})
