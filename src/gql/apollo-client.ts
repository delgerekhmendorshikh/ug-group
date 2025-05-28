import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        "erxes-app-token": process.env.NEXT_PUBLIC_ERXES_APP_TOKEN,
      },
    });
    return forward(operation);
  });

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_ERXES_API_URL,
    credentials: "include",
  });

  return new ApolloClient({
    cache: new InMemoryCache({
      addTypename: false,
    }),
    link: concat(authLink, httpLink),
  });
});
