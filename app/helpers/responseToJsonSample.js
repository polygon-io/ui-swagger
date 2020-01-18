export const responseToJsonSample = response => {
  const schema = response.get("schema");
  console.log("SCHEMA", schema);
  const ref = schema.get("$ref");
  const type = schema.get("type");
  const properties = schema.get("properties");
  console.log("TYPE", type || ref);
  console.log("EXAMPLE", properties);
  return { foo: "bar " };
};
