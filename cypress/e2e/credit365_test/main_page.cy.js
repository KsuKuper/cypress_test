/// <reference types="cypress" />

describe("open main page credit365.md", () => {
  beforeEach(() => {
    cy.visit("https://credit365.md");
  });
  it("check loading page credit365", () => {
    cy.get("body").should("be.visible");
  });
});
