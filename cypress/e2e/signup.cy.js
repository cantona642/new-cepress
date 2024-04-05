describe('template spec', () => {
  it('Sign up Flow', () => {
    cy.visit('https://autobahn.security/signup')

    // cy.get('#already-registered-text > a').click()

    cy.get('input[name="email"]').type('2152fan@awgarstone.com')
    cy.get('input[name="password"]').type('>jaChHR4,')
    cy.get('.button-wrapper > .custom-button > .btn > .button-text').click()

    cy.get('input[name="first-name"]').should('be.visible').then(() => {
      cy.get('input[name="first-name"]').type('yono')
      cy.get('input[name="last-name"]').type('suryono')
      cy.get('.placeholderActive').click()
      cy.get('#item-3').click()
      cy.get('.iti__selected-dial-code').click()
      cy.get('#iti-item-id').click()
      cy.get('input[name="phone-number"]').type('8577665543')
      cy.get('.button-wrapper > .custom-button > .btn > .button-text').click()
      
    })
    cy.get('.error > .label').then((label) => {
        if (label.text().includes('There was an error creating your account.')) {
         cy.reload()
        }
        else{
          //this part actualy is for going to dashboard
          cy.get('input[name="first-name"]').type('yono2')
        }
      })
  })
  // Assertion: Check for successful signup
  // cy.contains('Your account has been created successfully').should('be.visible')

})