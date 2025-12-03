describe('Function: Login', () => {

  beforeEach(() => {
    cy.visit('/signin');
  });

  it('CT01 - Successful Login', () => {
    cy.get('#username').type('Heath93');
    cy.get('#password').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();

    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('[data-test="transaction-list"]').should('be.visible');
  });

  it('CT02 - Invalid username/password login', () => {
    cy.get('#username').type('Teste');
    cy.get('#password').type('Teste');
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="signin-error"]').should('be.visible')
    cy.url().should('include', '/signin');
  });

});
