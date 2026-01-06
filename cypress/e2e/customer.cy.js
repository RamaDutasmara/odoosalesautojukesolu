describe('Sales - Customer Module', () => {

  beforeEach(() => {
    cy.visit('https://test-qa-juke.odoo.com');
    cy.get('#login').type('testing@gmail.com');
    cy.get('#password').type('123');
    cy.get('button[type="submit"]').click();
  });

  it('Create customer dengan data valid', () => {
    cy.contains('Customers').click();
    cy.contains('New').click();

    cy.get('input[name="name"]').type('Customer Automation Test');
    cy.get('body').click(0, 0); // trigger auto-save (Odoo inline save)

    cy.contains('Customer Automation Test').should('be.visible');
  });
  it('Update data customer', () => {
    cy.contains('Customer Automation Test').click();

    cy.get('input[name="phone"]').clear().type('081234567890');
    cy.get('body').click(0, 0); // auto-save

    cy.get('input[name="phone"]').should('have.value', '081234567890');
  });

});
