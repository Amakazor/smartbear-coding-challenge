import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            "@utility": path.resolve(__dirname, "./src/utility/"),
            "@components": path.resolve(__dirname, "./src/components/"),
            "@data": path.resolve(__dirname, "./src/data/"),
        },
    },
    test: {
        env: {
            VITE_API_BASE_URL: "test",
            VITE_API_SCHEMA_PATH: "test",
        },
        coverage: {
            reporter: ["text", "json", "html", "lcov"],
            provider: "istanbul",
            all: true,
            include: ["src/**/*.{ts,tsx,js,jsx}"],
        },
    },
});
