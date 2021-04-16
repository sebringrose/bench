const body = new TextEncoder().encode("Hello, Bench!");

for await (const conn of Deno.listen({ port: 8000 })) {
  (async () => {
    for await (const { respondWith } of Deno.serveHttp(conn)) {
      respondWith(new Response(body));
    }
  })();
}
