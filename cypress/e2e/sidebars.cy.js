describe("Sibebars tests", () => {
    it("Filters sidebar should be visible", () => {
        cy.visit(Cypress.env("homePageUrl"));

        cy.get('[data-testid="filters-sidebar-opener"]').click();
        cy.get('[data-testid="filters-sidebar"]').should("be.visible");

        cy.get('[data-testid="filters-sidebar-closer"]').click();
        cy.get('[data-testid="filters-sidebar"]').should("not.exist");
    });

    it("Navigation sidebar showuld be visible", () => {
        cy.viewport(1920, 1226);
        cy.visit(Cypress.env("homePageUrl"));

        cy.get("nav").should("be.visible");
    });

    it("Burger should open and close", () => {
        cy.viewport(768, 900);
        cy.visit(Cypress.env("homePageUrl"));

        cy.get('[data-testid="burger-button"]').click();
        cy.get("nav").should("be.visible");

        cy.get('[data-testid="burger-button"]').click();
        cy.get("nav").should("not.exist");
    });
});
