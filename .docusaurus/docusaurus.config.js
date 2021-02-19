export default {
  "title": "Packager",
  "tagline": "the open source initiative.",
  "url": "https://starco.netlify.app",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "packagerops",
  "projectName": "docs",
  "themeConfig": {
    "navbar": {
      "title": "Packager Docs",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/packagerops/docs",
          "label": "GitHub",
          "position": "right"
        },
        {
          "href": "https://github.com/packagerops/docs",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Foundation",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/"
            },
            {
              "label": "Second Doc",
              "to": "docs/info/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Forums",
              "href": "https://packager.uni.rf.gd"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/srhxjdMdYj"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/packagerops"
            }
          ]
        }
      ],
      "copyright": "Copyright © Cofe Foundation - Packager, Packager Code, Packager Woodmark, and the Packager Star are trademarks of Cofe Foundation. "
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/jro_k/Documents/GitHub/packager/stardocs/sidebars.js",
          "editUrl": "https://github.com/packagerops/docs/edit/main/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/packagerops/docs/edit/main/"
        },
        "theme": {
          "customCss": "/Users/jro_k/Documents/GitHub/packager/stardocs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};