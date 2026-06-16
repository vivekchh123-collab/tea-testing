import { serve } from "bun"; // ✅ Fixed: lowercase "serve", not "Serve"

serve({
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("hello Ice tea", { status: 200 });
    } else if (url.pathname === "/ice-tea") {
      return new Response("Ice tea is good option", { status: 200 });
    } else {
      return new Response("404 not found", { status: 404 });
    }
  },
  port: 7000,
  hostname: "127.0.0.1",
});
