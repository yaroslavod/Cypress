///<reference types = "Cypress"/>

describe('The sanity test suite for travel site', () => {
    it('navigate to the main page', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('eq','http://localhost:3000/')
    })

    it('verify tabs of the page', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy="Hotels"]').should("be.visible")
        cy.get('[data-cy="Car"]').should("be.visible")
        cy.get('[data-cy="Flight"]').should("be.visible")
      })

      it('Add a flight, Add a Car and Search elements are visible on the page', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy="flight_chk"]').should("be.visible")
        cy.get('[data-cy="cars_chk"]').should("be.visible")
        cy.get('#tab1 > form > .btn-submit').should("be.visible")
      })

  })