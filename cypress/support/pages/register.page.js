/// <reference types="cypress" />

class registerPage{
   get #reg_email() {return cy.get("#reg_email")}
   get #reg_password() {return cy.get("#reg_password")}
   get registerButton() {return cy.get(":nth-child(4) > .button")}


   register(email, pass){
       this.#reg_email.type(email, {force : true});
       this.#reg_password.type(pass, {force : true});
       this.registerButton.should('be.visible').click({force : true})
   }
}
module.exports = new registerPage