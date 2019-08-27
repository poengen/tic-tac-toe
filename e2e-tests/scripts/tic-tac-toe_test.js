/* eslint-disable no-undef */
Feature('Tic tac-toe test.js');

const statusId = { css: '#test-id-status-1' };

function squareId(i) {
	return { css: '#test-id-square-' + i.toString() };
}

function movesId(i) {
	return { css: '#id' + i.toString() };
}

Scenario('test something', (I) => {
	I.amOnPage('/');
	I.see('Next player: X', statusId);
	I.click(squareId(0));
	I.see('Next player: O', statusId);
	I.click(squareId(1));
	I.click(squareId(4));
	I.click(squareId(5));
	I.see('Go to move #4', movesId(4));
	I.click(squareId(8));
	I.see('Winner: X', statusId);
	I.dontSee('Winner: O', statusId);
	// pause();
});

Scenario('test something', (I) => {
	I.amOnPage('/');
	I.see('Next player: X', statusId);
	I.click(squareId(0));
	I.see('Next player: O', statusId);
	I.click(squareId(1));
	I.click(squareId(8));
	I.click(squareId(4));
	I.see('Go to move #4', movesId(4));
	I.click(squareId(6));
	I.click(squareId(7));
	I.see('Winner: O', statusId);
	I.dontSee('Winner: X', statusId);
});
