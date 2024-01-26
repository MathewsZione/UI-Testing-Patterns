/// <reference types="cypress" />

export const checkoutPage = {
    get orderNumber() {return cy.get('h1.page-title')}
}