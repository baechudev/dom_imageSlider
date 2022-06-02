function f1(n) {
  return new Promise((r1, r2) => {
    setTimeout(() => {
      console.log('멍멍이' + n);
      r1();
    }, 1000 * n);
  });
}

f1(1)
  .then(() => {
    f1(5);
    console.log(2);
  })
  .then(() => {
    f1(3);
    console.log(3);
  })
  .then(() => {
    f1(4);
    console.log(4);
  })
  .catch(() => {
    console.log('error');
  });
