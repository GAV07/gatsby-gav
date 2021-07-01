import { useEffect, useState } from 'react';
import { getSingleProject } from './GetData';

export default function setSingleProject(slug) {
  const promise = getSingleProject(slug);

  const [project, setProject] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((result) => {
      setProject(result[0].fields);
      setLoading(false);
    });
  }, [promise]);

  return [project, isLoading];
}
