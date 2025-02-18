import userData from'../data/userdata.js' with { type: "json" }
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from './menu.screen.js'
import LoginScreen from './login.screen.js'

describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
        await MenuScreen.accessLoginScreen()
        await LoginScreen.fillLoginForm(userData.userFail.username, userData.userFail.password)
        await expect($(LoginScreen.errorMessage)).toHaveText("Provided credentials do no match any user in this service")
    })

it('should login with invalid credentials', async () => {
    await MenuScreen.accessLoginScreen()
    await LoginScreen.fillLoginForm(userData.userFail.username, userData.userFail.password)
    await expect($(LoginScreen.errorMessage)).toHaveText("Provided credentials do no match any user in this service")
    })
})


