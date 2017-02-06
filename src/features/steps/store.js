'use strict';

import { expect } from 'chai';

export default function () {
	this.When(/^I pass "([^"]*)"$/, function (schemaName) {
		const store = this.container.get('store');
		store.getSchema(schemaName)
	});

	this.Then(/^I get "([^"]*)" schema object$/, function (value) {
		const store = this.container.get('store');
		const schema = store.getSchema(value);

		expect(schema.name).to.eql(value);
	});
}
