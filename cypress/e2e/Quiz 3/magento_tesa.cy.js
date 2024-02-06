const link = 'https://magento.softwaretestingboard.com/'

describe('Create an Account', () => {
  it('Membuat Akun Berhasil', () => {
    cy.visit(link)
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type("Tesalonika")
    cy.get('#lastname').type("Sitopu")
    cy.get('#email_address').type("mayasianturihebat" + Math.floor(Math.random() * 10000) + "@gmail.com")
    cy.get('#password').type("Tesa123456")
    cy.get('#password-confirmation').type("Tesa123456")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.block-dashboard-info > .block-content > .box > .box-title > span').should("exist")
  })

  it('Membuat Akun Gagal Akun sudah ada sebelumnya', () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
    cy.get('#firstname').type("Tesalonika")
    cy.get('#lastname').type("Sitopu")
    cy.get('#email_address').type("mayasianturihebat@gmail.com")
    cy.get('#password').type("Tesa123456")
    cy.get('#password-confirmation').type("Tesa123456")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.wait(1000)
    cy.get('.message-error > div').should("contain.text", "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.")
  })
})

describe("Login", ()=>{
  it('Login Berhasil', () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    cy.get('#email').type("mayasianturihebat@gmail.com")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Tesa123456")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').should("exist")
  });

  it('Login Gagal Password Salah', () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    // cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type("mayasianturihebat@gmail.com")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Tesa1234567")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.wait(2000)
    cy.get('.message-error > div').should("include.text", "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.")
  })

  it('Login Gagal Email Salah', () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    // cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type("mayasianturiheba@gmail.com")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Tesa123456")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.wait(2000)
    cy.get('.message-error > div').should("include.text", "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.")
  })
})

describe ("Edit Account Information", ()=>{
  it('Edit Account Berhasil', () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    cy.get('#email').type("mayasianturihebat@gmail.com")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Tesa123456")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#firstname').clear().type("Tesalonika")
    cy.get('#lastname').clear().type("Sitopu")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success > div').should('include.text', 'You saved the account information.')
  })

  it('Edit Account Gagal FirstName Kosong', () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    cy.get('#email').type("mayasianturihebat@gmail.com")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Tesa123456")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#firstname').clear()
    cy.get('#lastname').clear().type("Sitopu")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#firstname-error').should('exist')
  })

  it('Edit Account Gagal Lastname Kosong', () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    cy.get('#email').type("mayasianturihebat@gmail.com")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Tesa123456")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#firstname').clear().type("Tesalonika")
    cy.get('#lastname').clear()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.wait (5000)
    cy.get('#lastname-error').should('exist')
  })

})

describe ("Proceed to Checkout", ()=>{
  it('Checkout Berhasil', () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    cy.get('#email').type("mayasianturihebat@gmail.com")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Tesa123456")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.wait(3000)
    cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.wait(3000)
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#product-addtocart-button > span').click()
    cy.wait(3000)
    cy.get('.message-success > div > a').click()
    cy.wait(5000)
    cy.get('.checkout-methods-items > :nth-child(1) > .action > span').click()
    cy.wait(5000)
    cy.get('.button').click()
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()
    cy.get('.base').should("include.text", "Thank you for your purchase!")
  })

  it('Checkout Gagal Ukuran Tidak Ditentukan', () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    cy.get('#email').type("mayasianturihebat@gmail.com")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Tesa123456")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.wait(3000)
    cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.wait(3000)
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#product-addtocart-button > span').click()
  })

})




