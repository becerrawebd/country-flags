const saveToLocalStorage = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log(error);
  }
};

const getFromLocalStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState !== null ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.log(error);
  }
};

export { saveToLocalStorage, getFromLocalStorage };
