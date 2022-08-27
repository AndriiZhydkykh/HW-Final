
const assert =require('assert')
//create random text
const randomText = Math.random().toString(36).substring(2,8)+"12AbA";
//create random Email
const randomEmail = Math.random().toString(36).substring(2,10)+"@gmail.com";
const Page = require('../page/page');
const MainPage = require('../page/main.page');
const SignupPage = require('../page/signup.page');
const EnterprisePage = require('../page/enterprise.page');
const PricingPage = require('../page/pricing.page');

describe('Test case 1 - User registration from site header ', () => {
    it('Open page', async () => {
        await MainPage.open();
    })
    it('Add random email to MainPag ', async () => {
        await MainPage.setMailInput(randomEmail);
        await MainPage.clickHeaderMailButton();
    })

    it('Click continue button', async () => {
        await SignupPage.clickEmailButton();

    })
    it('Enter Random password', async () => {
        await SignupPage.setPassword(randomText); 
        await SignupPage.clickPasswordButton();
    })
    it('Enter Random username', async () => {
        await SignupPage.setUsername(randomText);
        await SignupPage.clickUserNameButton();
    })
    it('Enter text "n" Mailing field  ', async () => {
        await  SignupPage.setMailing("n");
        await  SignupPage.clicktoContinueButton();
       
    })
    it('Checking text Verify your account isDisplayed', async () => {
        await expect(SignupPage.verifyText).toBeDisplayed()
        
    })
})

describe('Test case 2 - User registration from site footer ', () => {
    it('Open page', async () => {
        await MainPage.open();
        
    })
    it('click sign up button in footer', async () => {
        await MainPage.clickFooterMailButton();
    })

    it('Enter Random email', async () => {
        await SignupPage.setEMail(randomEmail);
        await SignupPage.clickEmailButton();
        
       
    })
    it('Enter Random password', async () => {
        await SignupPage.setPassword(randomText); 
        await SignupPage.clickPasswordButton();
    })
    it('Enter Random username', async () => {
        await SignupPage.setUsername(randomText);
        await SignupPage.clickUserNameButton();
    })
    it('Enter text "n" Mailing field  ', async () => {
        await  SignupPage.setMailing("n");
        await  SignupPage.clicktoContinueButton();
       
    })
    it('Checking text Verify your account isDisplayed', async () => {
        await expect(SignupPage.verifyText).toBeDisplayed()
    })
    
});

describe('Test case 15, - EnterpriseCloud and EnterpriseServer signUp from main page', () => {
    it('Open main page', async () => {
        await MainPage.open();
    })
    it('click enterprise on  main section ', async () => {
        await MainPage.codeButton.scrollIntoView();
    })
    it('click enterprise on  main section ', async () => {
        await MainPage.clickEnterpriseMainSectButton();
    })
    it('click enterprice cloud button', async () => {
        await EnterprisePage.clickEnterpriseCloudButton(); 
        //await browser.pause(4000);
    })

    it('set username,email,password input ', async () => {
        await PricingPage.signUp('AndriiZhidkikh1234','kinomanjjjj@github.com','2181681Andrey');
        
    })
    it('Come back to previous page ', async () => {
        await browser.back();
    })
    it('Click on EnterpriseServerButton ', async () => {
        await EnterprisePage.clickEnterpriseServerButton();
        await EnterprisePage.username.waitForDisplayed({ timeout: 15000 });
    })
    it('Set Entreprise server form username,company,work email,phone number ', async () => {
        await EnterprisePage.setEnterpriseServerForm("AndriiZhidkikh12356","company","kinomanj@github.com","+380632181681");

    })
    it('Choose your installation type on chekbox deploy GitHub on AWS', async () => {
        await EnterprisePage.chooseInstallTypeOne();

    })
    it('Scrool to list questions checkbox ', async () => {
        await EnterprisePage.questionsCheckboxYes.scrollIntoView();
    })
    it('Click yes on question checkbox about GitHub Enterprise ', async () => {
        await EnterprisePage.clickquestionsCheckboxYes();

    })
    it('Type your list questions', async () => {
        await expect(EnterprisePage.listQuestions).toBeExisting()
        await EnterprisePage.typeListQuestion("Hello, i'm Andry Zhidkikh. I have a question");
    })
    it('Accept terms of use', async () => {
        await EnterprisePage.clickAcceptTermsOfUse();

    })
  
});
