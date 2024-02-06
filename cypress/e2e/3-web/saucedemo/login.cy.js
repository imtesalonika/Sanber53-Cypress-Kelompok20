// describe('Login Functionality', () => {
//   it('Verify Failed Login', () => {
//     cy.visit('https://www.saucedemo.com/')
//     cy.get('#user-name').clear().type('elvanisa')
//     cy.get('[name="password"]').clear().type('123456')
//     cy.get('#login-button').click()
//     cy.get('[data-test="error"]').should('be.visible')
//   })
//
//   describe('E2E Login to inventory', () => {
//     it('input valid username dan password then Login', () => {
//       cy.visit('https://www.saucedemo.com')
//       cy.get('#user-name').type("standard_user")
//       cy.get('#password').type("secret_sauce")
//       cy.contains("LOGIN").click()
//     })
//   })
// })

describe('Ngetes FB', () => {
  it('Mencoba Login Gagal', () => {
    cy.visit("https://facebook.com")
    cy.get('[data-testid="royal_email"]').type("082165646255")
    cy.get('[data-testid="royal_pass"]').type("salah")
    cy.get('[name="login"]').click()
  })
});