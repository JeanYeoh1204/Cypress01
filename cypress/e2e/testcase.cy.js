
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://cms-lyart.vercel.app/login')
    cy.get('#login_email')
    .should('be.enabled')
    .should('be.visible')

  })
})

/*describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})*/

/*describe('empty spec', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

cy.contains('type').click()

cy.url()
.should('include','/commands/actions')

    cy.get('.action-email')
    .type('abc@email.com')
    .should('have.value','abc@email.com')
  })
})*/

/*describe('empty spec', () => {
  it('passes', () => {
    assert(10+15, "it is 25")
    assert(11+15, "it is not 25")
  })
})*/

