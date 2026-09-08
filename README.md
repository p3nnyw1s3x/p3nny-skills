# qwen-optimize

Operating discipline for local, self-hosted models in the ~128k-context class
(Qwen and similar) — for whatever agent harness picks up `SKILL.md` files
(Claude Code, `claude-9arm`, opencode, and other tools in the skills.sh
ecosystem).

Adapted from the [`qwen-agent`](https://github.com/thananon/9arm-skills/blob/main/skills/engineering/qwen-agent/SKILL.md)
skill in [thananon/9arm-skills](https://github.com/thananon/9arm-skills) by
9arm (Arm Patinyasakdikul) — the `claude-9arm` setup for running Claude Code
pointed at a Qwen backend.

## When to use this

Not a replacement for `qwen-agent` (the everyday delegator skill). This one is
for when a smaller local model is doing the hands-on coding itself — most
often the moment Claude's API is rate-limited and you fall back to
`claude-9arm`, but the rules apply to any ~128k-context local model in that
seat. Installing this skill gives that session the same spec-first, scope-
disciplined, verify-before-reporting rules a Claude session would follow, so
work quality doesn't drop just because the model did.

## Install

```bash
npx skills add p3nnyw1s3x/qwen-optimize-skills
```

Uses the [skills.sh](https://skills.sh/) CLI to pull this repo's `SKILL.md`
straight from GitHub into the calling tool's skills folder (e.g.
`~/.claude/skills/qwen-optimize/` for Claude Code — the folder name comes from
the `name` field in `SKILL.md`'s frontmatter, not the repo name). Picked up on
the next session by any of the CLIs `skills.sh` supports — Claude Code,
`claude-9arm`, and opencode included.

## Use

Once installed, invoke it like any other skill — e.g. ask for it by name, or
say something like "use qwen-optimize for this" when you're running the local
model directly, under `claude-9arm`, opencode, or similar.

## Credit

Adapted from [`qwen-agent`](https://github.com/thananon/9arm-skills/blob/main/skills/engineering/qwen-agent/SKILL.md)
in [thananon/9arm-skills](https://github.com/thananon/9arm-skills) by
9arm / Arm Patinyasakdikul.
