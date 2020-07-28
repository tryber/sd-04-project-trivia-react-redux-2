const addInfo = (index, value) => {
  if (!localStorage[index]) localStorage[index] = JSON.stringify([]);
  const newInfo = value;
  localStorage[index] = JSON.stringify(newInfo);
};

export default addInfo;
