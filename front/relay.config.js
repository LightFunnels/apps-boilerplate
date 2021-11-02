module.exports = {
  src: "./src",
  schema: "./src/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  extensions: ['tsx', 'jsx', 'js', 'ts'],
  language: 'typescript',
  customScalars:{}
}
