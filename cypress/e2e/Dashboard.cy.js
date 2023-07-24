describe('App', () => {
  beforeEach(() => {
    cy.fixture('tricks').then((tricks) => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', tricks).as('getTricks');
    });

    cy.visit('http://localhost:3000/');
  });
  it('displays the header "Sick Trick Wish List"', () => {
    cy.contains('h1', 'Sick Trick Wish List');
  });
  it('displays Trick 1 correctly', () => {
    cy.get('ul > :nth-child(1)').within(() => {
      cy.contains('h3', 'Trick 1');
      cy.contains('p', 'Stance: regular');
      cy.contains('p', 'Obstacle: Flatground');
      cy.contains('p', 'Tutorial:');
      cy.get('a').should('have.attr', 'href', 'https://www.youtube.com/watch?v=trick1');
    });
  });

  it('displays Trick 2 correctly', () => {
    cy.get('ul > :nth-child(2)').within(() => {
      cy.contains('h3', 'Trick 2');
      cy.contains('p', 'Stance: switch');
      cy.contains('p', 'Obstacle: Ledge');
      cy.contains('p', 'Tutorial:');
      cy.get('a').should('have.attr', 'href', 'https://www.youtube.com/watch?v=trick2');
    });
  });
 it('displays the "Add New Trick" form correctly', () => {
    cy.get('form').within(() => {
      cy.contains('h2', 'Add New Trick');
      cy.contains('label', 'Stance:');
      cy.contains('label', 'Name:');
      cy.contains('label', 'Obstacle:');
      cy.contains('label', 'Tutorial:');
      cy.contains('button', 'SEND IT');
    });
  });
  it('can fill out the "Add New Trick" form and submit it', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/tricks', { fixture: 'newTrickResponse.json' }).as('postTrick');

    cy.get('form').within(() => {
      cy.get('input[name="name"]').should('be.visible').type('New Trick Name');
      cy.get('input[name="tutorial"]').type('https://www.youtube.com/watch?v=newtrick');
    });

    cy.get('select[name="stance"]').then((selectElement) => {
      selectElement.val('Regular');
    });
    cy.get('select[name="obstacle"]').then((selectElement) => {
      selectElement.val('Flatground');
    });

    cy.get('form').submit(); 

    cy.wait('@postTrick').then((interception) => {
      const newTrick = interception.response.body;
      expect(newTrick).to.have.property('id');
      expect(newTrick.stance).to.equal('Regular');
      expect(newTrick.name).to.equal('New Trick Name');
      expect(newTrick.obstacle).to.equal('Flatground');
    });
    cy.contains('p', 'Stance: switch');
    cy.contains('p', 'Obstacle: Flatground');
    
  });
});