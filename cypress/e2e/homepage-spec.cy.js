describe('homepage spec', () => {
 
  beforeEach(function () {
    cy.visit('https://cms-lyart.vercel.app/');
  });

  it('Verify the Navigation Bar Menu item "Course" display on the screen and navigate to the correct URL.', () => {
    cy.get('#menu > :nth-child(1) > :nth-child(1) > a').click()
    cy.url().should("include","/events"); 
    //wrong URL??? should be /course instead of /events?
  })

  it('Verify the Navigation Bar Menu item "Events" display on the screen and navigate to the correct URL.', () => {
    cy.get('#menu > :nth-child(1) > :nth-child(2) > a').click()
    cy.url().should("include","/events");
    //cy.go('back')
  })

  it('Verify the Navigation Bar Menu item "Students" display on the screen and navigate to the correct URL.', () => {
    cy.get('#menu > :nth-child(2) > :nth-child(1) > a').click()
    cy.url().should("include","/gallery");
  })

  it('Verify the Navigation Bar Menu item "Teachers" display on the screen and navigate to the correct URL.', () => {
    cy.get('#menu > :nth-child(2) > :nth-child(2) > a').click()
    cy.url().should("include","/gallery");
  })

  it('Verify the Navigation Bar Menu item "Logo" display on the screen and navigate to Homepage.', () => {
    cy.get('#logo').click()
    cy.url().should("include",'https://cms-lyart.vercel.app/');
  })

  it('Navigation Bar should always on the top screen and be visible', () => {
    cy.scrollTo('bottom');
    cy.get('#header').should('be.visible');
    //cy.wait('3000');
    cy.scrollTo('top');
    cy.get('#header').should('be.visible');
  });



})

describe('login spec', () => {
  
  it('Check "sign in button" and Visit login page', () => {
    cy.get('.header__SignIn-sc-19law7x-0 > a').should('be.visible').click();
    cy.url().should("include","/login");
  })

  it('Verify login and logout scenario', () => {
    cy.get('.ant-radio-button-wrapper-checked > :nth-child(2)')
    cy.get('#login_email').type('student@admin.com')
    cy.get('#login_password').type('111111')
    cy.get('.ant-btn > span').click()
    //cy.url().should("include","dashboard");
    //cy.get('.header__SignIn-sc-19law7x-0 > a').should('not.exists');
  });

})