# `open-a-website` #
This module lets you open the default browser at a specified URL.

- Works on Windows, Mac, and (when possible) Linux.
  - Works on WSL/Windows, too, if you pass `--allow-env` (needs to read `WSL_DISTRO_NAME`).

## Usage ##
```ts
import { openAWebsite } from "https://deno.land/x/open-a-website/mod.ts";

await openAWebsite("https://ed0.is");
```

This module requires `--allow-run` and `--allow-env` (for WSL2 detection). You can [scope these permissions](https://deno.land/manual/getting_started/permissions) to this module just like any other Deno module.
