const Page = require('./page');
class ExplorePage extends Page {
get headerExploreButton() {return $('//summary [contains(text(), "Explore")]') }
get headerExploreGithubLink() {  return $('[href="/explore"]') }
get ExploreGithubTopicskLink() {  return $('[data-selected-links="topics_path /topics/ /topics"]') }
get ExploreGithubTopicsH1() {  return $('h1') }

async moveToExploreButton() {
    await this.headerExploreButton.moveTo();
}
async clicToExploreGithubLink() {
    await this.headerExploreGithubLink.click();
}
async clicToTopikLink() {
    await this.ExploreGithubTopicskLink.click();
    await this.ExploreGithubTopicsH1.waitForDisplayed({ timeout: 10000 })
}

}

module.exports = new ExplorePage()