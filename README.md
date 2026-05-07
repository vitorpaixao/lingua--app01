# lingua-bootstrap

Bootstrap template for [Lingua](https://github.com/) sessions. Read-only source — do not push directly.

## What this is

Lingua clones this repo into `/project` inside its Docker container, then:

1. Renames the `origin` remote to `bootstrap` (read-only, push disabled).
2. Adds your target repo as the new `origin`.
3. Starts an OpenCode session with the agents, skills, and MCP config from `.opencode/`.

The result is a running Vite + React + TypeScript app that OpenCode can edit during a session, with changes pushed to your own repo.

## Layout

```
.
├── src/               React + TS source (edit this during sessions)
├── public/            Static assets
├── .opencode/
│   ├── prompts/       system.txt — loaded by opencode.json
│   ├── agents/        frontend-builder, git-helper subagents
│   ├── skills/        vite-component-pattern, tailwind-conventions, commit-hygiene
│   └── tools/         drop custom OpenCode tools here
├── opencode.json      OpenCode config (model, MCP, agents)
├── vite.config.ts     Serves on 0.0.0.0:3000 with polling HMR
└── package.json       React 19 + Vite 8 + TypeScript ~6
```

## Customising for all future sessions

Edit `.opencode/` in this repo, then push. Every new Lingua session that clones this bootstrap picks up the changes automatically.

## Upgrading an existing session

```sh
git fetch bootstrap
git merge bootstrap/main
```
