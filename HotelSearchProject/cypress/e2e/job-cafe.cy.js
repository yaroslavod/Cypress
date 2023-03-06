///<reference types = "Cypress"/>
// Url po ymol4aniu v file cypressconfig.js in e2e 'baseUrl':'http://167.99.178.249:3000/',
// // If you wish to visit the main URL, just use 
// cy.visit('/')
// With no specific page

// // Podstavka v pole dlya vvoda peremennoj s ispolzovaniem fila commands.js
// Cypress.Commands.add('searchForPosition', (position_name) => { 
// cy.get('[placeholder="position"]').type(position_name, {force: true}) 
// cy.get('button').contains('search').click({force: true})

// // exportiryem soderganie v skobkax v drygoj klass iz fila selectoes.js
// export default{
//     position_placeholder : '[placeholder="position"]',
//     location_placeholder : '[placeholder="location"]',
//     company_placeholder : '[placeholder="company"]'
// }

// // Podstavka v pole dlya vvoda peremennoj s ispolzovaniem fila commands.js
// Cypress.Commands.add('searchForPosition', (position_name) => { 
//     cy.get(selectors.position_placeholder).type(position_name, {force: true}) 
//     cy.get('button').contains('search').click({force: true})

// })
// Cypress.Commands.add('completeSearch', (position_name, location_name, company_name) => { 
//     cy.get(selectors.position_placeholder).type(position_name, {force: true}) 
//     cy.get(selectors.location_placeholder).type(location_name, {force: true})
//     cy.get(selectors.company_placeholder).type(company_name, {force: true})
//     cy.get('button').contains('search').click({force: true})
// })

// // iportirovanie iz faila selectors.js
// import selectors from '../support/selectors.js'

describe('Job cafe sanity spec', { defaultCommandTimeout: 10000 }, () => {
    // it('test jobs page with 10 sec', { defaultCommandTimeout: 10000 }, () => {
    //     cy.visit('job-page')
    //     //   cy.wait(5000)
    //     cy.get('[class="post-item clearfix"]').should('be.visible')
    // })

    it('test jobs page search for QA position', { defaultCommandTimeout: 10000 }, () => {
        cy.visit('job-page')
        // poisk polya po parametry placeholder i vvod informacii QA v pole 
        // cy.get('[placeholder="position"]').type('QA', {force: true})
        // // poisk knopki na kotoroj napisano search i nagatie na nee
        // cy.get('button').contains('search').click({force: true})
        // Podstavka v pole dlya vvoda peremennoj s ispolzovaniem fila commands.js
        cy.searchForPosition('QA')
        cy.get('[class="post-item clearfix"]').contains('QA').should('be.visible')

    })

    it('test jobs page search for developer position', { defaultCommandTimeout: 10000 }, () => {
        cy.visit('job-page')
        // poisk polya po parametry placeholder i vvod informacii QA v pole 
        // cy.get('[placeholder="position"]').type('Developer', {force: true})
        // // poisk knopki na kotoroj napisano search i nagatie na nee
        // cy.get('button').contains('search').click({force: true})
        // Podstavka v pole dlya vvoda peremennoj s ispolzovaniem fila commands.js
        cy.searchForPosition('Developer')
        cy.get('[class="post-item clearfix"]').contains('Developer').should('be.visible')

    })
    // polnoe zapolnenie poiska t.e. neskolkix polej vvoda s ispolzovaniem fila commands.js
    it('test jobs page search for QA position in USA by company name Apple', { defaultCommandTimeout: 10000 }, () => {
        cy.visit('job-page')
        cy.completeSearch('QA', 'USA', 'Apple')
        cy.get('[class="post-item clearfix"]').contains('QA').should('be.visible')
        cy.get('p').contains('Apple').should('be.visible')
        cy.get('span').contains('USA').should('be.visible')

    })

    // it('test jobs page with 1 sec', {defaultCommandTimeout: 1000}, () => {
    //     cy.visit('http://167.99.178.249:3000/job-page', {timeout:10000})
    //   //   cy.wait(5000)
    //   // poisk elementa po classy s zadergkoj
    //     cy.get('[class="post-item clearfix"]', {timeout:10000}).should('be.visible')
    //       })

})