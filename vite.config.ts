import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            "@utility": path.resolve(__dirname, "./src/utility/"),
            "@components": path.resolve(__dirname, "./src/components/"),
            "@data": path.resolve(__dirname, "./src/data/"),
        },
    },
});
