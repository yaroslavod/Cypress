///<reference types = "Cypress"/>

describe('The flight tab test will verify the flights functionality', () => {
    // ispolzovanie peremennoj zakrepiv ee v const
    const flights_tab = '[data-cy="Flight"]'
    // const origin_placeholder = '[placeholder="City or airport"][name="origin"]';

    const origin_placeholder = '[name="origin"]';
    const destination_placeholder = '[name="destination"]';
    const checkin = '#input-start-2';
    const checkout = '#input-end-2';
    const business_radio_button = '[id="business"]';
    const economy_radio_button = '[id="economy"]';
    const f_class_radio_button = '[id="f_class"]';

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

    // it('navigate to the flights tab', () => {
    //     //   proverka clicka na knopky
    //     // cy.get(flights_tab).click()
    //     //   proverka texta v bloke po placeholder
    //     cy.get(origin_placeholder).should("be.visible")
    //     //   proverka false ili true
    //     cy.get(flights_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
    //     //   poisk texta ewe odin variant
    //     cy.get(flights_tab).invoke('text').should('eq', 'flight')
    // })

    // it('populates origin and destination', () => {
    //     // // proverka 4to v pole dlya zapolneniya vozmogno vnosit' dannie
    //     // cy.get(origin_placeholder).type("Paris")
    //     // cy.get(destination_placeholder).type("London")

    //     // // proverka 4to napisano v pole dlya zapolneniya
    //     // cy.get(origin_placeholder).invoke("val").should('eq', 'Paris')
    //     // cy.get(destination_placeholder).invoke("val").should('eq', 'London')

    //     // proverka 4to v pole dlya zapolneniya vozmogno vnosit' dannie
    //     // i 4to napisano v pole dlya zapolneniya v odnoj stroke
    //     cy.get(origin_placeholder).type("Paris").invoke("val").should('eq', 'Paris')
    //     cy.get(destination_placeholder).type("London").invoke("val").should('eq', 'London')
    // })

    // it('populates check-in and check-out dates', () => {
    //     // o4istka polya dlya vvoda a zatem vvod dannix i proverka na sovpadenie
    //     cy.get(checkin).clear();
    //     cy.get(checkin).type("10/10/2025").invoke('val').should('eq', '10/10/2025');
    //     cy.get(checkout).clear();
    //     cy.get(checkout).type("10/10/2026").invoke('val').should('eq', '10/10/2026');
    // })

    it('check radio buttons', () => {
        // proverka nagatiya radio knopok i perexoda to4e4ki s ispolzovaniem CONST
        cy.get(business_radio_button).click().should('be.checked')
        cy.get(economy_radio_button).click().should('be.checked')
        cy.get(f_class_radio_button).click().should('be.checked')
    })



})