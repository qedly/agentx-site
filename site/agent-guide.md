# Rovara agent guide

Public installation is coming soon. These guides cover an existing deployed AgentX environment. Commands retain the agentx name. Source reviewed at 8acb7ac00c97e3e5ff547cb13af07e5ff160bc86 on 5 October 2026.

# Rovara documentation

Learn how to delegate a coding task, inspect the work and continue in the same AWS workspace.

## What is Rovara?

Rovara runs a coding agent in your AWS account. Give it a task from Slack, Claude Code, Codex or Cursor. The agent works in a remote workspace and brings back code changes and evidence from tests and checks. Review the work, ask for changes, then request a pull request. You decide what gets merged.

## Choose your starting point

Start from Slack Request a change, review it and ask for a draft PR. Follow your first task → Start from your coding tool Connect Claude Code, Codex or Cursor and hand off a task. Connect your tool → New to the project? Public installation is coming soon. You can explore the workflow now; the task guides assume your team already has a deployed environment. Installation status →

## Understand the essentials

Core concepts Projects, tasks, workspaces and check evidence. Review changes and checks Read the diff, understand the result and decide what to do next. Manage workspaces and costs Continue, cancel or close work without confusing those actions.

## Configure your team’s environment

For the person who owns the deployment: Configure repositories, setup commands and checks. See the system architecture and service boundaries. Find the next step when something goes wrong.

## See a recorded task

Explore a saved Django benchmark task with the exact patch, raw test output and grader report. See what changed and what the evidence covers. Inspect the benchmark example →

# Core concepts

Five ideas help you understand where work happens and what comes back.

## Project

A project defines the repositories the agent can work on, how to prepare them and which checks to run. Your team’s administrator configures it. A Slack channel can be connected to that project. For example, an export-service project can contain its repository, dependency-install command and test command.

## Task

A task is a coding request and its follow-ups. It has an ID, progress, changed files and any available result artifacts. Be specific about the behavior you want and the constraints to preserve.

## Workspace

The agent works on a remote EC2 worker in your AWS account. Its workspace keeps the repository files and conversation state for follow-ups. Compute can stop when idle while storage remains. A coding-tool task stays private unless shared or project policy requires sharing. A Slack request is visible in its channel thread.

## Check evidence

The code diff shows what changed. Test and check output shows what was exercised. A result may pass, fail or be unavailable. Read the report instead of relying only on the agent’s summary. Task checks, pull-request preparation checks and repository CI are separate observations. Learn how to review them.

## Pull request

You request a PR when there is work to review. Coding-tool PRs open as drafts by default. Your team reviews the diff and CI through its existing GitHub process and decides what gets merged. Walk through a first task →

# Your first task in Slack

Request a small change, inspect the result and ask for a draft pull request.

## Before you start

Your team needs a deployed environment, a configured project and a Slack channel connected to it. Use the app mention installed in your workspace; the examples below use @AgentX . Installation coming soon If your team has not deployed the project yet, start with the installation status . This guide begins after setup.

## 1. Give it a task

In the project’s Slack channel, describe the change and how you want it checked. Start with one small, reviewable change. @AgentX Fix CSV exports that include empty records. Keep the existing column order and add a regression test. Report the changed files and the checks that ran. What happens next The request gets a thread. The agent prepares a workspace, posts progress and returns a result. Initial workspace preparation can take several minutes. If an action asks for confirmation, read it before choosing Approve or Cancel . The project’s policy determines which orchestrator actions need confirmation.

## 2. Inspect the work

Read the changed files and available test output. Check which commands passed, failed or were not run. A completed coding task can still have failing or missing checks. Does the diff solve the requested problem? Do the tests cover the behavior you care about? Is anything failed, skipped or not verified? How to read the check results →

## 3. Ask for a follow-up

Reply in the same thread after the current work has ended. The follow-up uses the same workspace and conversation. @AgentX Also handle a file with only empty records. Keep the existing changes and rerun the relevant checks.

## 4. Request a draft PR

@AgentX Open a draft pull request for this change. Open the returned PR link. Review the diff, task evidence and repository CI. A draft PR can contain unfinished work or failing checks. You decide what gets merged.

## 5. Preserve the work, then close

When you are finished, ask to close the workspace. @AgentX Close this workspace. If closure reports unpublished work, preserve or publish the changes before trying again. Cancellation stops current work; closing a workspace is a separate action. Manage the workspace →

# Connect your coding tool

Delegate from Claude Code, Codex or Cursor through an MCP connection.

## Before you start

You need a deployed environment, project access and the installed agentx CLI. Public installation instructions are coming soon. These commands connect an existing environment; they do not deploy it. Rovara is the public name. Existing command and tool names still use AgentX and agentx .

## 1. Add the MCP connection

Run the command for the client you use. Claude Code agentx mcp install --client claude-code Codex agentx mcp install --client codex Cursor agentx mcp install --client cursor Reopen your client if the server does not appear. Complete sign-in when prompted.

