describe('Webdriver io page', () => {
    it('HomeWork lessons 9', async () => {
        await browser.url('https://webdriver.io/');
        const ApiButton = await $('[href="/docs/api"]');
        await ApiButton.click();
        console.log("Url ApiPage is:" + await browser.getUrl()); // outputs https://webdriver.io/docs/api
        const ApiHeaderText = await $('//h1');
        console.log ("Text Header on Api page is :" + await ApiHeaderText.getText()); // outputs Introduction
        const AttrJson =await $('//*[text()="JSONWire protocol"]');
        console.log("Value href link is:"+ await AttrJson.getAttribute('href') ); // outputs https://www.selenium.dev/documentation/legacy/json_wire_protocol/
        const SearchButton = await $('.DocSearch');
        await SearchButton.click();
        const input = await $('.DocSearch-Input');
        await input.addValue('test is ');
        await input.addValue('DONE!');
        await browser.pause(5000);
    })
});





