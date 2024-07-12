const usernameField = '#user-name';
const passwordField = '#password';
const loginButton   = '#login-button';


class LoginPage {
     static login(username, password) {
        cy.get(usernameField).should('be.visible').type(username)
        cy.get(passwordField).should('be.visible').type(password)
        cy.get(loginButton).should('be.visible').click()
     }

     static checkSuccessfulLogin() {
        cy.url().should('include', '/inventory.html')
     }
}

export default LoginPage;