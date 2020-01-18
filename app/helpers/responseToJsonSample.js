const schemaToJSON = schema => {
  if (schema.example) {
    return schema.example;
  }
  if (schema.properties) {
    const output = {};
    for (const property in schema.properties) {
      if (schema.properties.hasOwnProperty(property)) {
        output[property] = schemaToJSON(schema.properties[property]);
      }
    }
    return output;
  }
  if (schema.items) {
    const output = {};
    for (const property in schema.items.properties) {
      if (schema.items.properties.hasOwnProperty(property)) {
        output[property] = schemaToJSON(schema.items.properties[property]);
      }
    }
    return [output];
  }
};

export const responseToJsonSample = response => {
  return schemaToJSON(response);
};
