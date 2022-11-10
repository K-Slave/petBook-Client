function setterError<T>(
  atom: T,
  callback: (value: React.SetStateAction<boolean>) => void
) {
  callback(true);
  return {
    ...atom,
  };
}

function anythingElse() {
  return {};
}

export { setterError, anythingElse };
