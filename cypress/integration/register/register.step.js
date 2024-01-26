///<reference types="cypress" />  

import { registerAssert, registerPage} from "../../support/pages";
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
const data = require ('../../fixtures/data.json')
const { faker } = require('@faker-js/faker');

let emailFaker = faker.internet.email()

Given('I visit EBACStore sing-in page', () =>{
    cy.visit('/my-account/')
})
When('I enter an unregisterd email and a password {string}', () =>{
    registerPage.register(emailFaker, data.senha)
    cy.log(emailFaker)
})
When('I enter a previously registerd email {string} and a password {string}', () =>{
    registerPage.register(data.email, data.senha)
    
})
Then('my account page should be visible', () => {
    registerAssert.myAccountAssert.should('have.text', 'Minha conta')
})
Then('an error should be visible', () => {
    registerAssert.errorMessage.should('contain.text', 'Uma conta já está registrada com seu endereço de e-mail')
})