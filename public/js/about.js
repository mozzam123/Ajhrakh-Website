window.tailwind.config = {
  darkMode: "class",
  theme: {
    fontFamily: {
      heading: [
        "DM Sans",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      body: [
        "DM Sans",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      borderRadius: {
        global: "5px",
      },
      colors: {
        primary: {
          50: "#f8f5ff",
          100: "#eee6fe",
          200: "#ddcefd",
          300: "#c1a6fc",
          400: "#844df9",
          500: "#4d07e4",
          600: "#3705a3",
          700: "#280477",
          800: "#170245",
          900: "#0c0123",
          950: "#070114",
          DEFAULT: "#570df8",
        },
        secondary: {
          50: "#fff5fd",
          100: "#ffe6f9",
          200: "#fecdf3",
          300: "#fea4e9",
          400: "#fd49d3",
          500: "#e802b3",
          600: "#a70280",
          700: "#79015d",
          800: "#470136",
          900: "#23001b",
          950: "#140010",
          DEFAULT: "#f002b8",
        },
      },
    },
  },
  plugins: [
    window.tailwind.plugin.withOptions(({ prefix = "ui" } = {}) => {
      return ({ addVariant }) => {
        for (let state of [
          "open",
          "checked",
          "selected",
          "active",
          "disabled",
        ]) {
          addVariant(`${prefix}-${state}`, [
            `&[data-headlessui-state~="${state}"]`,
            `:where([data-headlessui-state~="${state}"]) &`,
          ]);

          addVariant(`${prefix}-not-${state}`, [
            `&[data-headlessui-state]:not([data-headlessui-state~="${state}"])`,
            `:where([data-headlessui-state]:not([data-headlessui-state~="${state}"])) &:not([data-headlessui-state])`,
          ]);
        }
      };
    }),
  ],
};
