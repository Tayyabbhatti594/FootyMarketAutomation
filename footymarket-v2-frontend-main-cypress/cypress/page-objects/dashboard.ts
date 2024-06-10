class Dashboard {
    
    getProfileDetail() {
        return cy.get('[data-cy=profile_details_account_card]').should('be.visible');
    }

    getProfileDetailsHeading() {
        return cy.get('[data-cy=profile_details_header]').should('be.visible');
    }

    getProfileDetailsCurrentEmail() {
        return cy.get('[data-cy=profile_details_current_email]').should('be.visible');
    }
    getAddPaymentCard(){
        return cy.get('[data-cy=payments_account_card]').should('be.visible');
    }
    getClickPaymentMethodButton(){
       return cy.get('[data-cy=add_payment_method_button]').should('be.visible').click()
    }
    getVerifyPaymentMethodHeading(){
        return cy.get('.title-text').should('be.visible')
    }
    getAddAddressbutton(){
        return cy.get('[data-cy=addresses_account_card]').should('be.visible')
    }
    
    



}

export default Dashboard;