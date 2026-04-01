import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Prevent Context Drift in Claude Code and Cursor',
  description:
    'Context drift is the silent killer of AI coding sessions. Around step 7-10, your agent starts losing track of what you actually asked for. Here is how to stop it — with system prompts, instruction anchoring, and practical workflow patterns.',
  keywords: [
    'context drift',
    'claude code tips',
    'cursor context management',
    'ai agent best practices',
    'claude code memory',
    'prevent context drift',
  ],
};

export default function ContextDriftInClaudeCodePage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published April 1, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          How to Prevent Context Drift in Claude Code and Cursor
        </h1>
        <p className="text-zinc-400 text-lg">
          You have been there. You start a coding session with a clear goal — refactor this
          authentication module, add rate limiting to this API endpoint, extract this logic into
          a shared utility. By step 5, the agent is making reasonable-sounding changes. By step 9,
          it is refactoring things that did not need refactoring, renaming files that already had
          good names, and adding abstractions that actively complicate the codebase. This is context
          drift, and it is the most common reason AI-assisted development sessions go sideways.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'context drift',
            'claude code tips',
            'cursor context management',
            'ai agent best practices',
            'claude code memory',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">What Context Drift Actually Is</h2>
          <p>
            Context drift is not the same as the model forgetting something. The model remembers
            plenty — its context window is large. The problem is that in a long conversation, the
            conversation itself becomes the context, and the original goal gets buried under layers
            of reasoning, intermediate decisions, and tangential explorations.
          </p>
          <p>
            Here is the mechanism: every turn in a conversation adds tokens to the context. The
            agent reasons based on all of it — the goal, yes, but also every assumption it has made,
            every hypothesis it has explored, every correction you have given. When you add a new
            instruction after a dozen turns, the agent interprets it through the lens of everything
            that came before. Sometimes that is fine. Often it subtly shifts the interpretation in
            ways that are hard to notice until you see the diff.
          </p>
          <p>
            The Reddit threads are full of variations of the same complaint: "my agent drifts around
            step 7-10," "Claude Code keeps expanding the scope," "Cursor started working on things
            I never asked for." This is not a bug in the model. It is an emergent behavior of
            long-horizon task completion with a model that is trained to be helpful and complete
            tasks — even when completion means quietly redefining what the task is.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Why It Hits Claude Code and Cursor Harder</h2>
          <p>
            Cursor and Claude Code are not just chat interfaces — they are agentic coding environments
            where the AI can take actions: edit files, run shell commands, spawn sub-agents. The
            more capable the tool, the more opportunities for drift.
          </p>

          <div className="space-y-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">Sub-agent Spawning Compounds the Problem</h3>
              <p className="text-sm text-zinc-400">
                When Claude Code spawns a sub-agent to handle a specific task, that sub-agent starts
                with a slice of the parent context — but not necessarily the current, refined version
                of the goal. If the parent agent has drifted slightly by the time it decides to
                delegate, that drift gets passed down. The sub-agent completes its task correctly
                relative to what it received, but the parent&apos;s drift means it asked for the
                wrong thing. This is why scope creep often accelerates in multi-step agent sessions.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">Token Pressure Changes Behavior</h3>
              <p className="text-sm text-zinc-400">
                As the context window fills, models have to allocate attention across more tokens.
                The goal you stated at the start of the conversation is still in there, but it has
                lower activation relative to more recent tokens. The model starts weightings that
                favor what it has been thinking about most recently. This is not a bug — it is
                attention working as designed — but it means long sessions without explicit goal
                reinforcement are structurally prone to drift.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">Agentic Actions Lock In Mistakes</h3>
              <p className="text-sm text-zinc-400">
                In a pure chat interface, drift just produces irrelevant text. In Claude Code or
                Cursor, drift produces file changes, git commits, shell command executions. Once a
                file is written, the next agent step reads it back — including the drifted changes.
                Drift becomes self-reinforcing: the agent acts on its own previous output, which was
                based on a drifted interpretation, which produces new output that diverges further.
                This is why "agent drift" in coding tools feels more destructive than in chat — it
                compounds in the codebase itself.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Practical Fixes That Actually Work</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Anchor Instructions with Explicit Goals</h3>
            <p>
              Do not assume the agent is tracking your original goal throughout a long session.
              It is not. Periodically — every 5-8 turns in a complex session — restate the goal
              explicitly. Not in a verbose way. Just a one-liner:
            </p>
            <p>
              <em className="text-zinc-400">
                "Reminder: we are only refactoring the auth module, not touching the API routes."
              </em>
            </p>
            <p>
              This is not insulting to the model. It is compensating for a structural property of
              attention in long contexts. Think of it as a rubber duck that talks back.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Break Large Tasks Into Explicit Milestones</h3>
            <p>
              If you have a 20-step refactor, do not describe all 20 steps in one message and let
              the agent run. Instead, break it into explicit phases with natural stopping points.
              After each phase, review the output and give the agent a new explicit instruction for
              the next phase. This resets the agent&apos;s "current working context" without
              requiring a new session.
            </p>
            <p>
              The pattern looks like this:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400 text-sm">
              <li>"Phase 1: extract the token validation logic into a separate file. Do not move anything else."</li>
              <li>"Phase 2: now update the imports in auth/middleware.ts. Do not touch other files yet."</li>
              <li>"Phase 3: add unit tests for the extracted function. Stop there."</li>
            </ul>
            <p>
              Each phase is a closed loop. The agent cannot drift past the boundary of the current
              phase because there is no open-ended continuation.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Use Scope Locks in System Prompts</h3>
            <p>
              In Claude Code, you can set project-level instructions that are prepended to every
              session. One underused pattern is the scope lock — a system prompt directive that
              explicitly constrains what the agent is allowed to do by default:
            </p>
            <pre className="bg-zinc-950 border border-zinc-800 rounded p-4 text-sm text-zinc-300 overflow-x-auto">
{`You are working on the authentication module only.
Do not modify other parts of the codebase.
If you need to change something outside auth/, ask me first.
Do not create new files unless explicitly requested.
If a task requires touching more than 3 files, pause and confirm.`}
            </pre>
            <p>
              This is not a jail. The agent can still do useful work. But it has a hard boundary
              that slows down scope expansion. You can adjust these constraints per session based
              on what you are actually trying to accomplish.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Write a Session Summary Before Delegating</h3>
            <p>
              When you are about to hand off a task to a sub-agent or when you are stepping away
              from a session and want to continue later, write a session summary. Not a narrative
              of what happened — a condensed restatement of the current state:
            </p>
            <pre className="bg-zinc-950 border border-zinc-800 rounded p-4 text-sm text-zinc-300 overflow-x-auto">
{`## Current state
- Extracted TokenValidator to auth/token_validator.py (done)
- auth/middleware.py imports updated (done)
- Next: add unit tests to auth/test_token_validator.py
- Scope: ONLY touch auth/ directory
- Do NOT touch: api/, db/, or frontend/`}
            </pre>
            <p>
              This is the equivalent of leaving a note for your future self. When you resume the
              session, paste this summary at the top. It re-anchors the agent to the actual goal
              rather than everything it reasoned about in between.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Leveraging CLAUDE.md and .cursorrules</h2>
          <p>
            Both Claude Code and Cursor support persistent project-level instructions through
            <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">CLAUDE.md</code> and
            <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">.cursorrules</code> respectively.
            These are not just generic system prompts — they are project-specific context that gets
            loaded at the start of every session and acts as a continuous anchor.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">What to Put in CLAUDE.md</h3>
            <p>
              A good CLAUDE.md does two things: it tells the agent what the project is, and it
              constrains what the agent is allowed to do by default. The constraint part is what
              prevents drift. A minimal effective CLAUDE.md for a project with an MCP authentication
              context might look like:
            </p>
            <pre className="bg-zinc-950 border border-zinc-800 rounded p-4 text-sm text-zinc-300 overflow-x-auto">
{`# Project: MyAuthService

## What this project does
- JWT-based authentication API using FastAPI
- MCP server exposes auth tools to AI agents

## Coding constraints
- Never modify auth/token_validator.py without running tests first
- All auth changes require a corresponding update to tests/
- File renames and moves must be approved explicitly
- If a change affects more than 2 files, summarize the change before applying

## Current focus
- Adding rate limiting to the token validation endpoint`}
            </pre>
            <p>
              The "current focus" section is the most valuable part for drift prevention. It is
              a single-sentence anchor that overrides whatever the agent inferred from the previous
              session. Update it before every significant session.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Pattern: Negative Constraints</h3>
            <p>
              Most developers write CLAUDE.md in terms of what the agent should do. Try framing
              it partially in terms of what it should NOT do:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Do not refactor code that is not directly related to the current task</li>
              <li>Do not rename files unless renaming is the explicit task</li>
              <li>Do not add new dependencies without asking</li>
              <li>Do not touch infrastructure code (Dockerfile, CI configs) unless the task is infrastructure-related</li>
            </ul>
            <p>
              Negative constraints are more effective than positive ones for drift prevention
              because they directly block the most common drift behavior: unnecessary scope
              expansion.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">When Drift Has Already Started</h2>
          <p>
            Sometimes you do not catch it early enough. The agent has already made several changes
            that are off-target. Here is how to recover:
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Stop and Audit</h3>
            <p>
              Do not let the agent continue. Run{' '}
              <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">git status</code> and
              <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">git diff</code> to see
              exactly what has changed. Often the drift is more contained than it felt — a few
              renamed variables, a couple of extra abstractions — but it needs to be cleaned up
              before continuing.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Hard Reset with git</h3>
            <p>
              If things have drifted badly, do not try to fix the damage incrementally. Hard reset
              to the last clean state and restart with a tighter constraint. The time spent on a
              reset-and-retry is almost always less than the time spent untangling a drifted codebase.
            </p>
            <pre className="bg-zinc-950 border border-zinc-800 rounded p-4 text-sm text-zinc-300 overflow-x-auto">
{`git stash  # if you want to save changes temporarily
git checkout -- .  # discard all uncommitted changes
# then restart with clearer constraints`}
            </pre>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Restart with Explicit Scope</h3>
            <p>
              When restarting, be more explicit than you were the first time. Name the files. Name
              the changes. Explicitly forbid the things that went wrong. If the agent added
              unnecessary abstractions last time, say "do not add new abstraction layers, only make
              the minimum changes required to add rate limiting." The model can follow specific
              negative instructions — it just needs them stated.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Managed Context with MCP Servers</h2>
          <p>
            If you are building tools that wrap AI agents for your team or users, context management
            becomes a product concern — not just a workflow concern. The drift problem gets harder
            when you are delegating to agents on behalf of users who may not know to do explicit
            goal reinforcement.
          </p>
          <p>
            A purpose-built MCP hosting platform can help here.{' '}
            <a href="https://mcpize.com?ref=A7RDJ" className="text-blue-400 hover:text-blue-300 underline">
              MCPize
            </a>{' '}
            provides structured session management with built-in checkpointing — each significant
            agent action gets logged as a named checkpoint that you can review and roll back to if
            drift occurs. Rather than debugging drift after the fact, you get a structured audit
            trail that makes it visible early. For teams deploying AI coding tools at scale, this
            kind of operational visibility is what separates a productive agent workflow from one
            that erodes trust through silent scope creep.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">The Core Principle: Treat Context Like Code</h2>
          <p>
            The engineers who get the most out of Claude Code and Cursor share one habit: they treat
            context management as seriously as they treat code quality. They write CLAUDE.md files
            before writing code. They set explicit constraints before starting a complex task. They
            audit session state before moving to the next phase. They do not assume the agent is
            tracking everything — because they have seen what happens when you assume.
          </p>
          <p>
            Context drift is not a model failure. It is a structural property of long-horizon
            task completion with a helpful AI. The fix is not to find a better model — it is to
            build better habits around how you work with the model you have.
          </p>
          <p>
            Start with one change: before your next Claude Code or Cursor session, write three
            sentences at the top. What are you doing. What you are not doing. What the agent should
            do if it is unsure. That small act of explicit constraint will prevent most of the drift
            you have been fighting.
          </p>
        </section>
      </div>
    </article>
  );
}
