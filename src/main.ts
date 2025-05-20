//gestione di un dato unknown

let data: unknown;
if (typeof data === 'string') {
  console.log(data.toUpperCase());
} else if (typeof data === 'number') {
  console.log(data * 2);
} else if (typeof data === 'boolean') {
  console.log(data ? 'si' : 'no');
} else if (data === null) {
  console.log('il dato è vuoto');
} else if (Array.isArray(data)) {
  console.log(data.length);
} else if (data instanceof Promise) {
  data.then((allert) => console.log(allert))
} else {
  console.log('tipo non supportato')
}