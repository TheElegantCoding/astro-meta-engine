type StringType = null | string | boolean | undefined;

const joinString = (value: StringType[], separator = ', '): string | undefined => {
  const validStrings = value.filter((element): element is string => { return typeof element === 'string' && element.trim() !== ''; });

  return validStrings.length > 0 ? validStrings.join(separator) : undefined;
};

export { joinString };