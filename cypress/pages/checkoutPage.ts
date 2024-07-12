const firstNameField = '[data-test=firstName]';
const lastNameField = '[data-test=lastName]';
const zipField = '[data-test=postalCode]';
const continueButton = '[data-test=continue]';
const cancelButton = '[data-test=cancel]';

class CheckoutPage {

    static verifyCheckoutPageDisplay() {
        cy.url().should('include', '/checkout-step-one.html');
    }

    static fillCheckoutInformation(firstName, lastName, postalCode) {
        cy.get(firstNameField).should('be.visible').type(firstName);
        cy.get(lastNameField).should('be.visible').type(lastName);
        cy.get(zipField).should('be.visible').type(postalCode);
    }

    static continue() {
        cy.get(continueButton).should('be.visible').click();
    }

    static cancel() {
        cy.get(cancelButton).should('be.visible').click();
    }
}

export default CheckoutPage;