///<reference types="cypress-iframe" />
import CommonPage from 'cypress/page-objects/common-page';
import Dashboard from 'cypress/page-objects/dashboard';
import ProductCreation from 'cypress/page-objects/product-Creation';
import 'cypress-file-upload';
import image1 from '../../../../Fixture/image1.jpg';


describe('Seller Login', () => {
    const dashboard = new Dashboard();
    const commonPage = new CommonPage();
    const productCreation = new ProductCreation();
    const username = Cypress.env('seller').username;
    const password = Cypress.env('seller').password;

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    // Login With UI
        cy.visit('/')
        cy.intercept('POST', 'https://app.dev.footymarket.com/auth/users/login').as('Login')        
        commonPage.getLoginWithUi(username, password);
    })

    it('Add product ', () => {
        cy.intercept('POST', 'https://app.dev.footymarket.com/products/sellers/create-update-product').as('CreateProduct')     
        cy.wait(1000);
        commonPage.getDropdown().click({force: true});
        commonPage.getAccount().click();
        commonPage.getYourAccountHeading();
    // Adding Product
        productCreation.getYourProductCard().click();
        productCreation.getAddNewProductButton().click();
        productCreation.getProductNameField('ProductName');
        productCreation.getProductDescriptionField('Testing Testing Testing');
        productCreation.getRestockNoRadioButton().click({force: true});
        productCreation.getCategoryDropDown('Footwear').type('{enter}');
        cy.get('body').click();
        productCreation.getSizingStandard();
        productCreation.getSaveButton();
    // Without Variant
        productCreation.getVariantInfoNo().click({force: true});
    // I'll handle shipping
        productCreation.getHandleShipping().click({force: true});
        productCreation.getShippingCharges('50');
        productCreation.getNextButton(0).click();
        productCreation.getPriceField('100');
        productCreation.getSalePrice('90');
        productCreation.getAvailableQuantity('10');
        productCreation.getNoAcceptOffer().click({force:true});
        productCreation.getNextButton(1).click();
        productCreation.getUploadImagebutton('cypress/Fixture/image1.jpg');
        productCreation.getConditionDropdown();
        productCreation.getBrandDropdown();
        productCreation.getSizeDropdown();
        productCreation.getGenderDropdown();
        productCreation.getAgeDropdown();
    // Save and Publish the product
        productCreation.getSavePublishButton();
        

    })

})