## 2. Give complete instructions

Ask your coding tool to find your projects and delegate the task: List my available AgentX projects. In export-service, fix CSV exports that include empty records. Keep the column order, add a regression test, and report the changed files and check evidence. The remote worker receives the task instructions, not your entire local conversation. Include the details it needs.

## 3. Follow the result

You receive a task ID. Ask your client to check it or wait for it. After the task ends, inspect the summary, changed files, available artifacts and any PR links. Check the status of task <task-id> and show its latest progress. A wait can time out while the task continues. Check the same task rather than creating a duplicate. MCP tool reference →

## 4. Continue or open a PR

Ask for follow-up work after the current task has ended. The same workspace and branch are reused. Continue task <task-id>. Also cover a file with only empty records. Keep the existing changes and rerun the relevant checks. When ready for review, ask to open a draft PR. Check the task again to find its URL; PR creation can finish after the tool call returns.

## Sharing into Slack

Tasks are private by default unless the project requires sharing. View mode lets channel members watch. Continue mode, when allowed, lets them send follow-ups in the thread. Check the channel and mode before sharing. When finished, close the task to release its workspace. Workspace actions →

# Review changes and checks

Understand the diff and the evidence before deciding what to merge.

## Start with the change

Read the diff against the task you requested. Then inspect the named checks, their output and anything that was not verified. The agent’s summary is useful context; the diff and output are what you inspect.

## Read the result

Result Meaning Your next step Passed The named command passed in that run. Check that it covers your change. Regression A check passed before and fails now. Inspect the failure and ask for a fix. Already failing The check failed before the change too. Decide whether this task should address it. No baseline There is no earlier result for comparison. Read the current output without assuming an earlier pass. Not verified / not run The required observation is missing. Read the reason and request the missing check if needed. When a previously passing check regresses, the runtime gives the agent at most one extra attempt. Any remaining failure stays visible.

## Know which checks you are looking at

Task checks At a normal session finish, the runtime reruns usable checks and compares before/after where possible. Results can be saved in checks.json . PR preparation checks Publication prepares the candidate and runs readiness commands. Configured CodeBuild gates produce additional evidence. Repository CI Your repository’s checks and merge rules run through its normal GitHub review process. A passing result from one layer does not establish that every other check ran on the same candidate. Check the command, environment and candidate reference attached to the evidence.

## Review a draft PR

A draft PR is ready for your review; it can still contain failing or missing checks. Read the check report alongside the diff and your repository’s CI. You decide what gets merged. CodeBuild results add evidence. Your repository’s merge rules determine which checks must pass before merging. Technical detail: PR publication paths A reporting-enabled new PR can open as a draft with failing checks described. Older publication paths may refuse a new PR when readiness fails. Appending or syncing an existing PR refuses failing readiness checks. CodeBuild results do not automatically block PR publication.

## Inspect a real example

A saved Django task shows the actual patch and test output behind one benchmark result. Read the recorded task →

## Review checklist

Does the change meet the request and preserve its constraints? Which checks actually ran, on which code, in which environment? What failed, regressed or could not be verified? Do task evidence and repository CI cover the PR you are reviewing? What additional check or human review do you need? If an important integration could not be tested, keep that gap visible and request the check before merging.

# Workspaces and costs

Keep the context you need, stop the work you do not, and understand what remains on the bill.

## Come back to the same workspace

Follow-ups reuse the files and conversation state. Idle compute can stop while the workspace remains. Continue the same task or Slack thread when you want to pick up where it left off. Retained storage still costs money while compute is idle.

## Cancel, close or remove

Action What it does What to remember Cancel a task Stops the current work. Inspect status and any partial changes. This is not workspace closure. Close a workspace Checks for unpublished work before releasing workspace storage. Preserve unfinished changes if closure refuses. Remove the environment A separate operator teardown procedure. Use the release-matched instructions when published. See the workspace lifecycle →

## Understand task status

Coding-tool tasks can be STARTING , RUNNING , SUCCEEDED , FAILED , CANCELLED , INTERRUPTED or CLOSED . SUCCEEDED describes task execution, not a guarantee that every check passed. A timed-out wait can leave the task running. Read its current status and evidence before retrying.

## What you pay for

You pay for AWS services, retained storage and model usage. Task usage telemetry, installer estimates and budget alerts help explain usage. Budget alerts are notifications, not spending caps. Illustrative estimate: about $211 per month Assumes us-east-1, default Bedrock models, 1,000 turns, 100 worker sessions, 60 instance-hours and 10 retained workspaces. The source pricing calculation returns $211.13. This is an example, not a subscription price; actual usage and prices vary.

## Check environment health

With an installed CLI and operator access, use: agentx --env <env> doctor --region <region> Read the reported failures before making changes. Public upgrade, recovery and teardown instructions will arrive with the installation guide. Troubleshoot a problem →

# Projects and checks

Set the repositories, setup commands and checks the coding agent should use.

## Define a project

