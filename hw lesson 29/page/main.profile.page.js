const Page = require('./page');
class MainProfilePage extends Page {
get welcomText() { return $('[class="h2 lh-condensed mb-2"]') }
}
module.exports = new MainProfilePage()