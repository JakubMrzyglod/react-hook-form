export type InputWrapperProps<T extends ComponentProps = ComponentProps> = {
  Component: (props: T) => JSX.Element;
} & T & { sizes?: Sizes };

export type InputProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

export type ComponentProps = {
  error?: string;
} & InputProps;

export type InputGroupProps = InputProps & { sizes?: Sizes };

export type Sizes = {
  xs?: Size;
  sm?: Size;
  lg?: Size;
};

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
