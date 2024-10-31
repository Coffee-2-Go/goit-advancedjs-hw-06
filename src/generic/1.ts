/*
  There is a function getPromise() that returns a promise that is allowed in an arraycontaining
  strings and numbers. Extend this function using generics so that it returns the correct type.
*/

function getPromise<T>(): Promise<T[]> {
  return new Promise((resolve) => {
    resolve(["Text", 50] as T[]);
  });
}

getPromise<string | number>().then((data) => {
  console.log(data);
});

export {};
