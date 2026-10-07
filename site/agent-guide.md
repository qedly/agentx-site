# Rovara Code agent guide

Public source: https://github.com/PrepLabsAI/Rovara. Install with Launch in AWS or npx @preplabsai/rovara-code init --env <name>; see docs/install. Node 22.19 or newer is required for the CLI (Node 22 LTS recommended). The package supplies rovara and agentx aliases. Native workflow guides remain previews and require a compatible deployment. Existing references: mainline 1a1c4a555fc672b4558341005b99ee84dedcde41. Native workflow source: 3455a367005972659875667b82d7b5d28a2da727. Feedback, dependency and closeout guides include the owner-approved design; see docs/release for qualification.

# Rovara Code documentation

Give a task, agree on the plan, inspect the evidence, and keep the final decision with your team.

## A coding agent with a workflow you control

Rovara Code provides a coding workflow: remote implementation in your AWS account, plan approvals, named checks, separate code and security AI reviews, and help responding to PR feedback. Your team owns the final merge. Request Approve plan Code + evidence PR + feedback Your review

## Start with one useful task

Your first Quick task One plan approval. A concrete change. Evidence and a draft PR. Follow the tutorial → Use your coding tool Delegate from Claude Code, Codex or Cursor through MCP. Connect your tool → New to Rovara? Deploy in your AWS account, connect GitHub and Slack, then give it a task. Install Rovara →

## Follow the complete journey

Plan a larger feature Requirements, design and coding-plan approvals in Full. Inspect changes, checks and reviews Read actual output and identify gaps or stale evidence. Respond to PR feedback Review proposals and approve the fixes you want. Follow dependencies and linked PRs Understand blockers and what the task is waiting for.

## Understand your environment

System architecture Where work, decisions and evidence live. Projects and checks Repository setup, required checks and optional check choices. Workspaces and costs Continue, cancel, close and retain the record. Troubleshooting Find the next useful action without duplicating work.

## Inspect recorded evidence

The historical benchmark report includes the saved Django patch and grader output, plus all 50 outcomes in a selected Pro batch. These records are separate from the illustrative new workflow. Read the benchmark evidence →

# Install Rovara

Deploy in your AWS account with Launch in AWS, or start the guided installer from a terminal.

## Choose your installation path

Launch in AWS is the recommended path in the Rovara README . It opens a setup page and needs nothing installed on your computer. The terminal path uses the published npm CLI. Both paths set up GitHub, Slack and your first project. AWS and model usage are billed to you. Region: us-east-1 The current installation guide supports US East (N. Virginia). The buttons and explicit-region examples here use that region.

## Before you start

An AWS account, ideally dedicated to Rovara, and permission to create IAM roles for installation. A GitHub organization or personal account to own the GitHub App. A Slack workspace where you can create and install apps. Your workspace may require admin approval. Model access: Amazon Bedrock, or an OpenRouter, Anthropic or OpenAI API key. An email address for setup and alerts. Terminal path only: Node.js 22.19 or newer; Node 22 LTS is recommended, with an authenticated AWS admin profile. The installer checks regional capacity, including EC2 vCPUs and two free Elastic IPs. Full prerequisite and quota details →

## 1. Launch in AWS

Launch in AWS ↗ On the AWS Create stack page, enter your email, GitHub owner and install name. Review the IAM acknowledgement and create the installer stack. Look for the temporary-password email (the README estimates about five minutes). The installer stack’s SetupPageUrl output has the same setup-page address. Sign in, choose a new password and follow the build progress. The installation guide estimates about 20 minutes for the AWS build. Connect the GitHub App and Slack app on the page, then choose your first repository and Slack channel. Confirm alerts and mention the bot. The setup ends at its first Slack reply. After Rovara answers in Slack, you can delete only the agentx-installer stack to remove the installer; Rovara’s environment keeps running. Removing the environment itself is a separate action. Detailed AWS setup instructions →

## 2. Install from a terminal

