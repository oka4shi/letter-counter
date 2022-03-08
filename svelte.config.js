import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter({
            out: "build",
            precompress: false,
            env: {
                path: "SOCKET_PATH",
                host: "HOST",
                port: "PORT",
                origin: "ORIGIN",
                headers: {
                    protocol: "PROTOCOL_HEADER",
                    host: "HOST_HEADER",
                },
            },
        }),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",

        prerender: {
            default: true,
        },
    },
};

export default config;
