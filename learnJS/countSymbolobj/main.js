function count (string) {  
  let count = {};
  string.split('').forEach(el => {
    count[el] ? count[el]++ : count[el] = 1;
  });
  return count;
}