///<reference types = "Cypress"/>

describe('The flight tab test will verify the flights functionality', () => {
    // ispolzovanie peremennoj zakrepiv ee v const
    const flights_tab = '[data-cy="Flight"]'
    const origin_placeholder = '[placeholder="City or airport"]'

    // prohod odin raz za test suite
    before(() => {
        cy.visit('http://localhost:3000')
    })
    // proxodit kagdij raz pered kajdim testom
    beforeEach(() => {
        cy.get(flights_tab).click()
    })

    // del all data posle proverok
    // raspe4atka texta v nygnij nam moment
    after(() => {
        cy.log("after all")
    })
    // del each data posle proverok
    afterEach(() => {
        cy.log("after each")
    })

    it('navigate to the flights tab', () => {
        cy.visit('http://localhost:3000')
        //   proverka clicka na knopky
        cy.get(flights_tab).click()
        //   proverka texta v bloke po placeholder
        cy.get(origin_placeholder).should("be.visible")
        //   proverka false ili true
        cy.get(flights_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        //   poisk texta ewe odin variant
        cy.get(flights_tab).invoke('text').should('eq', 'flight')

    })


})