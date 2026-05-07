---
name: tailwind-conventions
description: Tailwind usage rules — only apply if the project actually has Tailwind installed
---

Before writing Tailwind classes, verify Tailwind is installed:

- Check `package.json` for `tailwindcss`.
- Check for `tailwind.config.js` or `tailwind.config.ts`.
- Check that `src/index.css` has `@tailwind` directives.

If any are missing, do not write Tailwind classes. Either install it (after asking the user) or use plain CSS.

When Tailwind is present:
- Prefer utility classes over custom CSS for layout and spacing.
- Use semantic colour tokens from `tailwind.config` over raw hex.
- Group related classes: layout, spacing, typography, colours, state.
