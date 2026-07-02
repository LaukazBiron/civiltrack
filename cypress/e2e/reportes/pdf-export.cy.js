describe('Exportación de reportes en PDF', () => {
  let projectId;

  before(() => {
    cy.fixture('usuario').then((user) => {
      cy.request('POST', `${Cypress.config('apiUrl')}/auth/login`, user);
      cy.request('GET', `${Cypress.config('apiUrl')}/projects`).then((res) => {
        projectId = res.body[0]?.id_proyecto;
      });
    });
  });

  it('GET /api/proyectos/:id/pdf responde con content-type application/pdf', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('apiUrl')}/proyectos/${projectId}/pdf`,
      encoding: 'binary'
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.headers['content-type']).to.eq('application/pdf');
    });
  });

  it('rechaza exportación de un proyecto inexistente/ajeno', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('apiUrl')}/proyectos/999999/pdf`,
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([403, 404]);
    });
  });

  it('el botón de descarga en UI dispara la petición correctamente', () => {
  cy.fixture('usuario').then((user) => {
    cy.loginUI(user.correo, user.password);
    cy.visit('/dashboard');
    cy.get('[data-testid^="view-project-"]').first().click();
    cy.get('[data-testid="download-pdf-btn"]').should('be.visible').click();
    cy.get('[data-testid="download-pdf-btn"]').should('not.contain.text', 'Generando PDF...');
    });
  });
});