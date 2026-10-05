# AgentX website — product truth

## Audience
- CTOs and VPs of Engineering who need a clear view of where coding work runs, what it costs, who controls the account, and who reviews changes.
- Developers who want to hand off a coding task from Slack or an existing coding tool and inspect the result later.

## Job
Explain AgentX as a complete remote coding-agent workflow: task handoff, coding in a persistent AWS workspace, check outcomes, and a reviewable pull request. Make setup, ownership, cost, and the current release boundary easy to understand.

## Positioning
**Delegate a coding task. Inspect what comes back.**

AgentX runs a coding agent in a persistent, isolated EC2 workspace in the customer’s AWS account. A task can start in Slack or arrive through MCP from Claude Code, Codex, or Cursor. When the run reaches its finish check, AgentX reports which available checks passed, failed, or could not be verified. It can open a pull request. A person reviews and merges it; AgentX has no merge path.

## Truth boundary
- AgentX is both the coding-agent runtime and task workflow, not a standalone test checker. The coding agent performs the implementation work; AgentX manages the task and check/report path around it.
- Each Slack-thread or MCP task uses an EC2 worker and encrypted EBS workspace; idle compute may stop while workspace and conversation state persist.
- Entry points include Slack and MCP tools for Claude Code, Codex, and Cursor. Project context connectors include Linear, Jira, Asana, and remote MCP.
- Check commands come from project readiness configuration when available, or recognized test commands from the session. Runs can be stopped or have no usable checks. A passing command is not proof of correctness and does not mean every relevant check ran or that all checks ran on the exact PR commit.
- Current reporting-enabled broker paths can open a draft PR with failing results. Older paths without check reporting stop before opening a PR when readiness checks fail. AgentX never merges.
- FSL-1.1-ALv2 is source-available, not OSI-approved open source. AgentX has no public source repository, published release, or npm package today.
- Repository CI is automated engineering evidence, not independent review, a live AWS acceptance run, customer proof, or a correctness guarantee.
- SWE-bench pilot evidence is diagnostic; the controlled comparison is not complete. Make no public performance claim.
- Cost is an estimate tied to stated assumptions, never a quote.

## Emotional target
Leaders should feel they can understand the operating boundary, cost, and review authority quickly. Developers should feel that a task can keep moving and that they can inspect the actual change and check outcomes. The shared feeling is confidence through visibility, not confidence through an unqualified “verified” badge.

## Website promise and conversion
Use the architecture atlas to explain the real system, a check report to show what AgentX returns, and the field guide to answer cost, security-boundary, setup, and release questions. The primary action is to inspect the check report; the second is to review setup requirements. Until a public release and clean install path exist, do not use a broken install CTA or imply a hosted trial.

## Brand direction
Systems Atlas: editorial typography, dimensional task-routing diagram, precise labels, warm mineral background, deep ink and marine blue, with the existing red proof mark used sparingly. No inherited Qedly site visual system. No fake metrics, customer logos, testimonials, simulated live output, or unverified claims.
