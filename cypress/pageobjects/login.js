class logiinPage{
    elements = {
        usernameInput : () => cy.get('input[name="email"]'),
        passwordInput : () => cy.get('input[name="password"]'),
        loginTxt : () => cy.get('#already-registered-text > a'),
        loginBtn : () =>  cy.get('.button-wrapper > .custom-button > .btn > .button-text')
    }
    clickLogin(){
        this.elements.loginTxt().click();
    }

    enterUsername(username){
        this.elements.usernameInput().type(username);
    }

    enterPassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLoginToDashboard(){
        this.elements.loginBtn().click();
    }
}

export default logiinPage;