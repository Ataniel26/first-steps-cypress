import userData from '../fixtures/users/userData.json'

describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameFild: '[name="username"]',
    passwordFild: '[name="password"]',
    submitFild: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
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

  it('Login - Success', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameFild).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordFild).type(userData.userSuccess.password)
    cy.get(selectorsList.submitFild).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameFild).clear().type('Ataniel')
    cy.get(selectorsList.middleNameFild).clear().type('Alves')
    cy.get(selectorsList.lastNameFild).clear().type('de Oliveira')
    cy.get(selectorsList.employeeIdFild).eq(3).clear().type('Sonho Test')
    cy.get(selectorsList.otherIdFild).eq(4).clear().type('1234+')
    cy.get(selectorsList.driverLicenseNumberFild).eq(5).clear().type('696969')
    cy.get(selectorsList.licenseExpireDateFild).eq(0).clear().type('2025-08-26')
    cy.get(selectorsList.dateCloseButtonFild).click()
    cy.get(selectorsList.dateOfBarthFild).eq(1).clear().type('1999-08-26')
    cy.get(selectorsList.dateCloseButtonFild).click()
    cy.get(selectorsList.nationalityFild).eq(0).click()
    cy.get(selectorsList.dropDownButton).should('be.visible').contains('Brazilian').click()
    cy.get(selectorsList.maritalStatusFild).eq(1).click() 
    cy.get(selectorsList.dropDownButton).should('be.visible').contains('Single').click()
    cy.get(selectorsList.genderFild).eq(0).click()
    cy.get(selectorsList.saveButtomFild).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-text--toast-message')

  })
})