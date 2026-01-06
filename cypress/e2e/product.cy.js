describe('Sales - Product Module', () => {

  it('Create product dengan data valid', () => {
    cy.contains('Products').click();
    cy.contains('New').click();

    cy.get('input[name="name"]').type('Product Automation Test');
    cy.get('input[name="list_price"]').type('50000');
    cy.get('body').click(0, 0); // auto-save

    cy.contains('Product Automation Test').should('be.visible');
  });
  it('Update harga product', () => {
    cy.contains('Product Automation Test').click();

    cy.get('input[name="list_price"]').clear().type('75000');
    cy.get('body').click(0, 0); // auto-save

    cy.get('input[name="list_price"]').should('have.value', '75000');
  });

});
