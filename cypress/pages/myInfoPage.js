class MyInfoPage {

    selectorList() {
        const selectors = {
               firstNameFild: "[name='firstName']",
               middleNameFild: "[name='middleName']",
               lastNameFild: "[name='lastName']",
               employeeIdFild: ".oxd-input--active",
               otherIdFild: ".oxd-input--active",
               driverLicenseNumberFild: ".oxd-input--active",
               licenseExpireDateFild: "[placeholder='yyyy-dd-mm']",
               dateCloseButtonFild: '.--close',
               dateOfBarthFild: "[placeholder='yyyy-dd-mm']",
               nationalityFild: ".oxd-select-text-input",
               dropDownButton: '.oxd-select-dropdown',
               maritalStatusFild: ".oxd-select-text-input",
               genderFild : ".oxd-radio-wrapper",
               saveButtomFild: ".oxd-button--secondary"   
  }

           return selectors
        }
    
    

fillPersonalDetails(firstName, middleName, lastName) {

   cy.get(this.selectorList().firstNameFild).clear().type(firstName)
   cy.get(this.selectorList().middleNameFild).clear().type(middleName)
   cy.get(this.selectorList().lastNameFild).clear().type(lastName)

}

fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, driverLicenseExpireDate, dateOfBarth) {
   cy.get(this.selectorList().employeeIdFild).eq(3).clear().type(employeeId)
   cy.get(this.selectorList().otherIdFild).eq(4).clear().type(otherId)
   cy.get(this.selectorList().driverLicenseNumberFild).eq(5).clear().type(driversLicenseNumber)
   cy.get(this.selectorList().licenseExpireDateFild).eq(0).clear().type(driverLicenseExpireDate)
   cy.get(this.selectorList().dateCloseButtonFild).click()
   cy.get(this.selectorList().dateOfBarthFild).eq(1).clear().type(dateOfBarth)
   cy.get(this.selectorList().dateCloseButtonFild).click()
   
}

saveForm() {
    cy.get(this.selectorList().saveButtomFild).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-text--toast-message')

}
   fillstatus() {
   cy.get(this.selectorList().nationalityFild).eq(0).click()
   cy.get(this.selectorList().dropDownButton).should('be.visible').contains('Brazilian').click()
   cy.get(this.selectorList().maritalStatusFild).eq(1).click() 
   cy.get(this.selectorList().dropDownButton).should('be.visible').contains('Single').click()
   cy.get(this.selectorList().genderFild).eq(0).click()
   }
   
}    

export default MyInfoPage 