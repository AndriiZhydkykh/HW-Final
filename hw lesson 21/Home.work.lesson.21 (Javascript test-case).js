const assert = require('assert')

describe('Home work lesson 21', () => {
    it('id text-case -1 Find a App using the markplace search', async () => {
        await browser.url(' https://github.com/');
        const MarketButton = await $('[href="/marketplace"]')
        await MarketButton.click();
        const SearchField = await $('[class*="subnav-search-input "]')
        await SearchField.click();
        await SearchField.addValue('Ranger')
        const SearchButton= await $('[class*=" js-navigation-item navigation-focus"]')
        await SearchButton.click();
        const ResultSearch = await $('//h3[contains(text(), "Ranger")]').getText();
        console.log("Result search is: " + ResultSearch ); //outputs Ranger

   });

    it('id text-case -2 Enter Latin characters in the search field', async () => {
		await browser.url(' https://github.com/');
		const SearField = await $('[class*="js-site-search-focus"]');
		await SearField.click();
		await SearField.addValue('javascript');
		const SearchButton =await $('[class*=" js-jump-to-global-search navigation-focus"]');
		await SearchButton.click();
		const ResultSearch = await $('//*[contains((@class),"pb-3 position-relative")] //h3').getText();
		console.log("Result search is: " + ResultSearch ); //outputs № repository results
    });

    it('id text-case -3 Enter numbers and Latin characters in the search field', async () => {
        await browser.url(' https://github.com/');
        const SearField = await $('[class*="js-site-search-focus"]');
        await SearField.click();
        await SearField.addValue('webdriver.io v7');
        const SearchButton =await $('[class*=" js-jump-to-global-search navigation-focus"]');
        await SearchButton.click();
        const ResultSearch = await $('//*[contains((@class),"pb-3 position-relative")] //h3').getText();
        console.log("Result search is: " + ResultSearch ); //outputs № repository results
        });

    it('id text-case -4 - Open the "Security" page via the link from the footer', async () => {
        await browser.url(' https://github.com/');
        const SecurityButton= await $('[href="/security"]');
        await SecurityButton.scrollIntoView();
        await SecurityButton.click();
        const SecurityText = await $('[class="f2-mktg color-fg-muted"]').getText();
        console.log("Security Text is :" + SecurityText ) 
        });

    it('id text-case -5 - Open the "Customer stories" ', async () => {
        await browser.url(' https://github.com/');
        const AboutLink = await $('[href="https://github.com/about"]');
        await AboutLink.scrollIntoView();
        await AboutLink.click();
        const CustomerLink = await $('[class*="col-md-10"] [href*="/customer-stories?"]');
        await CustomerLink.click();
        const CustomerText = await $('[class*="h4 underline-dashed text-normal "]').getText();
        console.log("Customer Text is :" + CustomerText ) //outputs Customer stories
        });
    
});