Check node --version , then use an AWS admin profile authenticated for the target account. Replace both placeholders: export AWS_PROFILE=<an admin profile for the target account> npx @preplabsai/rovara-code init --env <name> This is the command from the README. For an explicit region: npx @preplabsai/rovara-code --env <name> init --region us-east-1 Use a lower-case install name with letters, digits and hyphens, such as prod or staging . Keep the terminal open and your computer awake until setup finishes. On your own computer, the installer opens a browser page served only from 127.0.0.1 . It shows your choices, the resource plan and estimated cost before creating the environment, then guides GitHub, Slack and project setup. To stay in the terminal: npx @preplabsai/rovara-code --env <name> init --region us-east-1 --no-ui CloudShell and SSH normally use the terminal. CloudShell needs Node 22 first; use the checksum-verified setup instructions in Node 22 in AWS CloudShell . Other installation paths →

## 3. Give it a first task

In the channel bound during setup, select the installed bot through Slack’s mention picker. Its default name still uses AgentX . @AgentX inspect the project and implement the navigation fix. Run the relevant tests. @AgentX create a pull request for the personal-website repository titled "Improve navigation". These are the README examples; replace the task and repository with your project. Inspect the changes and evidence before asking for a PR. Your team decides what gets merged. Prefer an IDE? Connect Claude Code, Codex or Cursor → Quick/Full planning and feedback walkthroughs elsewhere in these docs describe the native workflow preview. They require a compatible deployment and are not promised by this installation guide.

## Resume or diagnose setup

If setup stops, run the same init command again. The installer resumes at the first unfinished step. If Slack needs an admin to approve the app, wait for approval and rerun it. After installation, use operator access to check the environment: npx @preplabsai/rovara-code --env <name> doctor --region us-east-1 Read the failures and next actions before changing anything. Browser, SSH and recovery details →

## Upgrade or remove an environment

Use the target release’s CLI version for an upgrade; review the changes before accepting: npx @preplabsai/rovara-code@<version> --env <name> upgrade --region us-east-1 Operations, projects, connectors and upgrades → Removal deletes the environment’s workspaces, stacks and stored data. It needs admin credentials and explicit environment confirmation. Save anything you need first and read the full teardown guide : npx @preplabsai/rovara-code --env <name> destroy --region us-east-1

## Rovara name, compatible commands

The product repository is PrepLabsAI/Rovara . The published package is @preplabsai/rovara-code . You can install the CLI once: npm install -g @preplabsai/rovara-code rovara --help The package also provides agentx as a compatibility command. AWS resources, ~/.agentx , MCP server/tool IDs and the default Slack app retain their existing names. Use the examples as written. Instructions checked against the README and linked guides on 6 October 2026. Release, licence and documentation status →

# Core concepts

Five ideas help you understand where work happens and what comes back.

## Project

A registered definition of repositories, setup, checks, model/tool guidance and access policy. Use the exact project name returned by your environment.

## Task and workflow

The unit connecting a request, plan versions, operations, decisions, evidence and PR links. Native Quick/Full workflows add explicit planning and review stages. Existing direct tasks are a separate entry path.

## Plan and owner decision

A saved document describes approved scope and approach. Its version and digest identify what the owner decided. A revised document requires a current decision.

## Workspace

The remote project files and task context in your AWS account. Follow-ups can reuse it; workspace closure and task-record retention are different.

## Candidate

The identified code version being checked or reviewed. Results for one candidate do not qualify a changed candidate.

## Checks and AI review

Named command results are evidence of those checks in their recorded environment. Separate code/security AI review reports are attributed findings, not a guarantee of correctness.

## Pull request and feedback

GitHub hosts the proposed change, repository CI, comments and merge decision. Rovara Code connects registered PRs to the task and proposes feedback fixes for owner approval.

# Your first Quick task

Approve one plan, let Rovara Code implement the change, and inspect the evidence before requesting a PR.

## Before you start

You need an environment with the native workflow enabled, access to a registered project, and the project’s installed Slack app or coding-tool connection. Install Rovara before following this preview workflow. Use Slack’s mention picker to select the app installed in your channel. Existing CLI commands still use agentx . Quick is the simplest planning path Use it for a well-defined fix. For ambiguous or larger work, choose Full . Ordinary direct tasks remain a separate path.

