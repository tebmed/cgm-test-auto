const cartItems = '.cart_item';
const finishButton = '[data-test=finish]';

class CheckoutOverviewPage {

    static checkCheckoutOverviewPageDisplay() {
        cy.url().should('include', '/checkout-step-two.html');
    }

    static checkItemsInfoDisplay() {
        cy.get(cartItems).should('have.length.greaterThan', 0);
    }

    static checkPaymentInfoDisplay() {
        cy.contains('Payment Information:').should('be.visible');
    }

    static checkShippingInfoDisplay() {
        cy.contains('Shipping Information:').should('be.visible');
        cy.contains('Free Pony Express Delivery!').should('be.visible');
    }

    static checkTotalPriceDisplay() {
        cy.contains(/Item total: \$\d+(\.\d{2})?/).should('be.visible');
        cy.contains(/Tax: \$\d+(\.\d{2})?/).should('be.visible');
        cy.contains(/Total: \$\d+(\.\d{2})?/).should('be.visible');
    }

    static clickFinishButton() {
        cy.get(finishButton).click();
    }
}

export default CheckoutOverviewPage