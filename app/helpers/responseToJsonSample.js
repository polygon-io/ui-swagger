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
  if (schema.type === "integer") return 0;
  if (schema.type === "number") return 0.0;
};

export const responseToJsonSample = response => {
  return schemaToJSON(response);
};
