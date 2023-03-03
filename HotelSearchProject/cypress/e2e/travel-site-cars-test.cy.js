///<reference types = "Cypress"/>

describe('The cars tab test will verify the cars functionality', () => {
    // ispolzovanie peremennoj zakrepiv ee v const
    const cars_tab = '[data-cy="Car"]'
    const location_input = '[name=location]'
    const drop_off_input = '[name=dropoff]'
    const car_group_list = '[name="car-group"]'
    const driver_age_list = '[name="driver-age"]'

    before(() => {
        cy.visit('http://localhost:3000')
    })
    // proxodit kagdij raz pered kajdim testom a imenno click na tab Cars
    beforeEach(() => {
        cy.get(cars_tab).click()
    })
    //po name i vibiraem Toronto, zatem proverka, 4to vibrali imenno Toronto
    // it('chooses location', ()=>{
    //     cy.get(location_input).type('Toronto').should('have.value', 'Toronto')

    // })

    // it('chooses drop off date', () => {
    //     //4istim text esli on est' v etom pole
    //     cy.get(drop_off_input).clear();
    //     //po name i vibiraem daty, zatem proverka, 4to vibrali imenno ety daty
    //     cy.get(drop_off_input).type('06/08/2023').should('have.value', '06/08/2023')

    // })

    // it('chooses list of cars', () => {
    //     //proverka vidimosti i vibora dannogo elementa
    //    cy.get(car_group_list).should('be.visible')
    //    //vibor iz spiska
    //    cy.get(car_group_list).select('Group 1',  {force: true})
    //    //proverka ego vibora
    //    cy.get('[title="Group 1"]').should('be.visible')
    //    cy.get(car_group_list).select('Group 2',  {force: true})
    //    cy.get('[title="Group 2"]').should('be.visible')
    //    cy.get(car_group_list).select('Group 3',  {force: true})
    //    cy.get('[title="Group 3"]').should('be.visible')
    // })
    it('chooses list of driver_age', () => {
        //proverka vidimosti i vibora dannogo elementa
       cy.get(driver_age_list).should('be.visible')
       //vibor iz spiska
       cy.get(driver_age_list).select('23',  {force: true})
       //proverka ego vibora
       cy.get('[title="23"]').should('be.visible')
       cy.get(driver_age_list).select('24',  {force: true})
       cy.get('[title="24"]').should('be.visible')
       cy.get(driver_age_list).select('25',  {force: true})
       cy.get('[title="25"]').should('be.visible')
       cy.get(driver_age_list).select('26',  {force: true})
       cy.get('[title="26"]').should('be.visible')
       //ewe odin variant - zna4enie lista menyaetsya
       cy.get(driver_age_list).select('23',  {force: true}).should('have.value', "23")
    })

})