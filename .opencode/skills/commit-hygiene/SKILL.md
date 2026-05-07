---
name: commit-hygiene
description: Commit message and branch naming rules for Lingua sessions
---

Branch names: `lingua/<short-kebab-topic>` (e.g. `lingua/dark-mode`, `lingua/counter-buttons`).

Commit messages: Conventional Commits.

- `feat: add counter component with +/- buttons`
- `fix: counter resets after rerender`
- `style: smooth gradient background`
- `refactor: extract Card into its own file`

Subject line ≤ 72 chars. Body only when the why is non-obvious. No trailing period in subject.

Never:
- Commit `node_modules/` or `dist/`
- Use `git commit -a` without first reviewing `git status`
- Amend commits already pushed
