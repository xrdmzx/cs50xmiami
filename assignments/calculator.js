function add(a, b) {
  return a+ b;
}
// module.exports = add;

function del(a, b) {
  return a- b;
}
// old syntax
module.exports = { add: add, del:del };

//new syntax
// module.exports = { add , del };
