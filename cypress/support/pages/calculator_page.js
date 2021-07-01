export default class calculatorPage {

    //digit buttons
    number_1() {
        return cy.get(':nth-child(4) > :nth-child(1) > button').click()
    }

    number_2() {
        return cy.get(':nth-child(4) > :nth-child(2) > button').click()
    }

    number_3() {
        return cy.get(':nth-child(4) > :nth-child(3) > button').click()
    }

    number_4() {
        return cy.get(':nth-child(3) > :nth-child(1) > button').click() 
    }

    number_5() {
        return cy.get(':nth-child(3) > :nth-child(2) > button').click()
    }

    number_6() {
        return cy.get(':nth-child(3) > :nth-child(3) > button').click()
    }

    number_7() {
        return cy.get(':nth-child(2) > :nth-child(1) > button').click()
    }

    number_8() {
        return cy.get(':nth-child(2) > :nth-child(2) > button').click()
    }

    number_9() {
        return cy.get(':nth-child(2) > :nth-child(3) > button').click()
    }

    number_0() {
        return cy.get('.wide > button').click()
    }

    //arithmatic functions
    divide() {
        return cy.get(':nth-child(1) > .orange > button').click() 
    }

    multiply() {
        return cy.get(':nth-child(2) > .orange > button').click()
    }

    subtract() {
        return cy.get(':nth-child(3) > .orange > button').click()
    }

    addition() {
        return cy.get(':nth-child(4) > .orange > button').click()
    }

    equals() {
        return cy.get(':nth-child(5) > .orange > button').click()
    }

    //other functions
    allclear() {
        return cy.get(':nth-child(1) > :nth-child(1) > button').click()
    }

    sign() {
        return cy.get(':nth-child(1) > :nth-child(2) > button').click()
    }

    percentage() {
        return cy.get(':nth-child(1) > :nth-child(3) > button').click()
    }

    decimal() {
        return cy.get(':nth-child(5) > :nth-child(2) > button').click()
    }

    display() {
        return cy.get('.component-display > div').click()
    }

}