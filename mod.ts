export async function determineOpenCommand(): Promise<string> {
    switch (Deno.build.os) {
      case "windows":
        return "explorer.exe";
      case "darwin":
        return "open";
      case "linux":
        if ((await Deno.permissions.query({ name: "env" })) && Deno.env.get("WSL_DISTRO_HOME")) {
          // is WSL/WSL2
          return "explorer.exe";
        }

        // TODO: sometimes you might want sensible-browser? hard to say.
        return "xdg-open";
    }
}

export async function openAWebsite(url: string) {
  return Deno.run({
    cmd: [await determineOpenCommand(), url],
  });
}