## 1. Request a bounded change

In the project-bound channel, select the app installed in your channel and send: @your-installed-app workflow: Make the docs Copy button reset its label after copying. Announce success accessibly, preserve manual copy if the clipboard fails, and add checks for success, reset and failure. This is an example request; replace it with work for your project. Expect a task thread and then a plan ready for your decision. Do not start another task because planning takes time.

## 2. Read the plan

Open the linked Canvas. Check the intended behavior, files or areas involved, scope exclusions and proposed checks. Rovara Code has inspected the request with read-only tools at this stage. Does it describe the change you actually want? Are the acceptance checks useful? Are assumptions or dependencies missing? If the plan needs correction, use Request changes and explain the adjustment. Review the revised version.

## 3. Approve the current version

Use Approve on the current decision prompt. Required project checks are locked on; choose from project-configured optional checks when offered. Your decision applies to that plan version. A comment in the thread is feedback, not approval. An old prompt cannot authorize a revised plan.

## 4. Inspect checks and request reviews

Rovara Code implements in the project’s remote workspace and runs the configured checks. Inspect the diff, raw output and candidate reference. Failed or missing required checks remain a visible blocker. When the task reaches REVIEW / WAITING with passing checks for that candidate, explicitly request the separate code and security reviews. In your connected coding tool, ask: Use agentx_review_workflow_candidate for <task-id>. Review the current candidate against the approved plan. Do not edit code. Use the existing task ID. The tool starts the initial read-only reviews; it is not a generic retry. Inspect their reports before requesting draft PRs. If working only in Slack, use the review action supported by your installed version or ask the operator how to request it. Review guide →

## 5. Request draft PRs

When the workflow is ready, ask Rovara Code to open draft PRs for review. Inspect the task to find their GitHub links. PR creation is a separate request; readiness does not merge the code. Review repository CI and the diff in GitHub. You decide what gets merged.

## 6. Handle reviewer feedback

Rovara Code gathers feedback on the task’s linked PRs and proposes responses. Open the detailed review, choose the fixes you want, and approve them or request changes. Approved fixes produce a new candidate and fresh evidence. Follow the feedback tutorial →

## 7. Finish and preserve the work

A task with several required PRs waits until all are observed merged. Inspect the task’s next action and closeout state. Canonical artifacts and decisions remain in Rovara Code under configured retention; Canvas copies are cleaned up after preservation is verified. Workspace closure is a separate action and can refuse if unpublished changes remain. Workspace and closeout guide →

# Plan a larger feature

Use Full to agree on requirements, design and the coding plan before implementation.

## Before you start

You need an environment with the native workflow enabled, access to a registered project, and the project’s installed Slack app or coding-tool connection. Install Rovara before following this preview workflow. Use Slack’s mention picker to select the app installed in your channel. Existing CLI commands still use agentx . Choose Full when behavior, interfaces or implementation choices need discussion. Full changes planning depth; it does not relax project-required checks or review requirements.

## 1. Choose Full at task start

Select the Full workflow through your installed workflow surface. In a coding tool, explicitly ask it to call agentx_start_workflow with workflow_path: "full" for your project. Start a Full Rovara Code workflow in <project-name>. Add password reset to the account page. Show me requirements, design and the coding plan for approval before implementation. Keep existing sign-in behavior. Use your project’s actual name. If your Slack app does not expose Full selection, use the workflow MCP path or ask the operator which installed version supports it.

## 2. Agree on requirements

Inspect intended behavior, constraints, non-goals and acceptance scenarios. Use Request changes for omissions or wrong assumptions. Approve the current document when it represents the work you want. For password reset, discuss expiry, error messages and existing authentication behavior here—not after implementation.

## 3. Review the design

Inspect the proposed interfaces, component boundaries, dependencies and failure behavior. Ask for alternatives or corrections before approving this version.

## 4. Approve the coding plan

