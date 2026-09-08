# skills

Personal collection of agent skills for Claude Code and other skills.sh-
compatible harnesses (opencode, etc.). Each skill lives in its own folder
under `skills/`.

## qwen-optimize

Operating discipline for local, self-hosted models in the ~128k-context class
(Qwen and similar) — for whatever agent harness picks up `SKILL.md` files
(Claude Code, `claude-9arm`, opencode, and other tools in the skills.sh
ecosystem).

Inspired by the [`qwen-agent`](https://github.com/thananon/9arm-skills/blob/main/skills/engineering/qwen-agent/SKILL.md)
skill in [thananon/9arm-skills](https://github.com/thananon/9arm-skills) by
9arm (Arm Patinyasakdikul) — the `claude-9arm` setup for running Claude Code
pointed at a Qwen backend. Different premise (this session *is* Qwen, rather
than delegating to it) and independent text.

### When to use this

Not a replacement for `qwen-agent` (the everyday delegator skill). This one is
for the specific moment Claude's API is rate-limited and you switch to running
`claude-9arm` (Claude Code pointed at a Qwen backend) as the primary session.
Installing this skill gives that Qwen session the same spec-first, scope-
disciplined, verify-before-reporting rules a Claude session would follow, so
work quality doesn't drop just because the model did.

### Install

```bash
npx skills add p3nnyw1s3x/p3nny-skills
```

Uses the [skills.sh](https://skills.sh/) CLI to pull
`skills/qwen-optimize/SKILL.md` from this repo into the calling tool's skills
folder (e.g. `~/.claude/skills/qwen-optimize/` for Claude Code — the install
folder name comes from the `name` field in the file's frontmatter, not the
repo or folder name). Picked up on the next session by any of the CLIs
`skills.sh` supports — Claude Code, `claude-9arm`, and opencode included.

### Use

Once installed, invoke it like any other skill — e.g. ask for it by name, or
say something like "use qwen-optimize for this" when you're running under
`claude-9arm`.

### Credit

Inspired by [`qwen-agent`](https://github.com/thananon/9arm-skills/blob/main/skills/engineering/qwen-agent/SKILL.md)
in [thananon/9arm-skills](https://github.com/thananon/9arm-skills) by
9arm / Arm Patinyasakdikul — the `claude-9arm` tooling this skill runs under.
No text is shared between the two; this one stands on its own rules.
