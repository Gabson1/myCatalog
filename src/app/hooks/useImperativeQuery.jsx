import { useQuery } from '@apollo/client';

const useImperativeQuery = (query, options = {}) => {
  const { refetch } = useQuery(query, { skip: true, ...options });

  const imperativelyCallQuery = (variables) => refetch(variables);
  return imperativelyCallQuery;
};

export default useImperativeQuery;
