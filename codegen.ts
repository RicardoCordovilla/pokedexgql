import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  schema: [
    'https://graphql-pokemon2.vercel.app/',
  ],
  documents: ['./graphql/**/*.graphql'],
  generates: {
    './src/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        gqlTagName: 'gql',
      },
    },
  },
};

export default config;