const saveToken = (index, value) => {
  // const jsonIndex = JSON.stringify(index)
  if (!localStorage[index]) localStorage[index] = JSON.stringify([]);
  // const currInfo = JSON.parse(localStorage[index])
  const newInfo = value;
  localStorage[index] = JSON.stringify(newInfo);
};

export default saveToken;
