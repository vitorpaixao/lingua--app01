---
name: vite-component-pattern
description: Conventions for adding new React components in this Vite + TS project
---

When adding a new component:

1. Place it in `src/components/<ComponentName>.tsx`.
2. Export as default.
3. Type props with an explicit `interface <ComponentName>Props`.
4. Use functional components and hooks.
5. Co-locate styles as `<ComponentName>.module.css` next to the component.

Avoid:
- Class components
- Inline `style={{...}}` for anything beyond one-off prototypes
- Default-exporting a function declaration without naming it