Review the implementation steps, dependency order and check choices. Required project checks stay on. Approve this version to authorize implementation.

## 5. Review the work

Implementation follows the approved plan. Inspect the code and candidate-bound checks. Once the task is in REVIEW / WAITING with passing checks, explicitly request initial candidate reviews through agentx_review_workflow_candidate in your coding tool, or the review action supported by your installed environment. Inspect the separate code and security reports, then request draft PRs when ready. PR feedback follows the same owner-controlled proposal and fix loop as Quick. How to request reviews →

## When a document changes

Revised documents require a decision on the current version. A previous approval does not approve a different scope or stale candidate. Keep the task’s current prompt and next action in view.

# Connect your coding tool

Delegate from Claude Code, Codex or Cursor through an MCP connection.

## Before you start

You need Node 22.19 or newer (Node 22 LTS recommended), access to a deployed Rovara project, and your installation’s control-plane URL from your admin. Developers do not need AWS credentials. Install an environment first → The package is @preplabsai/rovara-code . The MCP server remains agentx , and tools retain the agentx_ prefix.

## 1. Sign in

npx @preplabsai/rovara-code login <your-control-plane-url> Sign in through the browser with Slack or your company’s configured sign-in. The CLI shows your identity and available projects. Use the URL your administrator gives you; it is your team’s deployment, not a Rovara-hosted service.

## 2. Add the MCP connection

Run the command for your client, as yourself (without sudo ): Claude Code claude mcp add --scope user agentx -- npx -y @preplabsai/rovara-code mcp Or use npx @preplabsai/rovara-code mcp install --client claude-code . Codex npx @preplabsai/rovara-code mcp install --client codex Cursor npx @preplabsai/rovara-code mcp install --client cursor Reopen your client if needed. mcp install pins the CLI version in the client entry; rerun it to update. Add --env <name> before mcp install if your administrator supplied an environment name. Manual configuration and removal instructions →

## 3. Start a task

After connecting, ask your client to list your Rovara projects and start a task in the chosen project, for example “Hand Rovara the navigation fix in <project-name> and run the relevant tests.” The released direct-task path uses agentx_start_task ; it does not automatically gain Quick/Full approvals. The workflow tutorial above needs native workflow tools in your deployment. Published coding-tool guide →

## Native workflow preview: start with a plan

Requires native workflow tools v0.2.0 exposes the 11 direct-task tools. The workflow steps below describe a separate preview and require a compatible deployment. Ask your client to find your projects and call the native workflow tool for the chosen project. Quick is the default. List my Rovara Code projects. Start a Quick workflow in <project-name> to improve the docs Copy button. Reset its label after copying, announce success accessibly, and preserve manual copy on clipboard failure. Show me the plan before implementing. The client uses agentx_start_workflow . Include the remote task’s needed context; it does not receive your entire local conversation.

## Preview: read and decide on the plan

Inspect the task’s current approval document, workflow revision and next action. Ask the client to show the whole document before you decide. Your explicit decision calls agentx_decide_workflow with the current revision and artifact digest. An assistant should not approve a plan on your behalf without your instruction. Show the current plan for task <task-id>, including checks and scope.

## Preview: request reviews, then draft PRs

Follow the same task ID and inspect the diff and check output. A wait can time out while work continues; get current task state before retrying. When the native task is REVIEW / WAITING with passing checks for the current candidate, ask your client to call agentx_review_workflow_candidate with that task ID and review instructions. This explicitly starts the initial read-only code and security reviews. Inspect the reports. When the workflow is ready, explicitly request draft PR creation. Use the owner feedback-review controls for subsequent PR comments so the selected changes and fresh evidence stay connected. PR feedback guide →

## Sharing into Slack

Tasks are private by default unless the project requires sharing. View mode lets channel members watch. Continue mode, when allowed, lets them send follow-ups in the thread. Check the channel and mode before sharing. When finished, close the task to release its workspace. Workspace actions →

# Inspect changes, checks and reviews

Read the evidence for the current code, identify gaps, and decide what your team needs before merging.

