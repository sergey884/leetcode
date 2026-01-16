function simplifyPath(path: string): string {
  const stack: string[] = [];
  const pathArr: string[]  = path.split('/');

  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i] === '..') {
        stack.pop();
    } else if (pathArr[i] && pathArr[i] !== '.') {
        stack.push(pathArr[i]);
    }
  }

  return '/' + stack.join('/');
};


console.log(simplifyPath('/home/')); // '/home'
