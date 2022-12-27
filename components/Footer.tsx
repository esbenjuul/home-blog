// Copyright 2022 the Deno authors. All rights reserved. MIT license.

import { GitHub } from "./IconGitHub.tsx";

export function Footer({ siteName }: { siteName: string }) {
  return (
    <footer class="py-10 text-lg">
      <div class="max-w-screen-lg mx-auto flex items-center justify-between">
        <span>
          <a class="italic" href="/">{siteName}</a>
        </span>
      </div>
    </footer>
  );
}
