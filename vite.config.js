import { defineConfig } from "vite";
import JavaScriptObfuscator from "javascript-obfuscator";

function obfuscateProductionBundles() {
  return {
    name: "obfuscate-production-bundles",
    apply: "build",
    generateBundle(_options, bundle) {
      for (const output of Object.values(bundle)) {
        if (output.type !== "chunk" || !output.fileName.endsWith(".js")) continue;
        const result = JavaScriptObfuscator.obfuscate(output.code, {
          compact: true,
          stringArray: true,
          stringArrayThreshold: 0.65,
          rotateStringArray: true,
          controlFlowFlattening: false,
          deadCodeInjection: false,
          renameGlobals: false,
          selfDefending: false,
          sourceMap: false
        });
        output.code = result.getObfuscatedCode();
      }
    }
  };
}

export default defineConfig({
  plugins: [obfuscateProductionBundles()],
  build: {
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]"
      }
    }
  }
});
