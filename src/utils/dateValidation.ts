function dateValidation(content: string) {
  const regex =
    /^(0?[1-9]|[12][0-9]|3[01])[\/\-\.\/\\](0?[1-9]|1[012])[\/\-\.\/\\]\d{4}$/;
  const splittedContent = content.split(/,| /);
  const arrOfDate = splittedContent.map((el) => el.match(regex));
  let dates = "";
  let space = "";
  arrOfDate.forEach((element) => {
    if (element !== null) {
      element.forEach((el) => {
        if (
          el !== undefined &&
          el !== null &&
          el.length >= 4 &&
          el.length <= 10
        ) {
          dates += space + el;
          space = ", ";
        }
      });
    }
  });
  return dates;
}

export default dateValidation;