## Start with the change

Read the diff against the task you requested. Then inspect the named checks, their output and anything that was not verified. The agent’s summary is useful context; the diff and output are what you inspect.

## Check which code was inspected

In the native workflow, required checks and review reports bind to the candidate. Compare their candidate reference with the PR head you are reviewing. Changing the code invalidates dependent earlier evidence. Open the evidence diagram

## Read the separate AI reviews

Initial candidate reviews require an explicit request after checks pass, while the task is REVIEW / WAITING . Request the reviews → Code and security reviewers use separate read-only sessions. Inspect their findings, rationale, scope and reviewer/model attribution. A passing review is an AI assessment; it does not replace tests or your team’s judgment.

## Read the result

Result Meaning Your next step Passed The named command passed in that run. Check that it covers your change. Regression A check passed before and fails now. Inspect the failure and ask for a fix. Already failing The check failed before the change too. Decide whether this task should address it. No baseline There is no earlier result for comparison. Read the current output without assuming an earlier pass. Not verified / not run The required observation is missing. Read the reason and request the missing check if needed. When a previously passing check regresses, the runtime gives the agent at most one extra attempt. Any remaining failure stays visible.

## Know which checks you are looking at

Native workflow readiness Required checks and separate code/security review reports must apply to the current candidate before PR readiness. Existing direct-task verification The runtime reruns usable checks and compares before/after where possible. Failed or missing evidence can be described on a draft PR. Repository CI Your normal GitHub checks and branch rules govern the repository. Benchmark grader A historical grader determines a selected benchmark task’s outcome, not readiness of a current workflow task. Inspect the actual command, environment and candidate attached to each result. These layers have different purposes.

## Review a draft PR

The native workflow checks readiness before PR creation; your team then reviews the draft PR and repository CI. You decide what gets merged. Using the existing direct-task path? That path can produce draft PRs describing failed or unverified checks. Older publication behavior may refuse a new PR on readiness failure; append/sync of an existing PR also refuses failed readiness. Configured CodeBuild output adds evidence rather than automatically enforcing every merge rule.

## Inspect a real example

A saved Django task shows the actual patch and test output behind one benchmark result. Read the recorded task →

## Review checklist

Does the change meet the request and preserve its constraints? Which checks actually ran, on which code, in which environment? What failed, regressed or could not be verified? Do task evidence and repository CI cover the PR you are reviewing? What additional check or human review do you need? If an important integration could not be tested, keep that gap visible and request the check before merging.

# Respond to PR feedback

Inspect Rovara Code’s recommendations and approve the changes you want before coding resumes.

## Before you start

You need a native workflow with registered, open task PRs and access as its authorized owner. Reviewers leave their original comments in GitHub. The installed environment must include the authenticated feedback review surface.

## 1. Open the feedback review

Follow the review link from the Slack task notice. Sign in if prompted; then return to the same review. A link is a route to the task, not permission to view or decide it. Rovara Code gathers current comments across the task’s open PRs, groups related feedback and prioritizes the proposed responses.

## 2. Inspect each recommendation

Read the original comment, the code it refers to, the recommendation, rationale and suggested checks. A separate read-only reviewer may recommend a fix, identify an already-addressed comment, or explain why the comment appears stale or out of scope. Inspect Why PR and code version The recommendation must apply to the current code. Original comment Understand what the reviewer actually requested. Proposed change and checks Know what approving the fix will authorize. Gaps or disagreement The owner decides; a model recommendation is not a human decision.

## 3. Choose the response

Approve all recommended fixes or a selected subset. Request changes when the proposal needs a different approach. Dismiss with a reason when appropriate. Your feedback and disposition become attributed task decisions. Approval authorizes specific changes Reading comments or receiving a review notice does not start another coding run. No automatic GitHub reply is implied by approving a proposal.

## If the code or comments change

A decision is tied to the PR heads, comment set and proposal. If those inputs change, the old approval cannot dispatch the old proposal. Reopen the refreshed review and decide on the current version.

## 4. Inspect the updated candidate

