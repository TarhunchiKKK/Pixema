describe("Dark mode tests", () => {
    it("Check class on document element", () => {
        cy.visit(Cypress.env("settingsPageUrl"));

        cy.get("html").then(($document) => {
            if ($document.hasClass("light")) {
                cy.get('[data-testid="theme-switch"]').should("not.be.checked");
            } else if ($document.hasClass("dark")) {
                cy.get('[data-testid="theme-switch"]').should("be.checked");
            }
        });
    });
});
