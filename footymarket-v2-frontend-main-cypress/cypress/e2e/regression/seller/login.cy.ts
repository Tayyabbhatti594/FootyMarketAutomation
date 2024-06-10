import CommonPage from '../../../page-objects/common-page';

describe('Seller Login', () => {
    const commonPage = new CommonPage();

    beforeEach(() => {
        cy.visit('auth/login');
    })

    it('Should Login to Seller Account', () => {
        commonPage.getEmailField(Cypress.env('seller').username);
        commonPage.getPasswordField(Cypress.env('seller').password);
        cy.get('[data-cy=sign-in]').should('be.visible').click();
        cy.wait(500);

        cy.url().should('eq', Cypress.config('baseUrl'));
    })

})