import {test,expect} from '@playwright/test'
test.beforeEach(async({page})=>{
   await page.goto('/')
    await expect(page.locator('.AuthHeader')).toContainText('Welcome')
    await page.getByRole('tab',{name:'Sign up'}).click()
    await expect(page.locator('[data-cy="cy_first_name_input"]')).toBeVisible()
})
test('First Name Validation',async({page})=>{
    await page.locator('#signupForm_first_name').fill('1234')
    await page.locator('body').click()
    await expect(page.locator('.ant-form-item-explain-error')).toContainText('Please enter')
})
test('Last Name validation',async({page})=>{
    await page.locator('#signupForm_last_name').fill('aqb*')
    await page.locator('body').click()
    await expect(page.locator('.ant-form-item-explain-error')).toContainText('Please enter')
})
test('Username Validation',async({page})=>{
    await page.locator('#signupForm_username').fill('123')
    await page.locator('body').click()
        await expect(page.locator('.ant-form-item-explain-error')).toContainText('Minimum')
})