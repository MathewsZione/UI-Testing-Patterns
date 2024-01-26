export const loginAssert = {
    get Assert() {return cy.get('h1.page-title')},
    get messageError() {return cy.get('ul.woocommerce-error')},
}

