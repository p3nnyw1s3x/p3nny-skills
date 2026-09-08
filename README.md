# qwen-agent-optimize

Fallback operating-discipline skill for Claude Code.

## When to use this

Not a replacement for `qwen-agent` (the everyday delegator skill). This one is
for the specific moment Claude's API is rate-limited and you switch to running
`claude-9arm` (Claude Code pointed at a Qwen backend) as the primary session.
Installing this skill gives that Qwen session the same spec-first, scope-
disciplined, verify-before-reporting rules a Claude session would follow, so
work quality doesn't drop just because the model did.

## Install

```bash
npx qwen-agent-optimize
```

Copies `SKILL.md` into `~/.claude/skills/qwen-agent-optimize/`. Claude Code
(and `claude-9arm`, which is the same CLI) picks it up on the next session.

## Use

Once installed, invoke it like any other skill — e.g. ask for it by name, or
say something like "use qwen-agent-optimize for this" when you're running
under `claude-9arm`.