Only the approved fixes go to the coding operation. After implementation, inspect the new diff and fresh required checks and separate reviews. Your repository’s CI and human review remain part of the final decision. Evidence and freshness →

## 5. Make the final review decision

Use GitHub’s existing review and merge controls. Rovara Code observes linked PR state; it does not take over the team’s merge decision.

# Dependencies and linked PRs

Understand what can proceed, what is blocked, and which PRs still need your team’s decision.

## Read dependency order

A larger task can have work that depends on an earlier step. Inspect the prerequisite and blocker before retrying a downstream step. The initial workflow sequences dependent work; this guide does not assume concurrent agent execution. Prerequisite work Dependent work Checks + reviews Required PRs

## When work is blocked

Inspect the stage, reason and responsible next action. A failed prerequisite prevents its dependent steps from proceeding. Correct the prerequisite or revise the plan through the task’s decision controls.

## Track the complete PR set

Rovara Code registers PRs against the task and candidate repositories. Unrelated PR events do not advance this task. If the candidate requires several PRs, a successful PR creation in one repository does not mean the rest were created.

## Understand partial merges

The task waits for GitHub to report every required PR merged. A partial merge stays incomplete. If a linked PR reopens, inspect the updated task state rather than relying on an earlier notification.

## Recover without creating duplicate work

Read current task state and authoritative PR links first. Event delivery can be retried, so duplicate notices should not be treated as permission for a new coding run. Use the installed retry action for a blocked operation and inspect its result.

## Work starts with an explicit request

Ask Rovara Code in Slack or through your coding tool. Creating or updating a GitHub issue does not initiate a task. PR comments propose follow-up work; the owner approves changes before implementation.

# Workspaces and costs

Keep the context you need, stop the work you do not, and understand what remains on the bill.

## Come back to the same workspace

Follow-ups reuse the files and conversation state. Idle compute can stop while the workspace remains. Continue the same task or Slack thread when you want to pick up where it left off. Retained storage still costs money while compute is idle.

## Cancel, close or remove

Action What it does What to remember Cancel a task Stops the current work. Inspect status and any partial changes. This is not workspace closure. Close a workspace Checks for unpublished work before releasing workspace storage. Preserve unfinished changes if closure refuses. Remove the environment A separate operator teardown procedure. Use the release-matched instructions when published. See the workspace lifecycle →

## Understand task status

Coding-tool tasks can be STARTING , RUNNING , SUCCEEDED , FAILED , CANCELLED , INTERRUPTED or CLOSED . SUCCEEDED describes task execution, not a guarantee that every check passed. A timed-out wait can leave the task running. Read its current status and evidence before retrying.

## Understand the next action

What you see What to do Waiting for a plan decision Inspect the current document, then approve or request changes. Missing, failed or stale evidence Read the reason; obtain a current check or review. PR feedback proposal Open the detailed review and choose the response. Waiting for required PRs Use GitHub review and merge controls for the remaining PRs. Closeout retry needed Check preserved artifacts and retry the failed cleanup operation. Task execution status is distinct from workflow stage and PR merge state.

## What you pay for

You pay for AWS services, retained storage and model usage. Task usage telemetry, installer estimates and budget alerts help explain usage. Budget alerts are notifications, not spending caps. Illustrative estimate: about $211 per month Assumes us-east-1, default Bedrock models, 1,000 turns, 100 worker sessions, 60 instance-hours and 10 retained workspaces. The source pricing calculation returns $211.13. This is an example, not a subscription price; actual usage and prices vary.

## Check environment health

With an installed CLI and operator access, use: npx @preplabsai/rovara-code --env <env> doctor --region <region> Read the reported failures before making changes. Upgrade and teardown instructions → Troubleshoot a problem →

## Task history and Canvas cleanup

At terminal closeout, Rovara Code verifies its canonical artifacts and decisions and saves their references before deleting task Canvas copies, including earlier plan versions. A preservation or cleanup failure remains visible and retryable. Canvas cleanup does not delete Slack thread messages or original GitHub comments. Artifact retention follows your configured policy; do not assume indefinite storage. Workspace storage and deployment teardown are separate operations.

