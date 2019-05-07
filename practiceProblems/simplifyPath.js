/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];
  let paths = path.split("/");

  for (let i = 0; i < paths.length; i++) {
    if (paths[i] === "..") {
      if (stack.length) {
        stack.pop();
      }

    } else if (paths[i] !== "." && paths[i] !== "") {
      stack.push(paths[i]);
    }
  }

  let res = "";
  while (stack.length > 0) {
    res = "/" + stack.pop() + res;
  }
  if (res.length === 0) {
    return "/"
  }
  return res;
};

console.log(simplifyPath('/a/./b/../../c/'));