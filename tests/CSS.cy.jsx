import React from 'react'
import App from '../src/App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
    cy.get('.search-input') .invoke('css', 'width').then((width) => {
      expect(width).to.eq('1100px')
    })
  })
})