describe('Webdriver io ', () => {
    it('HomeWork lessons 14', async () => {
       await browser.url('https://webdriver.io/docs/api');
       const JsonUrl= await $('//*[text()="JSONWire protocol"]').getAttribute('href');
       await browser.newWindow(JsonUrl);
       const IsDis=await $('//*[text()="RESTful web service"]').isDisplayed();
       console.log("Element is displayed:" + IsDis); //outputs true
       await browser.switchWindow('https://webdriver.io/docs/api');
       const IntroductionText=await $('//h1');
       await IntroductionText.waitUntil(async function () {
            return (await this.getText()) === 'Introduction'
        }, {
            timeout: 5000,
            timeoutMsg: 'Text is not Introduction'
        });
        await browser.saveScreenshot('HeaderTitle.png'); 
        let TwitterLink = await $('[href="https://twitter.com/webdriverio"]').isDisplayed();
        console.log("Twitter isDisplayed: " + TwitterLink);//outputs true
        TwitterLink = await $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
        console.log("Twitter isDisplayedInViewport: " + TwitterLink);//outputs false
        TwitterLink = await $('[href="https://twitter.com/webdriverio"]');
        await TwitterLink.scrollIntoView();
        TwitterLink = await $('[href="https://twitter.com/webdriverio"]').isDisplayed();
        console.log("Twitter isDisplayed: " + TwitterLink);//outputs true
        TwitterLink = await $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
        console.log("Twitter isDisplayedInViewport: " + TwitterLink);//outputs true
        let BlogButton = await $('[href="/blog"]').isFocused();
        console.log("BlogButton is focused:" + BlogButton); //outputs false
        BlogButton = await $('[href="/blog"]');
        await BlogButton.click();
        BlogButton = await $('[href="/blog"]').isFocused();
        console.log("BlogButton is focused:" + BlogButton); //outputs must be true, but false
    });   
});
