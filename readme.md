# Ceratosaur ☄️

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-black.svg?logo=deno&labelColor=black)](https://deno.land/x/ceratosaur) [![nest.land](https://nest.land/badge-block.svg)](https://nest.land/package/ceratosaur)

Wrapper for interact with the [Ceramic Network](https://ceramic.network) HTTP
API

[**Documentation**](https://doc.deno.land/https://x.nest.land/ceratosaur@1.0.0-beta-3/src/mod.ts/)

## Example

You can use the function `ceramic` and set your ceramic database url and get
stream info with the `getStream` method

```ts
import { ceramic } from "https://x.nest.land/ceratosaur@1.0.0-beta-3/src/mod.ts";

const database = ceramic(
	"http://localhost:7007",
);

// this automatically concatenates the url with /api/v0/streams
ceramic.getStream(
	"k2t6wyfsu4pg2qvoorchoj23e8hf3eiis4w7bucllxkmlk91sjgluuag5syphl",
);
```

or use the `getStream` function

```ts
import { getStream } from "https://x.nest.land/ceratosaur@1.0.0-beta-3/src/mod.ts";

// you need specify /api/v0/streams
getStream(
	"http://localhost:7007/api/v0/streams",
	"k2t6wyfsu4pg2qvoorchoj23e8hf3eiis4w7bucllxkmlk91sjgluuag5syphl",
);
```
