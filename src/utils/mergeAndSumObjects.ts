const mergeAndSumObjects = (
  a: Record<string, number>,
  b: Record<string, number>
) => {
  const result = { ...a };
  for (const [key, value] of Object.entries(b)) {
    result[key] = (result[key] || 0) + value;
  }

  return result;
};

export default mergeAndSumObjects;
