const desc = { name: "read" } as const;

console.log(Deno.permissions.query(desc));

const status = await Deno.permissions.request(desc);

console.log(Deno.permissions.query(desc));

if (status.state === "granted") {
  const results = await Deno.readDir("../");
  for await (const result of results) {
    console.log(result);
  }
} else {
  console.log("This program requires the 'read' permission");
}
