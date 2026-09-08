#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const SKILL_NAME = "qwen-agent-optimize";
const source = path.join(__dirname, "..", "SKILL.md");
const targetDir = path.join(os.homedir(), ".claude", "skills", SKILL_NAME);
const target = path.join(targetDir, "SKILL.md");

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(source, target);

console.log(`Installed skill "${SKILL_NAME}" to ${target}`);
console.log("It will show up in Claude Code's skill listing on the next session.");
