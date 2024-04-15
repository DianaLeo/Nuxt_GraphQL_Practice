
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3001/api/graphql",
  documents: "./**/*.{ts,tsx,gql,graphql}",
  generates: {
    "server/generated/generated.ts":{
      plugins: ["typescript","typescript-operations","typescript-vue-apollo"]
    }
  }
};

export default config;
