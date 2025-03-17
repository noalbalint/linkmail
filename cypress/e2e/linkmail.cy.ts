/// <reference types="cypress" />
import "cypress-real-events";

describe('Create Page Spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const getCreateLinkButton = () => cy.contains('Create Link');
  const fillRecipientField = () => cy.contains('To').next().type('noalbalint@gmail.com');
  const fillCcField = () => cy.contains('Cc').next().type('asdf@gmail.com');
  const fillBccField = () => cy.contains('Bcc').next().type('test@gmail.com');
  const fillSubjectField = () => cy.contains('Subject').next().type('app feedback');
  const fillBodyField = () => cy.get('TextArea').type('hey your app was helpful to me, thanks!');
  const openCcField = () => cy.contains('Cc').click();
  const openBccField = () => cy.contains('Bcc').click();

  it('Disables Create Link if there is no recipient', () => {
    getCreateLinkButton().should('be.disabled');
  })

  it('Disables Create Link if there is only recipient', () => {
    fillRecipientField();
    getCreateLinkButton().should('be.disabled');
  })

  it('Disables Create Link if there is only recipient and subject', () => {
    fillRecipientField();
    fillSubjectField();
    getCreateLinkButton().should('be.disabled');
  })

  it('Creates link if recipient, subject, and body are present', () => {
    fillRecipientField();
    fillSubjectField();
    fillBodyField();
    getCreateLinkButton().click();
    cy.get('[data-test-id="mail-link"]').should('exist');
  })

  it('Copies link to clipboard', () => {
    fillRecipientField();
    fillSubjectField();
    fillBodyField();
    getCreateLinkButton().click();
    cy.contains('Copy').focus().realClick();
    cy.window().then((win) => {
      win.navigator.clipboard.readText().then((text) => {
        expect(text).to.contain('consume?mailcode');
      });
    });
  });

  it('Creates an email with cc and bcc fields', () => {
    fillRecipientField();
    openCcField();
    openBccField();
    fillSubjectField();
    fillBodyField();
    fillCcField();
    fillBccField();
    getCreateLinkButton().click();
    cy.get('[data-test-id="mail-link"]').should('exist');
  });

  it('Expands body field as text expands', () => {
    openCcField();
    openBccField();
    cy.get('TextArea').type('hey your app was helpful to me, thanks!'.repeat(10));
    cy.get('TextArea').should('have.css', 'height', '144px');
  });
})