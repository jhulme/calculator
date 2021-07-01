import calculator_Page from '../support/pages/calculator_page'

let calculatorPage = new calculator_Page()

describe('Extra functionality...', function() {
    it('Checks All Clear resets display to zero', function() {
        cy.visit('/')
        calculatorPage.number_2()
        calculatorPage.number_2()
        calculatorPage.number_4()
        calculatorPage.allclear()
        calculatorPage.display().should('have.text', '0')
    })
})