const formatDate = (date: Date | string) => {
  return date instanceof Date ? date.toISOString() : date;
};

export { formatDate };