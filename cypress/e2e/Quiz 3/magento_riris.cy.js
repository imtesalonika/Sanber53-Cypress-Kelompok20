describe("Login", () => {
  it("Login", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#email").type("yuyut@gmail.com");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
    ).type("Riyroisi16-");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2"
    ).click();
  });
});
