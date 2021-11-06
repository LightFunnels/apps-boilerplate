module.exports = {
  src: "./assets/js",
  schema: "./assets/js/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  extensions: ['tsx', 'jsx', 'js', 'ts'],
  language: 'typescript',
  customScalars:{
    Email: 'string',
    TimeStamp: 'string',
    Phone: 'string',
    FormFields: 'object',
    StepBody: 'BuilderNode',
    StepSettings: 'StepSettings',
    WebhookSettings: 'WebhookSettings',
  }
}
