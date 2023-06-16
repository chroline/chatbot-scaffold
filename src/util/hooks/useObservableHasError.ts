import { useEffect, useState } from "react";

import { Observable } from "rxjs";

const useObservableHasError = <T>(observable: Observable<T>): boolean => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const subscription = observable.subscribe({
      error: () => {
        setHasError(true);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [observable]);

  return hasError;
};

export default useObservableHasError;
