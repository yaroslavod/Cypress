// ///<reference types = "Cypress"/>

// describe('empty spec', () => {

//   it('test1', () => {

//     cy.visit('https://example.cypress.io')

//     cy.url().should('eq', 'https://example.cypress.io/')

//   })



//  it('test2', () => {

//     cy.visit('https://example.cypress.io')

//     cy.url().should('eq', 'https://example.cypress.io/')

//   })

// })


///<reference types = "Cypress"/>
describe('template spec', () => {
  it('test cypress io example page', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should('eq', 'https://example.cypress.io/')


  })
})