#!/usr/bin/env node

// Check for unused and deprecated ESLint rules in a flat config file.
// Usage: node scripts/check-rules.mjs [configFile] [--stylistic]

// This is ESLint's official "advanced API" for tooling that needs to introspect rules.
// The name is intentionally scary but it's documented for this use case.
import { builtinRules } from "eslint/use-at-your-own-risk";

const configFile = process.argv[2] || "./index.mjs";
const checkStylistic = process.argv.includes("--stylistic");

// Load the config
const config = (await import(`file://${process.cwd()}/${configFile}`)).default;

// Collect all configured rules from all config objects
const configuredRules = new Set();
for (const configObj of config) {
  if (configObj.rules) {
    for (const ruleName of Object.keys(configObj.rules)) {
      configuredRules.add(ruleName);
    }
  }
}

let allRules;

if (checkStylistic) {
  // For stylistic, load the plugin and check its rules
  const stylistic = (await import("@stylistic/eslint-plugin")).default;
  allRules = new Map(
    Object.entries(stylistic.rules).map(([name, rule]) => [`@stylistic/${name}`, rule])
  );
} else {
  // For core ESLint rules
  allRules = builtinRules;
}

const unusedRules = [];
const deprecatedRules = [];

for (const [ruleName, rule] of allRules) {
  // Skip rules that don't match our prefix filter
  if (checkStylistic && !ruleName.startsWith("@stylistic/")) {
    continue;
  }
  if (!checkStylistic && ruleName.startsWith("@")) {
    continue;
  }

  const isConfigured = configuredRules.has(ruleName);
  const isDeprecated = rule.meta.deprecated;

  if (isDeprecated && isConfigured) {
    const replacedBy = isDeprecated.replacedBy?.map(r => r.rule.name).join(", ") || "none";
    deprecatedRules.push({ name: ruleName, replacedBy });
  }

  if (!isDeprecated && !isConfigured) {
    unusedRules.push(ruleName);
  }
}

let exitCode = 0;

if (deprecatedRules.length > 0) {
  console.log("\n❌ Deprecated rules in use:\n");
  for (const { name, replacedBy } of deprecatedRules.sort((a, b) => a.name.localeCompare(b.name))) {
    console.log(`  ${name} → replaced by: ${replacedBy}`);
  }
  exitCode = 1;
}

if (unusedRules.length > 0) {
  console.log("\n❌ Unused rules (not configured):\n");
  for (const name of unusedRules.sort()) {
    console.log(`  ${name}`);
  }
  exitCode = 1;
}

if (exitCode === 0) {
  console.log(`\n✅ All ${checkStylistic ? "@stylistic" : "core ESLint"} rules are configured and none are deprecated.\n`);
}

process.exit(exitCode);
