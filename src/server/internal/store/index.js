import schemas from '../../schemas/schemas';

function Store() {

  function getSchema(schemaName) {
    return schemas[schemaName];
  }

  return Object.freeze({
    getSchema
  });
}

module.exports = Store;
