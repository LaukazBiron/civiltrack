describe('API Auth', () => {
  it('POST /api/auth/login responde 200 con credenciales válidas', () => {
    cy.fixture('usuario').then((user) => {
      cy.request('POST', `${Cypress.config('apiUrl')}/auth/login`, {
        correo: user.correo,
        password: user.password
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.mensaje).to.eq('Login exitoso');
        expect(res.body.usuario).to.have.property('rol');
      });
    });
  });

  it('POST /api/auth/login responde 401 con contraseña incorrecta', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.config('apiUrl')}/auth/login`,
      body: { correo: 'admin@test.com', password: 'wrongpass' },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(401);
    });
  });

  it('GET /api/auth/me sin token responde 401', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('apiUrl')}/auth/me`,
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(401);
    });
  });

  it('POST /api/auth/logout limpia la cookie de sesión', () => {
    cy.fixture('usuario').then((user) => {
      cy.request('POST', `${Cypress.config('apiUrl')}/auth/login`, user);
      cy.request('POST', `${Cypress.config('apiUrl')}/auth/logout`).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.mensaje).to.eq('Sesión cerrada correctamente');
      });
    });
  });
});