# Projects and checks

Set the repositories, setup commands and checks the coding agent should use.

## Define a project

A project file names repositories, setup commands, readiness checks, and orchestration guidance. It contains credential references, not secret values. Deployment and sign-in settings belong to a separate deployment file. Example project configuration name: export-service revision: 1 repositories: - name: export-service url: https://github.com/example/export-service.git path: repo/export-service defaultBranch: main credentialRef: github-agentx-sdlc setup: - cwd: repo/export-service executable: npm args: [ci] timeoutSeconds: 600 readiness: - cwd: repo/export-service executable: npm args: [test] timeoutSeconds: 600 orchestratorInstructions: >- Delegate repository reads, edits, builds, and tests to the remote Rovara Code worker. Replace the example repository and credential reference with your configured project values. Use agentx admin project register --help to see the registration options for your installed version. Increase the immutable revision before changing a registered definition.

## Choose the checks

Use readiness commands for your test suite, lint, or type check. Each command has a working directory, executable, arguments, and timeout. If no readiness commands are available, the runtime can use recognized agent test commands; that gives narrower coverage. A configured devcontainer runs shell, setup, and readiness in the prepared project environment. Adding one to a later project revision does not move an existing workspace into it.

## Required and optional workflow checks

Project-required checks remain on in Quick and Full. The owner can select only optional checks registered for that project at plan approval. Those choices are stored with the decision. Configure check working directories, executables, arguments and timeouts. A check name should describe its useful coverage. Do not treat optional selection as permission to bypass required checks or change repository merge controls.

## Models, connections and access

Models Choose approved provider/model pairs. Worker and orchestration configuration are distinct. External providers receive model requests outside AWS. Connectors Linear, Jira, Asana, GitHub, and remote MCP tools have configured project scopes and server-side credential handling. Action policy Rules allow, ask, or deny orchestrator tool calls. They do not gate every shell command or file edit on the coding worker. Developer tasks Project settings control whether coding-tool tasks are enabled and how they may be shared into Slack. Do not place credentials in command environment fields or project YAML. Verify scope and provider availability before enabling a connection.

# System architecture

Where the task, workspace, decisions and evidence live—and which systems remain authoritative.

## A task record connects the surfaces

Slack, the coding-tool MCP client and the authenticated feedback page are entry and review surfaces. The Rovara Code task/workflow record connects plans, operations, decisions, candidate evidence and linked PRs. Open the architecture diagram full size

## Entry and authorization

Surface Role Slack Project-bound task thread; plan Canvas; concise updates and owner controls. Coding tool Local agentx MCP client calls the authorized developer task API. Feedback page Authenticated task-scoped view and owner decisions through the API. GitHub Repository access, comments, CI and authoritative PR/merge state.

## Coding, checks and reviewers

EC2 provides the coding workspace with encrypted EBS storage. The configured devcontainer supplies the project environment. Coding tools read/edit files and run shell commands. Runtime check execution does not accept the coding agent’s success prose as test output. Code and security AI reviewers run in separate read-only sessions or operations. Separate review roles do not imply separate physical hosts.

## State and evidence

DynamoDB holds task, workflow and operation state. S3 holds artifacts and session data. EBS holds the workspace files. The control plane verifies candidate references and records decisions and review applicability. GitHub events are signed, task-scoped and deduplicated; GitHub API state remains authoritative for PR reconciliation.

## Account and external services

Your AWS account is the documented security boundary. Environments in the same account are not separate security boundaries. Bedrock is AWS-hosted; configured external model providers and vendor MCP servers receive their respective requests outside the account. Action policy can allow, ask or deny orchestrator tool calls. It does not gate every worker shell command or edit.

## Retention and closeout

Rovara Code preserves canonical task artifacts and decisions under configured retention. Canvas cleanup follows a verified preservation record. Original Slack replies and GitHub comments remain subject to their services’ retention. Closeout details →

# MCP tool reference

