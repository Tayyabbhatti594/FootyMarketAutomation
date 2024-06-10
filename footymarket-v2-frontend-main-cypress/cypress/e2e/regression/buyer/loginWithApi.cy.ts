import CommonPage from 'cypress/page-objects/common-page';
import Dashboard from 'cypress/page-objects/dashboard';
import common from 'mocha/lib/interfaces/common';

describe('Buyer Login', () => {
    const dashboard = new Dashboard();
    const commonPage = new CommonPage();
    const username = Cypress.env('buyer').username;

    before(() => {
        cy.loginWithApiBuyer();
        cy.visit('/');
    })

    it('Should Login to Buyer Account', () => {
        commonPage.getDropdown().click();
        commonPage.getAccount().click();
        commonPage.getYourAccountHeading();
        dashboard.getProfileDetail().click();
        dashboard.getProfileDetailsHeading();
        dashboard.getProfileDetailsCurrentEmail().contains(username);
    })

})