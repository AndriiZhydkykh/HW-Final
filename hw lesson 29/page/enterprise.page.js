const Page = require('./page');
const PricingPage = require('../page/pricing.page');
class EnterprisePage extends Page {
get enterpriseCloudButton() {return $('[href*="&setup_organization=true"]') }
get enterpriseServerButton() {return $('[href*="pricing-card-enterprise"]') }
get username() {return $('#contact_request_name') }
get companyName() {return $('#contact_request_organization_name') }
get workEmail() {return $('#contact_request_email') }
get phoneNumber() {return $('#contact_request_phone') }
get installTypeCheckboxOne() {return $('#contact_request_instance_type_aws') }
get questionsCheckboxYes() {return $('#questions_yes') }
get listQuestions() {return $('#questions-list') }
get acceptTermsOfUse() {return $('#contact_request_agreed_to_terms') }

async clickEnterpriseCloudButton() {
    await this.enterpriseCloudButton.waitForClickable();
    await this.enterpriseCloudButton.click();
    await PricingPage.usernameInput.waitForDisplayed({timeout:20000})
}
async clickEnterpriseServerButton() {
    await this.enterpriseServerButton.waitForClickable({timeout:15000});
    await this.enterpriseServerButton.click();
}
async setEnterpriseServerForm(username,companyName,workEmail,phoneNumber) {
    await this.username.setValue(username);
    await this.companyName.setValue(companyName);
    await this.workEmail.setValue(workEmail);
    await this.phoneNumber.setValue(phoneNumber);
}
async chooseInstallTypeOne() {
    this.installTypeCheckboxOne.waitForClickable({ timeout:15000 })
    await this.installTypeCheckboxOne.click();  
}
async clickquestionsCheckboxYes() {
    this.questionsCheckboxYes.waitForClickable({ timeout:15000 })
    await this.questionsCheckboxYes.click();  
}
async typeListQuestion(value) {
    this.listQuestions.waitForExist({ timeout: 15000 });
    await this.listQuestions.addValue(value);  

}
async clickAcceptTermsOfUse() {
    this.acceptTermsOfUse.waitForClickable({ timeout:15000 })
    await this.acceptTermsOfUse.click();  
}




}

module.exports = new EnterprisePage()