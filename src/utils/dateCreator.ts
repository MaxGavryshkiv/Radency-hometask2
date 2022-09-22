const getDate = () => {
  let date = new Date();
  let dateOfCreation = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return dateOfCreation;
};

export default getDate;
