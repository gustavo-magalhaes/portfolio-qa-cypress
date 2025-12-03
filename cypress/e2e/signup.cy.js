describe('Function: Login', () => {

  beforeEach(() => {
    cy.visit('/signin');
  });

  afterEach(() => {
    cy.wait(1000); // Espera 1 segundo após CADA teste
  });

  it('CT01 - Successful Signup', () => {
    cy.get('[data-test="signup"]').click();
    cy.url().should('eq', 'http://localhost:3000/signup');
    cy.get('#firstName').type('Test');
    cy.get('#lastName').type('Developer');
    cy.get('#username').type('TestDev');
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('password123');
    cy.get('[data-test="signup-submit"]').click();
    cy.url().should('eq', 'http://localhost:3000/signin');
  });
  it('CT02 - Signup with existing username', () => {
    cy.url().should('eq', 'http://localhost:3000/signin');
    cy.get('#username').type('TestDev');
    cy.get('#password').type('password123');
    cy.get('[data-test="signin-submit"]').click();
    cy.url().should('include', '/');
  });

});
