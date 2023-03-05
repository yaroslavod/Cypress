///<reference types = "Cypress"/>

describe('The sanity test suite for travel site', () => {
    it('navigate to the main page', () => {
      cy.visit('http://localhost:3000')
    //   adress na kotorij zawli sovpadaet s ykazannim
      cy.url().should('eq','http://localhost:3000/')
    })

    it('verify tabs of the page', () => {
        cy.visit('http://localhost:3000')
        // knopka sootwetsvyet i vidna
        cy.get('[data-cy="Hotels"]').should("be.visible")
        cy.get('[data-cy="Car"]').should("be.visible")
        cy.get('[data-cy="Flight"]').should("be.visible")
      })

      it('verify text of tabs of the page', () => {
        cy.visit('http://localhost:3000')
        // sovpadenie nazvaniya knopki
        cy.get('[data-cy="Hotels"]').should("have.text", "hotels")
        cy.get('[data-cy="Car"]').should("have.text", "car")
        cy.get('[data-cy="Flight"]').should("have.text", "flight")
      })

      it('verify elements of Hotels tab', () => {
        cy.visit('http://localhost:3000')
        // iwem element po selectory
        cy.get('[data-cy="flight_chk"]').should("be.visible")
        cy.get('[data-cy="cars_chk"]').should("be.visible")
        // cy.get('#tab1 > form > .btn-submit').should("be.visible")
        // iwem element po texty
        // cy.contains('search').should("be.visible")
        // iwem element po type
        cy.get('[type="submit"]').should("be.visible")
      })

  })