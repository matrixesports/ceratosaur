# Ceratosaur ☄️

Ceratosaur is a Wrapper for interact with the [Ceramic Network](https://ceramic.network) HTTP API

Get it from 🦕 [**deno.land**](https://deno.land/x/ceratosaur) or [**nest.land**](https://nest.land/package/ceratosaur) 🥚

## Example

Ceratosaur is built in a way that you can use as you like, you can use the base functions, specify the database URL, or use the `ceramic` function.

**Get Stream**

With `ceramic`

```ts
import { ceramic } from "https://deno.land/x/ceratosaur/mod.ts";

const database = ceramic("http://localhost:7007");

// this automatically concatenates the url with /api/v0/streams
ceramic.getStream(
	"k2t6wyfsu4pg2qvoorchoj23e8hf3eiis4w7bucllxkmlk91sjgluuag5syphl",
);
```

with `getStream` function

```ts
import { getStream } from "https://deno.land/x/ceratosaur/mod.ts";

// you need specify /api/v0/streams
getStream(
	"http://localhost:7007/api/v0/streams",
	"k2t6wyfsu4pg2qvoorchoj23e8hf3eiis4w7bucllxkmlk91sjgluuag5syphl",
);
```

**Create stream**

With `ceramic`

```ts
import { ceramic } from "https://deno.land/x/ceratosaur/mod.ts";

const database = ceramic("http://localhost:7007");

const awesomeStream = ceramic.createStream();
console.log(awesomeStream.streamId);
```

with `createStream` function

```ts
import { createStream } from "https://deno.land/x/ceratosaur/mod.ts";

const awesomeStream = createStream("http://localhost:7007/api/v0/streams");
console.log(awesomeStream.streamId);
```

## Useful Links

[**Documentation**](https://doc.deno.land/https://deno.land/x/ceratosaur/mod.ts)
