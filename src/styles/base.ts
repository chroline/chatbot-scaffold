import { Theme } from "@mui/joy";

type BaseStyledComponent = (theme: Theme) => object;

export interface BaseStyle {
  chatBox: {
    container: BaseStyledComponent;
    input: BaseStyledComponent;
    sendButton: BaseStyledComponent;
  };
  chatHeader: {
    buttons: BaseStyledComponent;
  };
  chatWindow: {
    inputArea: BaseStyledComponent;
    messagesContainer: BaseStyledComponent;
    wrapper: BaseStyledComponent;
  };
  navbar: {
    container: BaseStyledComponent;
    content: BaseStyledComponent;
    title: BaseStyledComponent;
  };
  emptyState: {
    container: BaseStyledComponent;
  };
}

const baseStyle: BaseStyle = {
  chatBox: {
    container: () => ({}),
    input: () => ({}),
    sendButton: () => ({}),
  },
  chatHeader: {
    buttons: () => ({}),
  },
  chatWindow: {
    inputArea: () => ({}),
    messagesContainer: () => ({}),
    wrapper: () => ({}),
  },
  navbar: {
    container: () => ({}),
    content: () => ({}),
    title: () => ({}),
  },
  emptyState: {
    container: () => ({}),
  },
};

function deepMerge<T extends Record<string, unknown>>(baseStyle1: T, baseStyle2: T): T {
  const mergedStyle: T = { ...baseStyle1 };

  for (const key in baseStyle2) {
    if (Object.prototype.hasOwnProperty.call(baseStyle2, key)) {
      if (
        typeof baseStyle2[key as keyof typeof baseStyle2] === "object" &&
        Object.prototype.hasOwnProperty.call(baseStyle1, key)
      ) {
        mergedStyle[key as keyof T] = deepMerge(
          baseStyle1[key as keyof T] as Record<string, unknown>,
          baseStyle2[key as keyof T] as Record<string, unknown>
        ) as T[keyof T];
      } else {
        mergedStyle[key as keyof typeof mergedStyle] = baseStyle2[key as keyof typeof baseStyle2];
      }
    }
  }

  return mergedStyle;
}

export function extendComponentsStyle(styles: Partial<BaseStyle>) {
  return deepMerge(baseStyle, styles);
}
