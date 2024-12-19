type Mods = Record<string, boolean | string>;

export const classNames = (
  className: string,
  mods: Mods,
  additions: string[]
) => {
  return [
    className,
    ...additions,
    ...Object.entries(mods)
      .filter(([classNames, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
