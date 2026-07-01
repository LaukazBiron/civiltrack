describe('CRUD de Proyectos/Obras', () => {
  beforeEach(() => {
    cy.fixture('usuario').then((user) => {
    cy.loginUI(user.correo, user.password);
    cy.visit('/dashboard');
    });
  });

  it('crea un nuevo proyecto correctamente', () => {
    cy.get('[data-testid="open-new-project-desktop"]').click();
    cy.get('[data-testid="new-project-modal"]').should('be.visible');

    cy.get('[data-testid="new-project-name"]').type('Proyecto QA Cypress');
    cy.get('[data-testid="new-project-ubicacion"]').type('Calle de Prueba 123');
    cy.get('[data-testid="new-project-fecha"]').type('2026-07-01');
    cy.get('[data-testid="new-project-submit"]').click();

    cy.get('[data-testid="dashboard-toast"]').should('contain.text', 'Proyecto creado correctamente');
    cy.contains('Proyecto QA Cypress').should('be.visible');
  });

  it('valida campos obligatorios vacíos', () => {
    cy.get('[data-testid="open-new-project-desktop"]').click();
    cy.get('[data-testid="new-project-submit"]').click();
    cy.contains('El nombre es obligatorio').should('be.visible');
    cy.contains('La ubicación es obligatoria').should('be.visible');
    cy.contains('La fecha de inicio es obligatoria').should('be.visible');
  });

  it('edita un proyecto existente', () => {
    cy.contains('[data-testid^="project-card-"]', 'Proyecto QA Cypress')
      .find('[data-testid^="edit-project-"]')
      .click();

    cy.get('[data-testid="edit-project-name"]').clear().type('Proyecto QA Editado');
    cy.get('[data-testid="edit-project-submit"]').click();

    cy.get('[data-testid="dashboard-toast"]').should('contain.text', 'Proyecto actualizado correctamente');
    cy.contains('Proyecto QA Editado').should('be.visible');
  });

  it('cambia el estado activo/inactivo desde el modal de edición', () => {
    cy.contains('[data-testid^="project-card-"]', 'Proyecto QA Editado')
      .find('[data-testid^="edit-project-"]')
      .click();

    cy.get('[data-testid="edit-project-toggle-activo"]').click();
    cy.get('[data-testid="edit-project-submit"]').click();
    cy.get('[data-testid="dashboard-toast"]').should('be.visible');
  });

  it('cancela la creación sin guardar cambios', () => {
    cy.get('[data-testid="open-new-project-desktop"]').click();
    cy.get('[data-testid="new-project-name"]').type('No debería guardarse');
    cy.get('[data-testid="new-project-cancel"]').click();
    cy.contains('No debería guardarse').should('not.exist');
  });

  it('elimina un proyecto', () => {
    cy.contains('[data-testid^="project-card-"]', 'Proyecto QA Editado')
      .find('[data-testid^="delete-project-"]')
      .click();

    cy.get('[data-testid="delete-confirm"]').click();
    cy.get('[data-testid="dashboard-toast"]').should('contain.text', 'Proyecto eliminado');
    cy.contains('Proyecto QA Editado').should('not.exist');
  });

  it('filtra proyectos por estado activo/inactivo', () => {
    cy.get('[data-testid="filter-active"]').click();
    cy.get('[data-testid^="project-card-"]').each(($card) => {
      cy.wrap($card).should('contain.text', 'Activo');
    });
  });
});