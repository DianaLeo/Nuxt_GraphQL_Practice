describe('Home Page', () => {
  it('renders all elements', () => {
    cy.visit('/')
    cy.get('.menu-item').contains('Projects').click()
  })
})