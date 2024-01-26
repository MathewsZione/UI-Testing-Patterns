/// <reference types="cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const {checkoutPage} = require('../../support/pages')

Given('I visit EBACStore', () =>{
    cy.visit('/')
})

When("I checkout a product", (user, pass) =>{  
    cy.checkout()   
})

Then('my purchase should be confirmed', () =>{
    checkoutPage.orderNumber.should('contain.text', 'Pedido recebido');
})