import { ApolloClient, ApolloLink } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

import { getAuthClient } from './Auth';
import { getConfig } from './configProvider';

let client = null;

export const getClient = () => {
  if (client) {
    return client;
  }

  const config = getConfig();
  const authClient = getAuthClient();

  const addAuthHeaderLink = setContext((_, { headers }) => new Promise((success) => {
    const idToken = authClient.getIdToken();
    return idToken
      ? success({ headers: { ...headers, Authorization: `Bearer ${idToken}` } })
      : success();
  }));

  const addTanHeaderLink = setContext((_, previousContext) => {
    const { tan } = previousContext;
    return tan
      ? { headers: { ...previousContext.headers, 'x-tan': tan } }
      : previousContext;
  });

  const addAdditionalHeadersLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      'x-timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  }));

  const uploadLink = createUploadLink({
    uri: config.graphql.httpEndpoint,
  });

  const finalLink = ApolloLink.from([
    addAuthHeaderLink,
    addTanHeaderLink,
    addAdditionalHeadersLink,
    uploadLink]);

  client = new ApolloClient({
    link: finalLink,
    cache: new InMemoryCache(),
  });

  return client;
};

export default getClient;
