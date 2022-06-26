const LoginPage = require('../page-objects/LoginPage');
const RegistrationPage = require('../page-objects/RegistrationPage');
const { faker }  = require('@faker-js/faker')
let name=faker.name.findName()
let email=faker.internet.email()
const uuid = () => Cypress._.random(0, 1e8)
const id = uuid()




describe('NewUser_Login', function() {

  beforeEach(() => {
    LoginPage.open();
});

    it('Verify that new users can access the Lifebonder Application & create new account', () => {
      RegistrationPage.ClickSignupButton()
      RegistrationPage.EnterFullName(name)
      RegistrationPage.EnterEmail(email)
      RegistrationPage.ClickCountryDropdown()
      RegistrationPage.SelectCountryCode()
      RegistrationPage.EnterPhoneNumber(id)
      RegistrationPage.EnterPassword("NewBonder123!")
      RegistrationPage.EnterPasswordText("NewBonder123!")
      RegistrationPage.ClickTerms()
      RegistrationPage.ClickAgeTick()
      RegistrationPage.ClickGoButton()
  });

  
describe('Login to the Application', () => {

   

  it('login with valid account', () => {
      LoginPage.EnterUsernameText("LifeBonder")
      LoginPage.EnterPasswordText("NextGen2022!")
      LoginPage.ClickSubmitButton()
  })
  
})
        
    })


