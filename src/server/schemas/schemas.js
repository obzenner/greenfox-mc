const { graphql, buildSchema } = require('graphql');

module.exports = {
	helloWorld: {
		schema: buildSchema(`
			type Query {
				hello: String
			}
		`),
		async query(query) {
			return await graphql(this.schema, query);
		}
	}
}