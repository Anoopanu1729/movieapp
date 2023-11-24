import React from 'react'
import Popular from '../src/components/Popular'
Cypress.config('defaultCommandTimeout', 10000);
describe('<Popular />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Popular />)
    

    cy.get('.movie-item').should(($tr) => {
      expect($tr).to.have.length(20)
    })

  })
})