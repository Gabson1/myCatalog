import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../catalog.css';
import {SingleCatalog} from "./singleCatalog";

export const CatalogItems = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      { data.hits.length === 0 ?
        <div>
          <p>There seems to be nothing here yet</p>
          <p>Click the button on the left to create your first table</p>
        </div>
        : data.hits.map(item => (
          <SingleCatalog key={item} />
        ))
      }
    </div>
  );
};
