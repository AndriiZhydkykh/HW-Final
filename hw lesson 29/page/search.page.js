const Page = require('./page');
class SearchPage extends Page {
get searchInput() {return $('[class*=" js-site-search-focus"]')}
get typeScriptLink() {return $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]') }
get firstSearchResult() {return $('//ul//li[1]//*[@class="v-align-middle"][1]') }
get codeButton () {return $('#code-tab') }

async addTextonSearch(value) {
    await this.searchInput.addValue(value);
    await this.searchInput.waitForClickable({ timeout: 5000 });
}
async clickonTipeScript() {
    await this.typeScriptLink.click();
}
async clickFirstResult() {
    await this.firstSearchResult.click();
    await this.codeButton.waitForDisplayed({ timeout: 5000 })
}
}

module.exports = new SearchPage()