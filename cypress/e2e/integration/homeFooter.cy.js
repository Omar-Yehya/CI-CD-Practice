/// <reference types="cypress" />

import HomePageFooter from "../../../Pages/HomePageFooter"

describe('TG100 G7 - Validate Base Page Footr', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/')
        
    })
    const homePageFooter = new HomePageFooter()

    it('Validate Footer contains proper elements', {tags: ['@Regression']}, () => {
        homePageFooter.getFooterLogo()
        homePageFooter.getAllFooterText()
        homePageFooter.getFooterTextingText().should('be.visible')
        homePageFooter.getFooterBackEndTestingText()
        homePageFooter.getFooterExercisesText()
        homePageFooter.getFooterJavaExercisesText()
        homePageFooter.getFooterJsExerciesText()
        homePageFooter.getFooterTextingText()
        homePageFooter.getMockInterviewsButton()
    })
})