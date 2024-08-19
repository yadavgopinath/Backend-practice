const arr=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const transformarray=arr.map(ele=>ele==' '?'empty string':ele);
console.log(transformarray);