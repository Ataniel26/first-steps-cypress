import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'


const loginPage = new LoginPage() 
const dashboardPage = new DashboardPage

describe('Login Orange HRM Test', () => {

it('Login - Fail', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
  loginPage.checkAccessInvalid()
})

it('Login - success', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
  dashboardPage.checkDashboardPage()
})


}) 