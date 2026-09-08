# qwen-optimize

Fallback operating-discipline skill for Claude Code.

Adapted from the [`qwen-agent`](https://github.com/thananon/9arm-skills/blob/main/skills/engineering/qwen-agent/SKILL.md)
skill in [thananon/9arm-skills](https://github.com/thananon/9arm-skills) by
9arm (Arm Patinyasakdikul) — the `claude-9arm` setup for running Claude Code
pointed at a Qwen backend.

## When to use this

Not a replacement for `qwen-agent` (the everyday delegator skill). This one is
for the specific moment Claude's API is rate-limited and you switch to running
`claude-9arm` (Claude Code pointed at a Qwen backend) as the primary session.
Installing this skill gives that Qwen session the same spec-first, scope-
disciplined, verify-before-reporting rules a Claude session would follow, so
work quality doesn't drop just because the model did.

## Install

```bash
npx skills add p3nnyw1s3x/qwen-optimize-skills
```

Uses the [skills.sh](https://skills.sh/) CLI to pull this repo's `SKILL.md`
straight from GitHub into `~/.claude/skills/qwen-optimize/` (the install
folder name comes from the `name` field in `SKILL.md`'s frontmatter, not the
repo name). Claude Code — and `claude-9arm`, which is the same CLI — picks it
up on the next session.

## Use

Once installed, invoke it like any other skill — e.g. ask for it by name, or
say something like "use qwen-optimize for this" when you're running under
`claude-9arm`.

## Credit

Adapted from [`qwen-agent`](https://github.com/thananon/9arm-skills/blob/main/skills/engineering/qwen-agent/SKILL.md)
in [thananon/9arm-skills](https://github.com/thananon/9arm-skills) by
9arm / Arm Patinyasakdikul.
