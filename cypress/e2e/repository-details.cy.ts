describe('Repository Details Page', () => {
  it('renders tag', () => {
    cy.visit('/repositories/user1/postgres');
    // Get the first row
    const row = cy.get('tbody').first();
    const expectedRowValues = {
      Name: 'latest',
      Security: '12 High',
      Size: '100 B',
      'Last Modified': 'Jun 2, 2022, 3:12 PM',
      Expires: 'Never',
      Manifest: 'sha256:123456789010',
    };
    for (const rowKey in expectedRowValues) {
      row.within(() =>
        cy
          .get(`[data-label="${rowKey}"]`)
          .should('have.text', expectedRowValues[rowKey]),
      );
    }
  });

  it('renders manifest list tag', () => {
    cy.visit('/repositories/user1/postgres');
    // Get the second row
    const row = cy.get('tbody').eq(1);

    // Assert on row values
    const expectedRowValues = {
      Name: 'manifestlist',
      Security: 'See Child Manifests',
      Size: 'N/A',
      'Last Modified': 'Jun 2, 2022, 3:12 PM',
      Expires: 'Never',
      Manifest: 'sha256:abcdefghij37',
    };
    for (const rowKey in expectedRowValues) {
      row.within(() =>
        cy
          .get(`[data-label="${rowKey}"]`)
          .should('have.text', expectedRowValues[rowKey]),
      );
    }

    // Expand second row
    row.within(() => cy.get('tr').should('have.length', 1));
    row.get('button').first().click();
    row.within(() => cy.get('tr').should('have.length', 3));
  });
});
