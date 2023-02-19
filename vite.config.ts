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
            "@utility": path.resolve(__dirname, "./src/utility/"),
            "@components": path.resolve(__dirname, "./src/components/"),
            "@data": path.resolve(__dirname, "./src/data/"),
            "@context": path.resolve(__dirname, "./src/context/"),
            "@hooks": path.resolve(__dirname, "./src/hooks/"),
        },
    },
    test: {
        env: {
            VITE_API_BASE_URL: "https://base",
            VITE_API_SCHEMA_PATH: "/spec.json",
        },
        coverage: {
            reporter: ["text", "json", "html", "lcov"],
            provider: "istanbul",
            all: true,
            include: ["src/**/*.{ts,tsx,js,jsx}"],
        },
        setupFiles: ["./src/test-setup.ts"],
    },
});
