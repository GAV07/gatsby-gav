import { useEffect, useState } from "react";

import { getSingleProject } from "./GetData";

export default function useSinglePost(title) {
  const promise = getSingleProject(title);

  const [project, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then(result => {
      setPost(result[0].fields);
      setLoading(false);
    });
  }, [promise]);

  return [project, isLoading];
}
