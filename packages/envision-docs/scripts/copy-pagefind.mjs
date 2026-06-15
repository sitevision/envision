import { cp, rm } from 'node:fs/promises';

await rm('./static/pagefind', { recursive: true, force: true });
await cp('../../docs/pagefind', './static/pagefind', { recursive: true });
