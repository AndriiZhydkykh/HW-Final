const Page = require('./page');
class MainPage extends Page  {

  get headerMailInput() { return $('[class*="f4-mktg py-3"]')}
  get headerMailButton() { return $('[class*="btn-mktg width-full width-sm-auto"]') }
  get footerMailButton() {return $('[class*="mb-2 width-full width-sm-auto btn-signup-mktg"]') }
  get EnterpriseMainSectionButton() {return $('[class="btn-mktg mb-3 mb-sm-0 mr-sm-2 btn-muted-mktg"]') }
  get codeButton() {return $('[href="#home-code"]') } 

  async setMailInput (value) {
    await this.headerMailInput.waitForEnabled(5000)
     await this.headerMailInput.addValue(value);
}
async clickHeaderMailButton () {
        await this.headerMailButton.click();
}
async clickFooterMailButton () {
        await this.footerMailButton.click();
}
open() {
  return super.open('');
}
async clickEnterpriseMainSectButton(){ 
  await this.EnterpriseMainSectionButton.click();
}
}
module.exports = new MainPage()