describe('test that you can add text to the box', function () {
    it('adds text to box', function () {
        cy.visit('localhost:3000/pizza')
        cy.get('.name')
            .type('My Name')
            .should('have.value', 'My Name')
    })
})
describe('test that you can select multiple toppings', function () {
    it('check boxes', function () {
        cy.visit('localhost:3000/pizza')
        cy.get('.cheese')
            .click()
            .should('have.checked', 'on')
        cy.get('.salami')
            .click()
            .should('have.checked', 'on')
    })
})
describe('test that you can submit the form', function () {
    it('submit form', function () {
        cy.visit('localhost:3000/pizza')
        cy.get('.name')
            .type('My Name Here')
        
        cy.get('select').select('xl')

        cy.get('button')
            .click()
    })
})