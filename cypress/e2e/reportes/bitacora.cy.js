describe('Bitácora — creación de reportes', () => {
  beforeEach(() => {
    cy.fixture('usuario').then((user) => {
    cy.loginUI(user.correo, user.password);
    cy.visit('/dashboard');
    });
  });

  it('crea un reporte de bitácora sin foto', () => {
    cy.get('[data-testid="open-new-report-desktop"]').click();
    cy.get('[data-testid="new-report-title"]').type('Colado de losa nivel 3');
    cy.get('[data-testid="new-report-description"]').type('Avance del 80% en el colado programado.');
    cy.get('[data-testid="new-report-submit"]').click();

    cy.get('[data-testid="bitacora-list"]').should('contain.text', 'Colado de losa nivel 3');
  });

  it('crea un reporte de bitácora con foto adjunta', () => {
    cy.get('[data-testid="open-new-report-desktop"]').click();
    cy.get('[data-testid="new-report-title"]').type('Entrega de material');
    cy.get('[data-testid="new-report-description"]').type('Llegada de varilla y cemento a obra.');
    cy.get('[data-testid="new-report-file"]').selectFile('cypress/fixtures/foto-prueba.jpg', { force: true });
    cy.get('[data-testid="new-report-submit"]').click();

    cy.get('[data-testid="bitacora-list"]').should('contain.text', 'Entrega de material');
  });

  it('no permite enviar el formulario sin título ni descripción', () => {
    cy.get('[data-testid="open-new-report-desktop"]').click();
    cy.get('[data-testid="new-report-submit"]').click();
    // Los campos son required a nivel HTML; validamos que el modal siga abierto
    cy.get('[data-testid="new-report-title"]:invalid').should('exist');
  });
});