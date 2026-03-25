import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Umbraon",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "an4k4pe.github.io/Umbraon",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
      theme: {
        fontOrigin: "googleFonts",
        cdnCaching: true,
        typography: {
          header: "Cinzel",        // font romano/fantasy per i titoli
          body: "EB Garamond",     // serif elegante per il testo
          code: "IBM Plex Mono",
        },
        colors: {
          lightMode: {
            light: "#1a1a2e",       // sfondo quasi nero con tinta viola
            lightgray: "#2d2b55",   // viola scuro per card/bordi
            gray: "#6b6a9e",        // viola medio
            darkgray: "#c9b8e8",    // viola chiaro per testo secondario
            dark: "#f0e6c8",        // oro pallido per testo principale
            secondary: "#c9a227",   // oro per link e accenti
            tertiary: "#8b5cf6",    // viola brillante per hover
            highlight: "rgba(201, 162, 39, 0.15)", // glow oro
          },
          darkMode: {
            light: "#0f0f1a",       // sfondo ancora più scuro
            lightgray: "#1e1b3a",
            gray: "#4a4880",
            darkgray: "#b8a8d8",
            dark: "#f0e6c8",
            secondary: "#c9a227",
            tertiary: "#8b5cf6",
            highlight: "rgba(201, 162, 39, 0.15)",
          }
        }
      },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.FiltroUmbraon()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
