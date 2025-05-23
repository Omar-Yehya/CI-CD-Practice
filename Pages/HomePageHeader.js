
export class HomePageHeader {
    //The TG Logo
    getHeaderLogo(){
        return cy.get('#logo')
    }

    //Testing Drop down and the two options below
    getTestingDropDown(){
        return cy.get('#dropdown-testing')
    }

    getFrontEndTestingOption(){
        return cy.get('#frontend-option')
    }

    getBackEndTestingOption(){
        return cy.get('#backend-option')
    }

    //Exercise Drop down and the two options below

    getExercisesDropDown(){
        return cy.get('#dropdown-exercises')
    }
    getJavaExerciseOption(){
        return cy.get('#java-option')
    }

    getJsexerciseOption(){
        return cy.get('#js-option')
    }

    //Mock Interview Locator
    getMockInterviewLink(){
        return cy.contains('div', 'Mock Interviews')
    }
}