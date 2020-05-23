import preprocess from "svelte-preprocess";

const mode = process.env.NODE_ENV;
const dev = mode === "development";

export default {
	preprocess: preprocess({
		typescript: {
			// This returns compilation times back to what they're like without TypeScript
			// And still type checks for production builds
			// Use IDE tools for type checking during development instead
			transpileOnly: dev,
		},
	}),
}
