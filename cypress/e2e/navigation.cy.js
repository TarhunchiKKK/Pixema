describe("Navigation tests", () => {
    beforeEach(() => {
        cy.viewport(1920, 1226);
        cy.visit(Cypress.env("homePageUrl"));
    });

    it("Navigate to home page", () => {
        cy.visit(Cypress.env("settingsPageUrl"));
        cy.contains("Home").click();
        cy.url().should("eq", Cypress.env("homePageUrl"));
    });

    it("Navigate to trends page", () => {
        cy.contains("Trends").click();
        cy.url().should("eq", Cypress.env("trendsPageUrl"));
    });

    it("Navigate to avourites page", () => {
        cy.contains("Favourites").click();
        cy.url().should("eq", Cypress.env("favouritesPageUrl"));
    });

    it("Navigate to settings page", () => {
        cy.contains("Settings").click();
        cy.url().should("eq", Cypress.env("settingsPageUrl"));
    });
});
