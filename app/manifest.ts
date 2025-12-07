import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Agrinaya",
    short_name: "Agrinaya",
    description:
      "AI-powered farming assistant that gives personalized crop care recommendations, weather-based insights, and disease detection to help farmers grow more efficiently.",
    start_url: "/",
    display: "standalone",
    background_color: "oklch(94.3% 0.029 294.588)",
    theme_color: "oklch(94.3% 0.029 294.588)",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "1024x1024",
        src: "maskable_icon.png",
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "48x48",
        src: "maskable_icon_x48.png",
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "72x72",
        src: "maskable_icon_x72.png",
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "96x96",
        src: "maskable_icon_x96.png",
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "128x128",
        src: "maskable_icon_x128.png",
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "192x192",
        src: "maskable_icon_x192.png",
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "384x384",
        src: "maskable_icon_x384.png",
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "maskable_icon_x512.png",
        type: "image/png",
      },
    ],
  };
}
