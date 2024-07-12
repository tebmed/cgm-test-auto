const cartItem  = '.cart_item';
const checkoutButton = 'button[data-test=checkout]';
const continueShoppingButton = 'button[data-test=continue-shopping]'; 

class CartPage {   
    static checkCartNotEmpty() {
      cy.get(cartItem).should('have.length.greaterThan', 0);
    }

    static clickCheckoutButton() {
      cy.get(checkoutButton).should('be.visible').click();
    }

    static clickContinueShoppingButton() {
      cy.get(continueShoppingButton).should('be.visible').click();
    }
}

export default CartPage;
   