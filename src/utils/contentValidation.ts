function nameValidation(content: string) {
  if (content.length > 17) {
    content = content.substring(0, 16) + "...";
  }
  return content;
}

function contentValidation(content: string) {
  if (content.length > 15) {
    content = content.substring(0, 14) + "...";
  }
  return content;
}

function dateLengthValidation(content: string) {
  if (content.length > 22) {
    content = content.substring(0, 22) + "...";
  }
  return content;
}

export { nameValidation, contentValidation, dateLengthValidation };
