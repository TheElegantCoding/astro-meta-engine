const removeTrailingSlash = (url: URL | string) => {
  return url.toString().replace(/\/$/v, '');
};

const buildUrl = (base: URL | string, path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return removeTrailingSlash(path);
  }

  const baseUrl = removeTrailingSlash(new URL(base));
  const cleanPath = path.replace(/^\//, '');
  return `${baseUrl}/${cleanPath}`;
};

export { buildUrl, removeTrailingSlash };