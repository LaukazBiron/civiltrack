describe('Login CivilTrack', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('permite iniciar sesión con credenciales válidas', () => {
    cy.fixture('usuario').then((user) => {
      cy.get('[data-testid="login-email"]').type(user.correo);
      cy.get('[data-testid="login-password"]').type(user.password);
      cy.get('[data-testid="login-submit"]').click();
      cy.url().should('include', '/dashboard');
    });
  });

  it('rechaza un correo con formato inválido', () => {
    cy.get('[data-testid="login-email"]').type('correo-mal-escrito');
    cy.get('[data-testid="login-password"]').type('123456');
    cy.get('[data-testid="login-submit"]').click();
    cy.get('[data-testid="login-error"]').should('contain.text', 'correo');
  });

  it('rechaza contraseña incorrecta', () => {
    cy.fixture('usuario').then((user) => {
      cy.get('[data-testid="login-email"]').type(user.correo);
      cy.get('[data-testid="login-password"]').type('contraseñaIncorrecta');
      cy.get('[data-testid="login-submit"]').click();
      cy.get('[data-testid="login-error"]').should('contain.text', 'contraseña es incorrecta');
    });
  });

  it('bloquea tras 5 intentos fallidos (rate limit)', () => {
    for (let i = 0; i < 5; i++) {
      cy.get('[data-testid="login-email"]').clear().type('x@x.com');
      cy.get('[data-testid="login-password"]').clear().type('incorrecta1');
      cy.get('[data-testid="login-submit"]').click();
    }
    cy.get('[data-testid="login-email"]').clear().type('x@x.com');
    cy.get('[data-testid="login-password"]').clear().type('incorrecta1');
    cy.get('[data-testid="login-submit"]').click();
    cy.get('[data-testid="login-error"]').should('contain.text', 'Demasiados intentos');
  });
});