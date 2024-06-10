import 'cypress-iframe';
import { eq } from 'lodash';
import "../support/commands"
class CommonPage {
    getEmailField(email: string) {
        return cy.get('input[data-cy=email_field]').should('be.visible').type(email);
    }
    getPasswordField(password: string) {
        return cy.get('input[data-cy=password_field]').should('be.visible').type(password);
    }
    getIntercept(name, code) {
        cy.wait(name).its('response.statusCode').should('eq', code);
   }
    
    getLoginWithUi(username, password){
        cy.get('button[data-cy=header_signin]').should('be.visible').should('be.enabled').click();
        cy.get('input[data-cy=email_field]').should('be.visible').should('be.enabled').type(username);
        cy.get('input[data-cy=password_field]').should('be.visible').should('be.enabled').type(password);
        cy.get('button[data-cy=sign-in]').should('be.visible').should('be.enabled').click();
        cy.wait('@Login').its('response.statusCode').should("eq", 200);
        return cy.get('div[data-cy=dropdown_menu_icon_button] button').first().should('be.visible');


   }
    getLoginIntercept(){
        cy.intercept('POST', 'https://app.dev.footymarket.com/auth/users/login').as('Login')
        cy.wait('@Login').its('response.statusCode').should("eq", 200);
   }
    getAddAddress(name, address, city, zipCode){
        cy.get('input[data-cy=name_field]').should('be.visible').type(name);
        cy.get('input[data-cy=address_line_one_field]').should('be.visible').type(address);
        cy.get('input[data-cy=city_field]').should('be.visible').type(city);
        cy.get('div[data-cy=state_dropdown]').should('be.visible').click();
        cy.get('div[data-cy=AK_dropdown_item]').should('be.visible').click();
        cy.get('input[data-cy=postal_code_field]').should('be.visible').type(zipCode);
        cy.get('button[data-cy=save]').should('be.visible').click();
    }

    getAddPaymentCard(name, cardNum, expiry, cvc){
        cy.get('input[data-cy="name_field"]').should('be.visible').type(name);
        cy.get('input#Field-numberInput').type(cardNum);
        cy.get('input#Field-expiryInput').type(expiry);
        cy.get('input#Field-cvcInput').type(cvc);
        
    }

    getDropdown() {
        return cy.get('div[data-cy=dropdown_menu_icon_button] button').first().should('be.visible');
    }

    getAccount() {
        return cy.get('div[data-cy=your_account_dropdown_item]').should('be.visible');
    }

    getYourAccountHeading() {
        return cy.get('[data-cy=your_account_header]').should('be.visible');
    }

};
export default CommonPage;