import React from 'react'
import Home from '../src/components/Home'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />)

    cy.get('input').first().type('expend4bles')
    cy.get('.movie-item').should(($tr) => {
      expect($tr).to.have.length(1)
    })
  })
})

//expend4bles