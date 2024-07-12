declare namespace Cypress {
    interface Chainable<Subject = any> {
      visitSauceDemoWebsite(): Chainable<Subject>;
      clearCart(): Chainable<Subject>;
    }
}