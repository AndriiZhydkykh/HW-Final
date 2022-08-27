const Page = require('./page');
class CareersPage extends Page {
get careersFooterButton() { return $('[href="/about/careers"]') }
get careersPosition() { return $$('[class="text-left flex-auto py-4"]') }
get welcomeText() { return $('[class="h2-mktg mb-4"]') }

async clickCareersFooterButton() {
    await this.careersFooterButton.click();
    await this.welcomeText.waitForDisplayed({ timeout: 3000 });;
}

}
module.exports = new CareersPage ()