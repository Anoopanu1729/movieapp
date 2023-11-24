import React from 'react'
import Search from '../src/components/Search'

describe('<Search />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Search />)

    cy.get(':nth-child(1) > .bg-green-400').click()

    expect(1).to.be.equals(1)
   

  })
})