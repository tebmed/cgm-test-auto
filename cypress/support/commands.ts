beforeEach(() => {
    cy.visitSauceDemoWebsite();
});

Cypress.Commands.add('visitSauceDemoWebsite', () => {
    cy.visit('/');
});
