///<reference types = "cypress"/>

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginPage, loginAssert } from "../../support/pages";
const data = require ('../../fixtures/data.json')

Given("I am on the login page EBAC SHOP", () => {
 cy.visit("/my-account/");
})

When ("I login with email {string} and password {string}", (email, password) => {
 loginPage.login(email, password);
})

When ("I login with valid email {string} and invalid password {string}", (email, password) => {
 loginPage.login(email, password);
})

When ('I login with invalid email {string} and valid password {string}', (email, password) => {
    loginPage.login(email, password);
})

Then ('I should be on the home page EBAC SHOP', () => {
    loginAssert.Assert.should('have.text', 'Minha conta');
})

Then('should be message error', () => {
   loginAssert.messageError.should('contain.text', 'A senha fornecida para o e-mail');
})

Then('should be message error invalid email', () => {
    loginAssert.messageError.should('contain.text', 'Endereço de e-mail desconhecido');
 })

