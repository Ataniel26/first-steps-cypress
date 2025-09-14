import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const loginPage = new LoginPage() 
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Test', () => {


  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfoButton()

    myInfoPage.fillPersonalDetails(chance.first(), chance.string(), chance.last())
    myInfoPage.fillEmployeeDetails('employeeId', 'otherId', 'driverLicenseNumber', '2025-11-21', '1999-08-26')
    myInfoPage.fillstatus()
    myInfoPage.saveForm()
})
it('Login - Fail', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
  loginPage.checkAccessInvalid()
})
}) 