let encode = (strsArray) => {
  let result = "";
  let str;
  for (let i = 0, len = strsArray.length; i < len; i++) {
    str = strsArray[i];
    result += `S${str.length}E${str}`;
  }
  return result;
};

let decode = (str) => {
  let result = [];
  for (let i = 0, len = str.length; i < len; ) {
    if (str[i] === "S") {
      let len = "";
      i++;
      while (str[i] !== "E") {
        len += str[i];
        i++;
      }
      len = parseInt(len);
      result.push(str.slice(i + 1, i + 1 + len));
      i = i + 1 + len;
    }
  }
  return result;
};
