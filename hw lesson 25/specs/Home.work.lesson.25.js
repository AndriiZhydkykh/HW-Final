const assert =require('assert')
const ApiPage = require('../page/api.page');
const HelpPage = require('../page/help.page');
const VersionPage = require('../page/versions.page');

describe('Webdriver io page', () => {
    it('HomeWork lessons 25', async () => {
        await browser.url('https://webdriver.io/')
        ApiPage.clickedApiButton();
        await browser.pause(1000);
        ApiPage.clickedContrButton();
        await browser.pause(1000);
        HelpPage.clickedHelpButton();
        await browser.pause(1000);
        HelpPage.stackOverflowisDisplayed();
        VersionPage.clickedversionButton();
        await browser.pause(1000);
        VersionPage.v6documentClick();
        await browser.pause(1000);
    })
});