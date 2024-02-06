describe("My Account", () => {
  /* it("Berhasil Edit Address", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#email").type("yuyut@gmail.com");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
    ).type("Riyroisi16-");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-name > .action"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a"
    ).click();
    cy.get(".box-billing-address > .box-actions > .action > span").click();
    cy.get("#street_1").type("Jalan Mawar");
    cy.get("#city").type("Medan");
    cy.get("#zip").type("23423");
    cy.get("#country").select("Indonesia");
    cy.get("#telephone").type("08226754820");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
  });

  it("Gagal Edit Address dengan mengosongkan nomor telephone", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#email").type("yuyut@gmail.com");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
    ).type("Riyroisi16-");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-name > .action"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a"
    ).click();
    cy.get(".box-billing-address > .box-actions > .action > span").click();
    cy.get("#street_1").clear().type("Jalan Mawar");
    cy.get("#city").clear().type("Medan");
    cy.get("#zip").clear().type("23423");
    cy.get("#country").select("Indonesia");
    cy.get("#telephone").clear();
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
  });

  it("Gagal Edit Address dengan mengosongkan Street Address", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#email").type("yuyut@gmail.com");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
    ).type("Riyroisi16-");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-name > .action"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a"
    ).click();
    cy.get(".box-billing-address > .box-actions > .action > span").click();
    cy.get("#street_1").clear();
    cy.get("#city").clear().type("Medan");
    cy.get("#zip").clear().type("23423");
    cy.get("#country").select("Indonesia");
    cy.get("#telephone").clear().type("08226754820");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
  });

  it("Berhasil Choose Product(s)", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#email").type("yuyut@gmail.com");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
    ).type("Riyroisi16-");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span"
    ).click();
    cy.get("#ui-id-3").click();
    cy.get(".products-grid > .product-items > :nth-child(1)").click();
    cy.get("#option-label-size-143-item-166").click();
    cy.get("#option-label-color-93-item-52").click();
    cy.get("#product-addtocart-button").click();
  });

  it("Gagal Choose Product(s) dengan mengosongkan ", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#email").type("yuyut@gmail.com");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
    ).type("Riyroisi16-");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span"
    ).click();
    cy.get("#ui-id-3").click();
    cy.get(".products-grid > .product-items > :nth-child(1)").click();
    cy.get("#option-label-color-93-item-52").click();
    cy.get("#product-addtocart-button").click();
  });*/

  it("Berhasil View and Update Shopping Cart", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#email").type("yuyut@gmail.com");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
    ).type("Riyroisi16-");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span"
    ).click();
    cy.get(".minicart-wrapper > .action").click();
    cy.get("#cart-609007-qty").clear().type("3");
    cy.get(".update").click();
  });
});
