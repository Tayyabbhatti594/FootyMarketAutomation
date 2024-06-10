import { first } from "lodash"

class ProductCreation{
    getYourProductCard() {
        return cy.get('div[data-cy="your_products_account_card"]').should('be.visible')
    }

    getAddNewProductButton(){
        return cy.get('button[data-cy="add_new_product"]').should('be.visible')
    }

    getProductNameField(productName){
        return cy.get('input[data-cy="product_name"]').should('be.visible').type(productName)
    }

    getProductDescriptionField(productDescription){
        return cy.get('textarea[data-cy="product_description"]').should('be.visible').type(productDescription)
    }

    getRestockNoRadioButton(){
        return cy.get('input[data-cy="restock_no"]').should('be.visible')
    }

    getCategoryDropDown(category){
        return cy.get('input#downshift-0-input').should('be.visible').type(category)
    }
    getSizingStandard(){
        cy.get('div[data-cy="sizing_standard"]').should('be.visible').click()
        cy.get('div[data-cy="1_dropdown_item"]').should('be.visible').click()
    }

    getSaveButton(){
        cy.get('button[data-cy="save_product"]').should('be.visible').click()
        cy.wait('@CreateProduct').its('response.statusCode').should("eq",200);
    }

    getVariantInfoNo(){
        return cy.get('input[data-cy="no_variants"]').should('be.visible')
    }

    getMultipleVariants(){
        return cy.get('input[data-cy="multiple_variants"]').should('be.visible')
    }

    getShipWithFootyMarket(){
        return cy.get('input[data-cy="ship_with_footymarket"]').should('be.visible')
    }

    getHandleShipping(){
        return cy.get('input[data-cy="handle_shipping"]').should('be.visible')
    }
    getShippingCharges(charges){
        return cy.get('input[name="shippingInformation.shippingPrice"]').should('be.visible').type(charges)
    }
    getNextButton(num){
        return cy.get('[data-cy="next"]').eq(num).should('be.visible')
    }

    getUspsStandarization(){
        return cy.get('div[data-cy="usps_standardized"]').should('be.visible')
    }

    getLengthField(){
        return cy.get('input[data-cy="length"]').should('be.visible')
    }

    getWidthField(){
        return cy.get('input[data-cy="width"]').should('be.visible')
    }

    getHeightField(){
        return cy.get('input[data-cy="height"]').should('be.visible')
    }

    getPriceField(price){
        return cy.get('input[data-cy="price"]').should('be.visible').type(price)
    }

    getSalePrice(salePrice){
        return cy.get('input[data-cy="sale_price"]').should('be.visible').type(salePrice)
    }

    getAvailableQuantity(quantity){
        return cy.get('input[data-cy="available_quantity"]').first().should('be.visible').type(quantity)
    }
    getNoAcceptOffer(){
        return cy.get('input[data-cy="not_accept_offer"]').should('be.visible')
    }

    getAcceptOffer(){
        return cy.get('input[data-cy="accept_offer"]').should('be.visible')
    }

    getMinimunmOfferField(minAmount){
        return cy.get('input[data-cy="min_offer_price"]').should('be.visible').type(minAmount)
    }

    getUploadImagebutton(fileName){
        return cy.get('input#dropInput').selectFile(fileName, {force: true})
    }

    getConditionDropdown(){
        cy.get('div[data-cy="condition"]').should('be.visible').click()
        cy.get('[data-cy="1_dropdown_item"]').should('be.visible').click()
    }

    getBrandDropdown(){
        cy.get('div[data-cy="brand"]').should('be.visible').click()
        cy.get('div[data-cy="1_dropdown_item"]').should('be.visible').click()
    }

    getSizeDropdown(){
        cy.get('div[data-cy="size"]').should('be.visible').click()
        cy.get('div[data-cy="13_dropdown_item"]').should('be.visible').click()
    }

    getColorDropdown(){
        return cy.get('div[data-cy="color"]').should('be.visible')
    }

    getGenderDropdown(){
        cy.get('div[data-cy="gender"]').should('be.visible').click()
        cy.get('div[data-cy="1_dropdown_item"]').should('be.visible').click()
    }

    getAgeDropdown(){
        cy.get('div[data-cy="age"]').should('be.visible').click()
        cy.get('div[data-cy="1_dropdown_item"]').should('be.visible').click()    
    }
    
    getSavePublishButton(){
        cy.get('button[data-cy="save_publish"]').should('be.visible').click()
        cy.get('span.text').contains('Creating').should('be.visible')
        cy.get('span.text').contains('Success').should('be.visible')
        

    }

}

export default ProductCreation;