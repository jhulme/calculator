import calculator_Page from '../support/pages/calculator_page'

let calculatorPage = new calculator_Page()

describe('Addition functionality...', function() {
    it('Checks 2 + 2 = 4', function() {
        cy.visit('/')
        calculatorPage.number_2()
        calculatorPage.addition()
        calculatorPage.number_2()
        calculatorPage.equals()
        calculatorPage.display().should('have.text', '4')
    })
})