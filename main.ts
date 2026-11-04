import { serveFile } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
    return serveFile(req, "./index.html");
});
import { Builder } from "jsr:fresh@^2.0.0/dev";
import { app } from "./main.ts";

const builder = new Builder();

if (Deno.args.includes("build")) {
  await builder.build({ app });
} else {
  await builder.listen(() => app.handler());
}