A project file names repositories, setup commands, readiness checks, and orchestration guidance. It contains credential references, not secret values. Deployment and sign-in settings belong to a separate deployment file. Example project configuration name: export-service revision: 1 repositories: - name: export-service url: https://github.com/example/export-service.git path: repo/export-service defaultBranch: main credentialRef: github-agentx-sdlc setup: - cwd: repo/export-service executable: npm args: [ci] timeoutSeconds: 600 readiness: - cwd: repo/export-service executable: npm args: [test] timeoutSeconds: 600 orchestratorInstructions: >- Delegate repository reads, edits, builds, and tests to the remote AgentX worker. Replace the example repository and credential reference with your configured project values. Use agentx admin project register --help to see the registration options for your installed version. Increase the immutable revision before changing a registered definition.

## Choose the checks

Use readiness commands for your test suite, lint, or type check. Each command has a working directory, executable, arguments, and timeout. If no readiness commands are available, the runtime can use recognized agent test commands; that gives narrower coverage. A configured devcontainer runs shell, setup, and readiness in the prepared project environment. Adding one to a later project revision does not move an existing workspace into it.

## Models, connections and access

Models Choose approved provider/model pairs. Worker and orchestration configuration are distinct. External providers receive model requests outside AWS. Connectors Linear, Jira, Asana, GitHub, and remote MCP tools have configured project scopes and server-side credential handling. Action policy Rules allow, ask, or deny orchestrator tool calls. They do not gate every shell command or file edit on the coding worker. Developer tasks Project settings control whether coding-tool tasks are enabled and how they may be shared into Slack. Do not place credentials in command environment fields or project YAML. Verify scope and provider availability before enabling a connection.

# MCP tool reference

The developer tools exposed to Claude Code, Codex and Cursor by the AgentX MCP server.

## Connect a client

Start with the coding-tool connection guide . Tool names keep the agentx_ prefix. The coding client calls these tools; you normally ask for the action in plain language.

## Developer tools

Tool Use agentx_whoami Check your environment and sign-in Returns developer identity, environment and API versions. agentx_list_projects Find projects you can use Returns authorized projects and their task/sharing policies. agentx_start_task Delegate a task Give the exact project name and complete instructions. Returns a task ID; wait_seconds is optional. agentx_get_task Inspect status and results Returns progress, changed files, artifacts and PR links when available. agentx_wait_for_task Wait for work to end Waits 1–600 seconds. A timeout does not stop the task. agentx_list_tasks Find your existing tasks Lists tasks; use the returned IDs to inspect or continue them. agentx_continue_task Send a follow-up Requires the task ID and complete new instructions. Reuses the workspace and branch after the current run ends. agentx_cancel_task Stop current work Cancels the task; cancelling a wait alone does not do this. agentx_close_task Release the workspace Checks for unpublished work; inspect the result if closure refuses. agentx_share_task Share into the project’s Slack channel View lets others watch; continue permits follow-ups when project policy allows. agentx_open_pull_request Request a PR Requires task ID and title. Draft defaults to true; inspect the task later for the PR URL.

## Waits and retries

Waits can time out without cancelling the task. Check the existing task before starting duplicate work. Mutating tools use request IDs to recognize retries; a new request ID means a new action. Continuing a task that is still running returns TASK_BUSY . Wait for its current run to end.

## Access and sharing

Project access and task policy are enforced by the server. Sharing into Slack must follow that project’s channel and sharing policy. Additional admin tools depend on a valid admin sign-in; they are outside this developer-tool table.

# Troubleshooting

Find the next useful check before repeating work or changing the environment.

## The Slack channel does not respond

Confirm you used the installed app mention in a project-bound channel. Ask the administrator to check the channel binding and the registered project. A newly registered project revision applies to new threads.

## The coding tool asks me to sign in

Complete the installed client’s sign-in flow. Ask the client to use agentx_whoami to confirm the environment and identity. If a tool reports a version mismatch, use the CLI version matched to that deployment.

## My project is missing

Ask for agentx_list_projects . Project access may depend on membership in its Slack channel. Ask an administrator to check access and whether developer tasks are enabled. A Slack-unavailable notice can mean some channel-derived projects are temporarily missing.

## The wait timed out

Ask for agentx_get_task with the same task ID. The task can still be running. Cancelling a wait only stops the wait.

## A follow-up says TASK_BUSY

The previous run is still active. Wait for it to end, or explicitly cancel the task if you want to stop that work. Send the follow-up afterward.

## The result says not verified

Read the reason and identify which check is missing. Missing setup, an unavailable command or a stopped task can leave no usable result. Ask for the required check instead of assuming the change passed.

## The workspace will not close

Inspect the unpublished-work report and preserve the remaining changes. Close again after the work is published or otherwise safely kept. Do not confuse cancel with close.

## The environment itself is unhealthy

An operator with access can run: agentx --env <env> doctor --region <region> When asking for help, include the CLI version, task ID, exact error and relevant redacted output. Keep credentials out of reports.
