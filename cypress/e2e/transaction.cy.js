describe('Function: Transaction', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('CT01 - Login + Payment Transaction', () => {
        cy.get('#username').type('Heath93');
        cy.get('#password').type('s3cret');
        cy.get('[data-test="signin-submit"]').click();

        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('[data-test="transaction-list"]').should('be.visible');

        cy.get('[data-test="nav-top-new-transaction"]').click();
        cy.wait(1000);
        cy.url().should('eq', 'http://localhost:3000/transaction/new');
        cy.get('#user-list-search-input').type('Test', { force: true });
        cy.get('[data-test="user-list-item-YxFAmjCOC"]').click();
        cy.get('#amount').type('500');
        cy.get('#transaction-create-description-input').type('Cypress Test Transaction');
        cy.get('[data-test="transaction-create-submit-payment"]').click();
        cy.get('[data-test="alert-bar-success"]').should('be.visible');
        cy.get('[data-test="new-transaction-return-to-transactions"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });

    it('CT02 - Request Payment', () => {
        cy.get('#username').type('Heath93');
        cy.get('#password').type('s3cret');
        cy.get('[data-test="signin-submit"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('[data-test="transaction-list"]').should('be.visible');

        cy.get('[data-test="nav-top-new-transaction"]').click();
        cy.wait(1000);
        cy.url().should('eq', 'http://localhost:3000/transaction/new');
        cy.get('#user-list-search-input').type('Test', { force: true });
        cy.get('[data-test="user-list-item-YxFAmjCOC"]').click();
        cy.get('#amount').type('250');
        cy.get('#transaction-create-description-input').type('Cypress Test Request Payment Transaction');
        cy.get('[data-test="transaction-create-submit-request"]').click();
        cy.get('[data-test="alert-bar-success"]').should('be.visible');
        cy.get('[data-test="new-transaction-return-to-transactions"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });

});
