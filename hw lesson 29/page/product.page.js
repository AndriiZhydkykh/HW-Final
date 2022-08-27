const Page = require('./page');
class ProductPage extends Page  {
get headerProductButton() { return $('//summary [contains(text(),"Product")]') }

async moveToToHeaderProductButton() {
await this.headerProductButton.moveTo();   
}


}

module.exports = new ProductPage()