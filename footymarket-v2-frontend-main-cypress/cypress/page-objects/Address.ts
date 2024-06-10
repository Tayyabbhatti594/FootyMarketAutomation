class Address {

    getCreateAddressIntercept(){
        cy.intercept('POST', 'https://app.dev.footymarket.com/users/addresses/buyers/create-update-address').as('createAddress')
        cy.wait('@CreateAddress').its('response.statusCode').should("eq", 200);
       
   }
    getDeleteAddressIntercept(){
        cy.intercept('POST', 'https://app.dev.footymarket.com/users/addresses/buyers/delete-address').as('DeleteAddress')
        cy.wait('@DeleteAddress').its('response.statusCode').should("eq", 200);
   }
   getVerifyAddress(name, address, cityandState, zipCode){
    cy.get('span[data-cy=card_title]').contains(name).should('be.visible');
    cy.get('div[data-cy=address_field_text]').contains(address).should('be.visible');
    cy.get('div[data-cy=address_city_state]').contains(cityandState).should('be.visible');
    cy.get('div[data-cy=postal_code]').contains(zipCode).should('be.visible');
    }
    getDeleteAddress(Id){
    cy.get(`button[data-cy="delete_item_${Id}"] div`).should('be.visible').click({force:true});
    cy.get('button[data-cy=alert_primary]').should('be.visible').click();
    cy.wait('@deleteAddress').its('response.statusCode').should("eq", 200); 
    }
    getVerifyAddressHeading(){
    return cy.get('.sc-d2ae5395-1.dxnxgj').should('be.visible')
    }
    getClickAddAddressButton(){
    cy.get('button[data-cy=add_address_button]').should('be.visible').click();
    }
    getVerifyNewAddressHeading(){
    return cy.get(' span.title-text').should('be.visible')
}


}

export default Address;