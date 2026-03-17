// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: "static",
    base: "/gra126/kiko_rg/uniko/",
    vite: {
        resolve: {
            alias: {
                "@": "/src",
            },
        },
    }
});
