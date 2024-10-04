/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", メイリオ, monospace',
    },
    extend: {
      borderColor: {
        DEFAULT: 'rgb(var(--border-surface))',
        muted: 'rgb(var(--border-muted))',
      },
      ringColor: {
        DEFAULT: 'rgb(var(--border-surface))',
        muted: 'rgb(var(--border-muted))',
      },
      divideColor: {
        DEFAULT: 'rgb(var(--border-surface))',
        muted: 'rgb(var(--border-muted))',
      },
      outlineColor: {
        DEFAULT: 'rgb(var(--border-surface))',
        muted: 'rgb(var(--border-muted))',
      },
      colors: {
        background: 'rgb(var(--background))',
        surface: 'rgb(var(--surface))',
        panel: 'rgb(var(--panel))',

        foreground: 'rgb(var(--foreground))',
        neutral: 'rgb(var(--neutral))',

        success: {
          50: '#eefff4',
          100: '#d7ffe8',
          200: '#b1ffd2',
          300: '#75ffb0',
          400: '#54f89b',
          500: '#07e066',
          600: '#00ba51',
          700: '#039243',
          800: '#097238',
          900: '#0a5d31',
          950: '#003519',
        },
        warning: {
          50: '#fef9ec',
          100: '#fdedc8',
          200: '#fad98d',
          300: '#f7c052',
          400: '#f5a524',
          500: '#ef8511',
          600: '#d3620c',
          700: '#af430e',
          800: '#8e3412',
          900: '#752c12',
          950: '#431505',
        },
        error: {
          50: '#fff0f1',
          100: '#ffe2e3',
          200: '#ffc9cf',
          300: '#ff9ca7',
          400: '#ff657a',
          500: '#ff3050',
          600: '#f3123f',
          700: '#cd0330',
          800: '#ab0631',
          900: '#920930',
          950: '#520014',
        },
      },
    },
  },
};
