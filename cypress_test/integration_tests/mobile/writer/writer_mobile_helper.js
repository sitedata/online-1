/* global cy require*/

var helper = require('../../common/helper');
var mobileHelper = require('../../common/mobile_helper');

function selectAllMobile() {
	cy.log('Select all via hamburger menu - start.');

	// Remove selection if exist
	helper.typeIntoDocument('{downarrow}');
	cy.get('.leaflet-selection-marker-start')
		.should('not.exist');

	mobileHelper.selectHamburgerMenuItem(['Edit', 'Select All']);

	cy.get('.leaflet-marker-icon')
		.should('exist');

	cy.log('Select all via hamburger menu - end.');
}

function getCursorPos(offsetProperty, aliasName) {
	helper.initAliasToNegative(aliasName);

	cy.get('.blinking-cursor')
		.invoke('offset')
		.its(offsetProperty)
		.as(aliasName);

	cy.get('@' + aliasName)
		.should('be.greaterThan', 0);
}

module.exports.getCursorPos = getCursorPos;
module.exports.selectAllMobile = selectAllMobile;
