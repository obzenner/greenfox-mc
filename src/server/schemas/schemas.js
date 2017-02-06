const { buildSchema } = require('graphql');

module.exports = {
	helloWorld: {
		name: 'helloWorld',
		schema: buildSchema(`
			type Query {
				hello: String
			}
		`)
	}
}