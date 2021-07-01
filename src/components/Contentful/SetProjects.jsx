import { useEffect, useState } from 'react';

import { getProjects } from './GetData';

const promise = getProjects();

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((Projects) => {
      setProjects(Projects);
      setLoading(false);
    });
  }, []);

  return [projects, isLoading];
}
