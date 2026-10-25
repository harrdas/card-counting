export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.info(
      "[runtime-version]",
      JSON.stringify({
        node: process.version,
        brotli: process.versions.brotli,
      })
    );
  }
}
