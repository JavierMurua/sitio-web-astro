/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Le decimos a TS cómo tipar los imports de SVG
declare module '*.svg' {
  const metadata: import('astro').ImageMetadata;
  export default metadata;
}
