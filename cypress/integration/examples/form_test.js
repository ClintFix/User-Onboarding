

describe('User Forms Test', () => {
    // Each test needs clean state
    // Test cant rely on previous tests
    // Every test needs to work in isolation
    // before each test navigate to http://localhost:1234
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    // check to make sure test are working //
    it('sanity check', ()=> {
        expect(1+1).to.equal(2);
    })

    // selectors to use for tests //
    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const acceptTermsCheckBox = () => cy.get('input[name=terms]')
    const submitButton = () => cy.get('button')

    it('MVP test', () => {
        // Type into nameInput
        nameInput()
            .type('Clint Fix')
        // Check to make sure inputted text contains name given
        nameInput()
            .should('have.value', 'Clint Fix')
        // Type email into emailInput
        emailInput()
            .type('clint.fix@gmail.com')
        // Type password into passwordInput
        passwordInput()
            .type('Moonpies1')
        // Check if user can check the acceptTermsCheckbox
        acceptTermsCheckBox().check()
        // Check to see if user can sumit form data
        submitButton().should('not.be.disabled')
        submitButton().click()
        
        // check for form validation if input bad
        nameInput()
            .type('Kaitlyn')
        emailInput()
            .type('Kaitlyn.fixgmail.com') // not properly formatted email
        passwordInput()
            .type('MyPassword1')
        acceptTermsCheckBox().check()
        cy.contains('Must be a valid email address').should('exist')

    })
})