import BasePage from "./BasePage";

class LoginPage extends BasePage{
    
    get signInBanner() { return cy.get(".sign-in-content__banner").should("be.visible"); }
    get signInContentForm() {return cy.get(".sign-in-content__form").should("be.visible");}
    get EnterUsername(){
        return cy.get("#mat-input-0")
    }
    get EnterPassword(){
        return cy.get("#mat-input-1")
    }

    get SubmitButton(){
        return cy.get("button[type='submit']")
    }
    open(){
        return cy.visit('https://LifeBonder:NextGen2022!@app.lifebonder.net', {failOnStatusCode: false});
    }

    EnterUsernameText(inputSearchKeyword){
       return this.EnterUsername.type(inputSearchKeyword)
    }

    EnterPasswordText(keyword){
        return this.EnterPassword.type(keyword)
    }
    ClickSubmitButton(){
        return this.SubmitButton.click()
    }

}
module.exports = new LoginPage();


