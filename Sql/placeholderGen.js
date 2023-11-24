const generatePlaceholder = (feilds) => {
  let placeholder = [...feilds];
  placeholder.forEach((element, index) => {
    placeholder[index] = ":" + element;
  });
  return placeholder;
};
export default generatePlaceholder;
