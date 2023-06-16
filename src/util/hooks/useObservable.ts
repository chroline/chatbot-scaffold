import { useEffect, useState } from "react";

import { Observable, Subscription } from "rxjs";

const useObservable = <T>(observable$: Observable<T>, defaultValue: T | null = null): T | null => {
  const [value, setValue] = useState<T | null>(defaultValue);

  useEffect(() => {
    let subscription: Subscription;

    const subscribe = () => {
      subscription = observable$.subscribe(data => {
        setValue(data);
      });
    };

    subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [observable$]);

  return value;
};

export default useObservable;
