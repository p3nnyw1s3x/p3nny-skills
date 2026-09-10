# p3nny-skills

Personal collection of agent skills for Claude Code and other skills.sh-
compatible harnesses (opencode, etc.). Each skill lives in its own folder
under `skills/`.

## local-guardrails

Operating discipline for local, self-hosted models with a limited context
window (Qwen and similar) — for whatever agent harness picks up `SKILL.md`
files (Claude Code, `claude-9arm`, opencode, and other tools in the skills.sh
ecosystem). Asks the model to confirm its actual context window size at the
start of a session and budgets reads against that number, so it works whether
you're running a 64k, 100k, or 128k local model — no per-model config needed.

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

## assumption-ledger

Makes an agent write down what it guessed. When a task forces a guess that
would be expensive to get wrong — an undocumented business rule, a data shape
nobody specified, intent inferred from code with no issue to read — the agent
records it in a committed `ASSUMPTIONS.md` with its confidence, what breaks if
it's wrong, and a *runnable* way to check it. The change then ships with a
short summary of every guess underneath it, ordered by blast radius.

The point isn't paperwork. Code that passes every test can still be wrong,
because the assumption underneath it was wrong, and nothing in a normal diff
shows a reviewer where the author was guessing.

### When to use this

It fires on its own, by design — you can't ask for it, because you can't see
the moment a model starts guessing. Two hard limits keep it from turning into
noise: guesses that are cheap to reverse never get an entry, and guesses about
irreversible damage (data loss, money movement, security boundaries, one-way
migrations) aren't allowed to become entries at all — those stop and ask you.

Its output is most useful in two places: hand a reviewer the summary before
they read the diff, and read the ledger before the diff when something breaks
in production. The cause is often already sitting there, marked `unverified`.

## Install

```bash
npx skills add p3nnyw1s3x/p3nny-skills
```

Uses the [skills.sh](https://skills.sh/) CLI. With more than one skill in the
repo it lists what's available and lets you pick; `--skill local-guardrails`
takes just one, `--all` takes everything, and `-g` installs user-level instead
of into the current project.

Each skill lands in a folder named after the `name` field in its frontmatter
(e.g. `~/.claude/skills/assumption-ledger/` for Claude Code), not after the
repo or the folder it sits in here. Picked up on the next session by any of
the CLIs `skills.sh` supports — Claude Code, `claude-9arm`, and opencode
included.

## Use

`assumption-ledger` is meant to load itself when it's relevant.
`local-guardrails` expects to be asked for — invoke it by name, or say
something like "use local-guardrails for this" at the start of a
`claude-9arm` session.

## Credit

`local-guardrails` was inspired by [`qwen-agent`](https://github.com/thananon/9arm-skills/blob/main/skills/engineering/qwen-agent/SKILL.md)
in [thananon/9arm-skills](https://github.com/thananon/9arm-skills) by
9arm / Arm Patinyasakdikul — the `claude-9arm` tooling that skill runs under.
No text is shared between the two; this one stands on its own rules.
