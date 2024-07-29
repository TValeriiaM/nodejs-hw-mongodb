const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const type = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (type(contactType)) return contactType;
};

function parseIsFavourite(isFavourite) {
  const booleans = {
    true: true,
    false: false,
  };

  if (!booleans) return;

  if (typeof booleans[isFavourite] === 'boolean') {
    return booleans[isFavourite];
  } else {
    return isFavourite;
  }
}

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
