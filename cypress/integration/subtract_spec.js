import calculator_Page from '../support/pages/calculator_page'

let calculatorPage = new calculator_Page()

describe('Subtraction functionality...', function() {
    it('Checks 2 - 2 = 0', function() {
        cy.visit('/')
        calculatorPage.number_2()
        calculatorPage.subtract()
        calculatorPage.number_2()
        calculatorPage.equals()
        calculatorPage.display().should('have.text', '0')
    })
})