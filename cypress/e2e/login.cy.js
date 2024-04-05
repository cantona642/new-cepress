import logiinPage from "../pageobjects/login"

describe('Login spec', () => {
  
  it('Login flow', () => {
    cy.visit('https://autobahn.security/signup')

    cy.get('#already-registered-text > a').click()
    cy.get('input[name="email"]').type('2152fan@awgarstone.com')
    cy.get('input[name="password"]').type('>jaChHR4,')
    cy.get('[data-cy="stay-login-checkbox"]').click()
    cy.get('.button-wrapper > .custom-button > .btn > .button-text').click()
    cy.get('[data-cy="stay-login-checkbox"]').click()
    cy.reload()
  })


  //this is for make many test case in i script
  it('Login success with object oriented', () => {
    //let's assume i had an access account to login
    const loginObj = new logiinPage();

    cy.visit('https://autobahn.security/signup')
    loginObj.clickLogin();
    loginObj.enterUsername('2152fan@awgarstone.com')
    loginObj.enterPassword('>jaChHR4,')
    cy.screenshot('ss/001')
    loginObj.clickLoginToDashboard();
  })

  it('Login Failed with object oriented', () => {
    //so it's will be failed to login
    const loginObj = new logiinPage();

    cy.visit('https://autobahn.security/signup')
    loginObj.clickLogin();
    loginObj.enterUsername('test@awgarstone.com')
    loginObj.enterPassword('>tesT4,')
    cy.screenshot()
    loginObj.clickLoginToDashboard();
  })
})