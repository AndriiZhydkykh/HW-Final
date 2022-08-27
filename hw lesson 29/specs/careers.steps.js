const assert =require('assert')
const CareersPage= require('../page/careers.page');
const MainPage= require('../page/main.page');

describe('Test case 16 - Console log all open careers positions ', () => {
    it('Open MainPage', async () => {
        await MainPage.open();
    })
    
    it('Open careers link', async () => {
       await CareersPage.clickCareersFooterButton();
    })

    it('Print to console all  careers position', async () => {
        for (const positions of await CareersPage.careersPosition) {
            console.log(await positions.getText());
          }
     })
   
})