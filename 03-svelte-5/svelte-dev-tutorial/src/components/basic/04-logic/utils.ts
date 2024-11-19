export async function roll(): Promise<number> {
  // Fetch a random number between 0 and 6
  // (with a delay, so that we can see it)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulate a flaky network
      if (Math.random() < 0.3) {
        reject(new Error("Request failed"));
      }

      resolve(Math.ceil(Math.random() * 6));
    }, 1000);
  });
}
