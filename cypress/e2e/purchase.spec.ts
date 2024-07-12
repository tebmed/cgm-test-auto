import CartPage from "../pages/cartPage"
import CheckoutPage from "../pages/checkoutPage"
import LoginPage from "../pages/loginPage"
import ProductPage from "../pages/productPage"
import CheckoutOverviewPage from "../pages/checkoutOverviewPage"
import PurchaseConfirmationPage from "../pages/purchaseConfirmationPage"

const username = Cypress.env('username');  
const password = Cypress.env('password');
const firstName = Cypress.env('firstName');
const lastName = Cypress.env('lastName');
const postalCode = Cypress.env('postalCode');

describe('E2E Test for Adding a Product to Card and Finalizing Purchase', () => {

  
    it('should add a product to the cart and complete the purchase', () => {

      LoginPage.login(username, password)
      LoginPage.checkSuccessfulLogin()

      ProductPage.buyFirstDisplayedProduct();
      ProductPage.verifyProductAddedToCart();
      ProductPage.navigateToCardPage();

      CartPage.checkCartNotEmpty();
      CartPage.clickCheckoutButton();

      CheckoutPage.verifyCheckoutPageDisplay();
      CheckoutPage.fillCheckoutInformation(firstName, lastName, postalCode)
      CheckoutPage.continue();  

      CheckoutOverviewPage.checkCheckoutOverviewPageDisplay();
      CheckoutOverviewPage.checkItemsInfoDisplay();
      CheckoutOverviewPage.checkPaymentInfoDisplay();
      CheckoutOverviewPage.checkShippingInfoDisplay();
      CheckoutOverviewPage.checkTotalPriceDisplay();
      CheckoutOverviewPage.clickFinishButton();

      PurchaseConfirmationPage.checkPurchaseConfirmationPageDisplay();
      PurchaseConfirmationPage.checkPurchaseConfirmationPageDisplay();

    })
})  
