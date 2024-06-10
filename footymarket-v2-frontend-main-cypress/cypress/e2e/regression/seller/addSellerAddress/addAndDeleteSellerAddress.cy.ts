///<reference types="cypress-iframe" />
import Address from 'cypress/page-objects/Address';
import CommonPage from 'cypress/page-objects/common-page';
import Dashboard from 'cypress/page-objects/dashboard';
describe('Buyer Login', () => {
    const dashboard = new Dashboard();
    const commonPage = new CommonPage();
    const address = new Address();
    const username = Cypress.env('seller').username;
    const password = Cypress.env('seller').password;
    let adrId;
    

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
             // Login With UI
             cy.visit('/')        
             cy.intercept('POST', 'https://app.dev.footymarket.com/auth/users/login').as('Login')
             commonPage.getLoginWithUi(username, password)
        })

    it('Add Address to Seller Account', () => {
            // Adding address with UI
        cy.intercept('POST', 'https://app.dev.footymarket.com/users/addresses/sellers/create-update-address').as('createAddress')
        cy.intercept('POST', 'https://app.dev.footymarket.com/users/addresses/sellers/delete-address').as('deleteAddress')
        cy.get('div').contains('The Beautiful Game').should('be.visible')
        commonPage.getDropdown().click();
        commonPage.getAccount().click();
        commonPage.getYourAccountHeading();
        dashboard.getAddAddressbutton().click();
        address.getVerifyAddressHeading();
        address.getClickAddAddressButton();
        address.getVerifyNewAddressHeading();
        commonPage.getAddAddress('Test','1516 Solano Ave', 'Albany', '94707'); 
        // Verifing added address
        address.getVerifyAddress('Test', '1516 Solano Ave', 'Albany, CA', '94707-2120');
        cy.wait('@createAddress').then((res)  => {
            expect(res.response?.statusCode).to.eq(200);
            adrId= res.response?.body.status.address.addressId
            // Deleteing address with UI
            address.getDeleteAddress(adrId);
        })
    })

})