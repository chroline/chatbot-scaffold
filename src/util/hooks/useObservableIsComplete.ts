import { useEffect, useState } from "react";

import { Observable } from "rxjs";

const useObservableIsComplete = <T>(observable?: Observable<T>): boolean => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const subscription = observable?.subscribe({
      complete: () => {
        setIsComplete(true);
      },
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [observable]);

  return isComplete;
};

export default useObservableIsComplete;
