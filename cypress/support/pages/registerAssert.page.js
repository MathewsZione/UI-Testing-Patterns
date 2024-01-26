/// <reference types="cypress" />

export const registerAssert = {
    get myAccountAssert() {return cy.get('h1.page-title')},
    get errorMessage() {return cy.get('.woocommerce-error')}
}
