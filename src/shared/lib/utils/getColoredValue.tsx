export const getColoredValue = (val: number) => {
  if (val > 0) {
    return <span className="text-green-500">+{val}</span>;
  } else if (val < 0) {
    return <span className="text-red-500">-{val}</span>;
  }
  return <span className="text-typo-secondary">{val}</span>;
};
