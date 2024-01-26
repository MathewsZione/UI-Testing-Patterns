///<reference types = "cypress"/>

class loginPage {
  get #username() {return cy.get("#username")}
  get #password() {return cy.get("#password")}
  get #rememberMe() {return cy.get("#rememberme")}
  get #loginButton() {return cy.get('.woocommerce-form > .button')}


  login(email, password) {
    this.#username.type(email, {force : true});
    this.#password.type(password, {force : true});
    this.#rememberMe.click({force : true});
    this.#loginButton.should('be.visible').click({force : true})
  }
}

module.exports = new loginPage