The developer tools exposed to Claude Code, Codex and Cursor by the Rovara Code MCP server.

## Connect a client

Start with the coding-tool connection guide . Tool names keep the agentx_ prefix. The coding client calls these tools; you normally ask for the action in plain language.

## Released developer tools (v0.2.0)

Tool Use agentx_whoami Check your environment and sign-in Returns developer identity, environment and API versions. agentx_list_projects Find projects you can use Returns authorized projects and their task/sharing policies. agentx_start_task Delegate a task Give the exact project name and complete instructions. Returns a task ID; wait_seconds is optional. agentx_get_task Inspect status and results Returns progress, changed files, artifacts and PR links when available. agentx_wait_for_task Wait for work to end Waits 1–600 seconds. A timeout does not stop the task. agentx_list_tasks Find your existing tasks Lists tasks; use the returned IDs to inspect or continue them. agentx_continue_task Send a follow-up Requires the task ID and complete new instructions. Reuses the workspace and branch after the current run ends. agentx_cancel_task Stop current work Cancels the task; cancelling a wait alone does not do this. agentx_close_task Release the workspace Checks for unpublished work; inspect the result if closure refuses. agentx_share_task Share into the project’s Slack channel View lets others watch; continue permits follow-ups when project policy allows. agentx_open_pull_request Request a PR Requires task ID and title. Draft defaults to true; inspect the task later for the PR URL.

## Native workflow tools (preview)

These four tools were inspected in a separate native-workflow implementation. They are not in the v0.2.0 developer tool list. Use them only with a deployment that provides them. Tool Use agentx_start_workflow Start Quick or Full with project and complete instructions. workflow_path defaults to quick. Returns the task and workflow state. agentx_decide_workflow Decide on the current document using task_id, expected_revision, artifact_digest, decision, reason and a retry-safe request_id. agentx_review_workflow_candidate Start the initial candidate review only in REVIEW / WAITING, with all required verification checks passing for the current candidate. Supply task_id and instructions; this is not a general re-review or feedback tool. agentx_retry_workflow Restart read-only planning only in PLAN / BLOCKED with an actionable workspace. Supply task_id and instructions; this does not retry arbitrary check, review, webhook or closeout operations. Use the tools your deployed server advertises. This reference covers the inspected native-workflow tool additions; an older server may only expose the direct-task tools.

## Decision inputs

Field Meaning task_id The existing workflow task. expected_revision The current positive workflow revision from the task. artifact_digest The SHA-256 of the current approval document. decision APPROVE, REQUEST_CHANGES, REJECT or SKIP. Not every decision is valid at every stage. reason A non-empty reason for the decision (maximum 500 characters). request_id A UUID for safe retry. Repeat the same request unchanged after a timeout. The server validates identity, state and freshness. Never reuse an older document digest to approve a revised plan. Feedback subset controls belong to the authenticated review surface; this table does not invent a feedback MCP API.

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

An operator with access can run: npx @preplabsai/rovara-code --env <env> doctor --region <region> When asking for help, include the CLI version, task ID, exact error and relevant redacted output. Keep credentials out of reports.

## The approval says it is stale

Open the latest task prompt and document. The workflow revision or document digest has changed; decide on the current version. Do not keep submitting the old approval.

## The workflow is waiting for evidence

Inspect the named check or missing reviewer report, current candidate and block reason. agentx_review_workflow_candidate starts the initial review only in REVIEW / WAITING , after all required verification checks pass for that candidate. It is not a generic re-review action. agentx_retry_workflow restarts blocked read-only planning only in PLAN / BLOCKED with an actionable workspace. For other failures, use the operation-specific recovery supported by the installed version or ask the operator. A missing report does not mean the review passed.

## The feedback link asks me to sign in

Sign in with the task-authorized identity and return to the same review. If access is refused, confirm task ownership with the operator. Possessing the link does not grant approval rights.

## A merged PR did not finish the task

Check the full required PR set and current GitHub state. Other required PRs may still be open or reopened. Inspect any delivery/reconciliation blocker before repeating work.
