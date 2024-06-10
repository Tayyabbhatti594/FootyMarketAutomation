/// <reference types="cypress" />
require('cypress-iframe');
Cypress.Commands.add('loginWithApiBuyer', () => {
    const username = Cypress.env('buyer').username;
    const password = Cypress.env('buyer').password;
    cy.request({
        method: 'POST',
        url: 'https://app.dev.footymarket.com/auth/users/login',
        headers: {
            Accept: 'application/json, text/plain, */*',
            Origin: 'https://dev-frontend.footymarket.com',
            Referer: 'https://dev-frontend.footymarket.com/'
        },
        body: { 'email': username, 'password': password }
    }).then(response => {
        // Verifying response code 200 as success 
        expect(response.status).equal(200)
        // cy.log(JSON.stringify(response))
        // Adding all required keys and values in local storage
        window.localStorage.setItem('ajs_user_id', response.body.status.user.displayId)
        window.localStorage.setItem('ajs_user_traits', `{"email":${response.body.status.user.email},"account_type":"Buyer"}`)
        window.localStorage.setItem('token', response.body.status.token.token)
        window.localStorage.setItem('is_authenticated', 'true')
        window.localStorage.setItem('expiry', response.body.status.token.expiry)
        window.localStorage.setItem('roles', 'Buyer')
        window.localStorage.setItem('displayId', response.body.status.user.displayId)
        window.localStorage.setItem('name', response.body.status.user.name)
        window.localStorage.setItem('email', response.body.status.user.email)
        window.localStorage.setItem('phoneNumber', response.body.status.user.phoneNumber)
        window.localStorage.setItem('profileInfo', response.body.status.user.__type)
        window.localStorage.setItem('displayName', response.body.status.user.displayName)
        window.localStorage.setItem('type', response.body.status.user.__type)
    });
});

Cypress.Commands.add('loginWithApiSeller', () => {
    const username = Cypress.env('seller').username;
    const password = Cypress.env('seller').password;
    cy.request({
        method: 'POST',
        url: 'https://app.dev.footymarket.com/auth/users/login',
        headers: {
            Accept: 'application/json, text/plain, */*',
            Origin: 'https://dev-frontend.footymarket.com',
            Referer: 'https://dev-frontend.footymarket.com/'
        },
        body: { 'email': username, 'password': password }
    }).then(response => {
        // Verifying response code 200 as success 
        expect(response.status).equal(200)
        // Adding all required keys and values in local storage
        window.localStorage.setItem('ajs_user_id', response.body.status.user.displayId)
        window.localStorage.setItem('ajs_user_traits', `{"email":${response.body.status.user.email},"account_type":"Seller"}`)
        window.localStorage.setItem('token', response.body.status.token.token)
        window.localStorage.setItem('is_authenticated', 'true')
        window.localStorage.setItem('expiry', response.body.status.token.expiry)
        window.localStorage.setItem('roles', 'Seller')
        window.localStorage.setItem('displayId', response.body.status.user.displayId)
        window.localStorage.setItem('name', response.body.status.user.name)
        window.localStorage.setItem('email', response.body.status.user.email)
        window.localStorage.setItem('phoneNumber', response.body.status.user.phoneNumber)
        window.localStorage.setItem('profileInfo', response.body.status.user.__type)
        window.localStorage.setItem('displayName', response.body.status.user.displayName)
        window.localStorage.setItem('type', response.body.status.user.__type)
    });
Cypress.Commands.add("runRoutes", () => {
        cy.intercept('POST', 'https://app.dev.footymarket.com/search/get-search-results').as('getSearchResults')
        cy.intercept('POST', 'https://app.dev.footymarket.com/users/addresses/buyers/create-update-address').as('CreateAddress')
        cy.intercept('POST', 'https://app.dev.footymarket.com/users/addresses/buyers/delete-address').as('DeleteAddress')
     })
});
export {}