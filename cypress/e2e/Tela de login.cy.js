describe('Testar tela de login', () => {
  beforeEach(() => {
    cy.visit('https://app-controle-produtos.vercel.app/') //
  });

  it('Deve inserir um e-mail valido e senha valida e realizar login na aplicação', () => {
   cy.get('[data-testid="email-input"]').type('usuario@teste.com');
   cy.get('[data-testid="senha-input"]').type('senha123');
    cy.get('[data-testid="login-button"]').click();
  });

  it('Deve validar criação de novo cadastro', () => {
  cy.get('[data-testid="criar-conta-link"]').click();
  cy.get('[data-testid="new-email-input"]').type('evysamar@hgmail.com');
  cy.get('[data-testid="senha-input"]').type('12345678');
  cy.get('[data-testid="confirmar-senha-input"]').type('12345678');
  cy.get('[data-testid="criar-conta-button"]').click();
  });

  it('Deve validar as URLs', () => {
   cy.get('[data-testid="criar-conta-link"]').click(); 
  cy.url().should('include', '/cadastroUsuario');
  cy.log('verificou que a URL mudou para /cadastroUsuario')
  cy.get('[data-testid="new-email-input"]').type('jorgezqa@teste.com');
  cy.get('[data-testid="senha-input"]').type('20281234');
  cy.get('[data-testid="confirmar-senha-input"]').type('20281234');
  cy.get('[data-testid="criar-conta-button"]').click();
  cy.url().should('include', '/dashboard');
  cy.log('verificou que a URL mudou para /dashboard');
  });
});