const inventoryItemWebElement = '.inventory_item';
const addToCartButtonSelector = 'button[data-test=add-to-cart-sauce-labs-backpack]';
const shoppingCardBadge = '.shopping_cart_badge';
const shoppingCardLink  = '.shopping_cart_link';     


class ProductPage {
    static buyFirstDisplayedProduct() {
        cy.get(inventoryItemWebElement).first().find(addToCartButtonSelector).click()
    }

    static verifyProductAddedToCart() {
        // Verify the cart badge exists and contains a number
        cy.get(shoppingCardBadge).should('exist').and(($badge) => {
          const text = $badge.text();
          expect(text).to.match(/\d+/);
        });
    }

    static navigateToCardPage() {
        cy.get(shoppingCardLink).click()
    }
}

export default ProductPage