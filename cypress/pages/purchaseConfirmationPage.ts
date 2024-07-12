const backHomeButton = 'button[data-test=back-to-products]';
const checkoutCompleteIcon = 'img[data-test=pony-express]';
const thankYouMessage = '.complete-header';
const completeText = '.complete-text';

class PurchaseConfirmationPage {

    static checkPurchaseConfirmationPageDisplay() {
        cy.url().should('include', '/checkout-complete.html');
    }

    static checkPurchaseConfirmationMessage() {
      cy.get(checkoutCompleteIcon).should('be.visible');  
      cy.get(thankYouMessage).should('contain', 'Thank you for your order!');
      cy.get(completeText).should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }

    static clickBackHomeButton() {
        cy.get(backHomeButton).click;
    }

}

export default PurchaseConfirmationPage;