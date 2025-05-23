export default class HomePageFooter {

    /* LOCATORS */
    getFooterLogo() {
        return cy.get('img[alt="Tech Global Logo"]')
    }

    getAllFooterText() {
        return cy.get('.has-text-white')
    }
    getFooterTextingText() {
        return this.getAllFooterText().first()
    }
    getFooterFrontEndTestingText() {
        return this.getAllFooterText().eq(1)

    }
    getFooterBackEndTestingText() {
        return this.getAllFooterText().eq(2)
    }

    getFooterExercisesText() {
        return this.getAllFooterText().eq(3)
    }

    getFooterJavaExercisesText() {
        return this.getAllFooterText().eq(4)
    }

    getFooterJsExerciesText() {
        return this.getAllFooterText().eq(5)
    }

    getMockInterviewsButton() {
        return cy.get('.button.is-white.Footer_button__2oD\\+V')
    }
}