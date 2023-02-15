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

      it('Test Suite for the Hotels Tab verify to exists', () => {
        cy.visit('http://localhost:3000')
        // iwem element po selectory
        cy.get('#tab1 > form > :nth-child(1) > .label').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("be.visible")
        cy.get(':nth-child(3) > .label').should("be.visible")
        cy.get('[data-cy="flight_chk"]').should("be.visible")
        cy.get('[data-cy="cars_chk"]').should("be.visible")
        cy.get('#tab1 > form > .btn-submit').should("be.visible")
      })

      it('Test Suite for the Hotels Tab  has the correct text', () => {
        cy.visit('http://localhost:3000')
        // iwem element po texty
        cy.contains('Going to').should("be.visible")
        cy.contains('check-in').should("be.visible")
        cy.contains('check-out').should("be.visible")
        cy.contains('travellers').should("be.visible")
        cy.contains('Add a flight').should("be.visible")
        cy.contains('Add a car').should("be.visible")
        cy.contains('search').should("be.visible")
        // iwem element po type
        // cy.get('[type="submit"]').should("be.visible")
      })
      
      it('Test Suite for the Hotels Tab  has the correct type', () => {
        cy.visit('http://localhost:3000')
        // iwem element po type
        cy.get('[type="text"]').should("be.visible")
        cy.get('[type="submit"]').should("be.visible")
      })

  })