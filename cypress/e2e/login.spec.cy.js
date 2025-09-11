describe('Orange HRM Test', () => {
  
  const selectorsList = {
    usernameFild: '[name="username"]',
    passwordFild: '[name="password"]',
    submitFild: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: ".oxd-alert"
  }
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFild).type('Admin')
    cy.get(selectorsList.passwordFild).type('admin123')
    cy.get(selectorsList.submitFild).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFild).type('test')
    cy.get(selectorsList.passwordFild).type('test')
    cy.get(selectorsList.submitFild).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})