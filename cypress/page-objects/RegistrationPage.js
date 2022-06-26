import BasePage from "./BasePage";


class RegistrationPage extends BasePage{

    get signUp() { return cy.get("a[routerlink='/sign-up']")}
    get FullName(){return cy.get("#mat-input-2")}
    get Email(){return cy.get("#mat-input-3")}
    get CountryCodeDropdown(){return cy.get(".mat-select-arrow-wrapper")}
    get CountryCode(){ return cy.get(".mat-option-text")}
    get PhoneNumber(){ return cy.get("#mat-input-4")}
    get Password(){ return cy.get("#mat-input-5")}
    get VerifyPassword(){ return cy.get("#mat-input-6")}
    get Terms(){ return cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container') }
    get Age(){return cy.get("#mat-checkbox-2 > .mat-checkbox-layout") }
    get Go(){ return cy.get("button[type='submit']") }

    ClickSignupButton(){
        return this.signUp.click()
    }
    EnterFullName(inputSearchKeyword){
        return this.FullName.type(inputSearchKeyword)
    }
    EnterEmail(inputSearchKeyword){
        return this.Email.type(inputSearchKeyword)
    }
    ClickCountryDropdown(){
        return this.CountryCodeDropdown.click()
    }
    SelectCountryCode(){
        return this.CountryCode.click()
    }
    EnterPhoneNumber(keyword){
        return this.PhoneNumber.type(keyword)
    }
    EnterPassword(inputSearchKeyword){
        return this.Password.type(inputSearchKeyword)
    }
    EnterPasswordText(inputSearchKeyword){
        return this.VerifyPassword.type(inputSearchKeyword)
    }
    ClickTerms(){
        return this.Terms.click()
    }
    ClickAgeTick(){   
        return this.Age.click()
    }
    ClickGoButton(){
        return this.Go.click()
    }

}
module.exports = new RegistrationPage();
