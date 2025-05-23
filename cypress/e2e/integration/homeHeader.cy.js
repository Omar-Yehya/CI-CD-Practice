const { HomePageHeader } = require("../../../Pages/HomePageHeader")
///<reference types='cypress' />


describe('TG00 Validate TG Header', () =>{
    beforeEach(() =>{
        cy.fixture('target-links').as('links')
        cy.visit('https://www.techglobal-training.com/')
    })
const homePageHeader = new HomePageHeader

    it('Header Logo/Header Text Validation', {tags: ['@Smoke']}, function() {
        homePageHeader.getHeaderLogo()
        .should('be.visible')
        .children()
        .should('have.attr', 'alt', 'techglobal-logo')

        homePageHeader.getTestingDropDown()
        .should('have.text', 'Testing')

          homePageHeader.getExercisesDropDown()
        .should('have.text', 'Exercises')

        homePageHeader.getMockInterviewLink()
        .should('have.text', 'Mock Interviews')
    })

    it('Validate Testing Dropdown Options', {tags: ['@Smoke']}, function() {
        homePageHeader.getTestingDropDown().realHover()
        
        homePageHeader.getFrontEndTestingOption()
        .should('have.text', 'Frontend Testing')
        .realClick()

        cy.url('eq', this.links.frontend)
        cy.go('back')

        homePageHeader.getTestingDropDown().realHover()

        homePageHeader.getBackEndTestingOption()
        .should('have.text', 'Backend Testing')
        .realClick()

        cy.url('eq', this.links.backend)
        

    })

    it('Validate Exercise Dropdown Options', {tags: ['@Smoke']}, function() {
        
      homePageHeader.getExercisesDropDown().realHover()

      homePageHeader.getJavaExerciseOption()
      .should('have.text', 'Java Exercises')
      .realClick()

      cy.url('eq', this.links.java)
      cy.go('back')

      homePageHeader.getExercisesDropDown().realHover()

      homePageHeader.getJsexerciseOption()
      .should('have.text', 'JS Exercises')
      .realClick()

      cy.url('eq', this.links.js)
      
        
    })

    it('Validate Mock Interviews', {tags: ['@Smoke']}, function() {
        homePageHeader.getMockInterviewLink().realClick()

        cy.url('eq', this.links.mockinterview)

    })

})