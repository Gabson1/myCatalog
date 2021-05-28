import React, { useState } from 'react';
import { getAuthClient } from '.';

function useAuthClient() {
  const internalAuthClient = getAuthClient();
  const [authClient] = useState(internalAuthClient);
  return authClient;
}

// only here for backwards compatibility with Processable component and other classes
// use hook above whenever possible!
export const withAuthClient = (Component) => (props) => {
  const authClient = useAuthClient();

  return <Component authClient={authClient} {...props} />;
};

export default useAuthClient;
