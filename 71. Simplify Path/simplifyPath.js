/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const stack = [];
  const pathArr = path.split('/');

  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i] === '..') {
      stack.pop()
    } else if (pathArr[i] && pathArr[i] !== '.') {
      stack.push(pathArr[i]);
    }
  }

  return '/' + stack.join('/');
};


console.log(simplifyPath('/home/')); // '/home'
