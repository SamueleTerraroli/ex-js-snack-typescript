//gestione di un dato unknown

let data: unknown;
if (typeof data === 'string') {
  console.log(data.toUpperCase());
} else if (typeof data === 'number') {
  console.log(data * 2);
} else if (typeof data === 'boolean') {
  console.log(data ? 'si' : 'no');
} else {
  console.log('tipo non supportato')
}