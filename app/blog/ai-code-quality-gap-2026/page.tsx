import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Coding Agents Write Code That Works. Then You Spend Hours Cleaning It Up.',
  description:
    'Coding agents produce functional code that feels wrong. Unnecessary layers, repeated logic, classes that don\'t quite fit the domain. Here\'s why this happens — and the practical patterns that actually help.',
  keywords: [
    'ai code quality',
    'claude code criticism',
    'cursor code quality',
    'ai generated code refactoring',
    'coding agent limitations',
    'mcp context management',
  ],
};

export default function AICodeQualityGapPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published April 1, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          AI Coding Agents Write Code That Works. Then You Spend Hours Cleaning It Up.
        </h1>
        <p className="text-zinc-400 text-lg">
          Last week I watched a coding agent build a feature I had sketched out in about 200 lines
          of Python. The agent produced 340 lines across 6 files. It passed all the tests. It also
          had three abstraction layers that existed because the agent kept adding utility classes
          "for future extensibility," a factory pattern that factoryed nothing, and two helper
          functions that were identical except for one variable name. This is not a cherry-picked
          horror story. This is Tuesday for anyone who uses AI coding tools seriously.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'ai code quality',
            'claude code criticism',
            'cursor code quality',
            'ai generated code refactoring',
            'coding agent limitations',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            The Code Works. It Is Also Wrong.
          </h2>
          <p>
            A thread on r/ClaudeCode last week captured this better than I could: "Coding agents
            produce code that works but requires significant refactoring. Unnecessary layers,
            repeated logic, design choices that feel unclean." The top reply was even more blunt:
            "I've been reviewing AI-generated PRs for six months. The code consistently does the
            right thing in the wrong way. It's like watching someone solve a puzzle by brute force
            when there's a clean elegant solution sitting right there."
          </p>
          <p>
            This is the quality gap. Not correctness — AI-generated code usually does what it
            claims to do. Quality: the decisions made during implementation, the way the code
            is structured, whether it reads like something a human who cared about the codebase
            wrote, or something that was assembled to satisfy a test suite.
          </p>
          <p>
            And it is getting worse, not better. As coding agents get more capable — longer context
            windows, more powerful models — they are also getting more confident about producing
            more code, faster. Which means more unnecessary layers, more redundant helpers, more
            "future-proof" abstractions that will need to be deleted in the next refactor.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Why Models Trained on碎片化 Code Make Bad Architectural Decisions
          </h2>
          <p>
            The root cause is exactly what you'd expect if you thought about it for five seconds:
            these models were trained on the entire internet's code, and the internet's code is,
            by definition, average. Most code is written by developers who were racing to ship.
            Most codebases are not beautifully architected systems — they are accumulated solutions
            to specific problems that evolved over years without consistent oversight.
          </p>
          <p>
            When a model learns from fragmented tasks — small, isolated code samples — it learns
            patterns that work in small, isolated contexts. It learns that factory patterns are
            a thing. It learns that service layers are a thing. It learns that "always wrap
            external calls in try-catch" is good practice. What it does not learn is when NOT to
            apply these patterns. When a factory is overkill. When a service layer adds indirection
            without abstraction. When the 15-line function is cleaner than the 5-line function
            plus 3 helper functions plus 2 utility classes.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">The "Future Extensibility" Trap</h3>
            <p className="text-sm text-zinc-400">
              The most common example of this: agents see a lot of code that was written "to be
              extensible" — patterns that were appropriate in large production systems. They
              generalize this to "abstractions are always good" and start building them into
              200-line side projects that will never need to extend beyond the three use cases
              they have today. The result is code that is harder to read than a flat 100-line
              file would have been.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Agents Cannot See the Whole Picture</h3>
            <p className="text-sm text-zinc-400">
              A developer who has worked on a codebase for six months knows which parts are stable
              and which are in flux, which abstractions are load-bearing and which can be safely
              refactored, which naming conventions are sacred because changing them would break
              references throughout the codebase. An agent working from context does not have
              this intuition. It sees the files it has been given and makes decisions based on
              local patterns within those files. It cannot see that renaming this variable will
              break seventeen references because the references are in files it has not read.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            The Postgres Problem: Agents Flying Blind
          </h2>
          <p>
            Here's a specific failure mode that shows up constantly in the community discussions.
            Someone on r/Python described it well: "I got tired of watching Claude write{' '}
            <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm text-zinc-300">
              WHERE status = 'active'
            </code>{' '}
            when the column actually contains 'Active', then retry with 'enabled', then give up.
            Most Postgres MCP servers give agents query and list_tables and call it a day. The
            agent flies blind."
          </p>
          <p>
            I've hit this exact thing. Had a user table with a subscription_status column that
            stored values like 'trialing', 'past_due', 'cancelled' — not the clean booleans or
            enums you might expect. The agent spent 20 minutes trying different queries before I
            pasted the actual column values. Then it solved the problem in 30 seconds.
          </p>
          <p>
            This is the context problem in its most concrete form. The agent doesn't have access
            to the actual data in the database, so it guesses. Sometimes it guesses right.
            Often it guesses wrong in ways that pass the test suite but fail in production.
          </p>
          <p>
            The fix isn't better prompting — it's better context infrastructure. An MCP server
            that exposes actual column values and data distributions gives the agent something
            to work with instead of something to guess at. This is exactly what the Postgres
            MCP ecosystem is starting to address, with tools like{' '}
            <a
              href="https://mcpize.com?ref=A7RDJ"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              MCPize
            </a>{' '}
            that provide schema-aware database context to agents rather than raw query access.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            What Actually Helps: The Practical Patterns
          </h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">
              1. Ask for Architecture Before Code
            </h3>
            <p>
              Before you let the agent generate any code, ask it to describe what it plans to
              build and why. Not in a prompt-engineering way — in a "I'm code reviewing your
              plan" way. Something like:
            </p>
            <p className="text-zinc-400 italic">
              "Before you write any code, tell me: how many files are you creating, what are
              they each responsible for, and what abstractions are you introducing? I want to
              approve the architecture before you implement it."
            </p>
            <p>
              This sounds like it slows you down. It doesn't. It saves you from spending 20
              minutes reading code you then have to delete. Agents that have to justify their
              architectural decisions before making them make fewer bad architectural decisions.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">
              2. Use a Negative Constraints File
            </h3>
            <p>
              Tell the agent what you do not want, explicitly. Not as a footnote — as the
              primary constraint. For a small project, this might be:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400 text-sm">
              <li>No factory patterns unless there are 3+ product types</li>
              <li>No abstract base classes unless there is actual shared behavior to model</li>
              <li>No wrapper/helper/utility files unless the helper is used in 2+ places</li>
              <li>Maximum file size: 100 lines before being required to justify expansion</li>
            </ul>
            <p>
              This works because agents trained on average code have learned that these patterns
              are common. They will reflexively apply them. Negative constraints interrupt the
              reflex.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">
              3. Feed the Agent Real Schema, Not Guesses
            </h3>
            <p>
              Before any database work, paste the actual schema. All of it. Every column, every
              type, every constraint. Do not rely on the agent to infer the schema from a few
              queries — because it will infer wrong. One developer described spending 45 minutes
              debugging a Python script that kept trying to insert UUIDs into a VARCHAR column.
              The agent never asked about the schema. It just assumed. The fix was a 30-second
              paste of the actual CREATE TABLE statement.
            </p>
            <p>
              If you are using MCP servers for database access, make sure the server is providing
              full schema context, not just query execution. Schema-aware MCP servers that surface
              actual column types and sample values eliminate an entire class of incorrect code
              generation.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">
              4. Treat AI Code Review as Part of the Build Step
            </h3>
            <p>
              The developers who get the best results from AI coding tools do not generate code
              and then move on. They generate code and immediately do a focused review pass —
              not for correctness, but for quality. Is this the simplest solution? Are there
              abstractions here that don't pull their weight? Is the naming consistent with
              the rest of the codebase?
            </p>
            <p>
              I did not realize how much I needed this skill until I watched a teammate who had
              been using AI coding tools for a year do a 30-second review of generated code and
              catch three architectural problems I had missed after 10 minutes of staring at it.
              He was not smarter than me — he had just internalized that AI code review is a
              separate discipline, not an afterthought. The quality of the generated code is
              part of the review, not something you trust the tests to handle.
            </p>
            <p>
              This is the skill that is not being talked about enough: AI code review. The ability
              to look at generated code and immediately identify the architectural decisions that
              will create maintenance debt. This is not a skill you needed before AI coding tools
              existed — you wrote the code yourself and the quality came from the thinking. Now
              quality is a separate step from generation, and it requires a different mindset.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            The Codebase Is the Context. Stop Treating It Like Input.
          </h2>
          <p>
            Here's the underlying problem: coding agents are designed to generate code, and they
            are very good at generation. They are not designed to understand a codebase the way
            a human developer does — as a living system with history, trade-offs, stable parts,
            and volatile parts. They see a snapshot of files and they produce something that
            satisfies the snapshot. Whether it fits into the ongoing life of the codebase is
            not something they are optimized for.
          </p>
          <p>
            The practical implication: you have to be the one who holds the architectural vision.
            The agent can implement. It can even design, within narrow constraints. But it cannot
            maintain the coherence of a codebase over time — that is still your job. The tools
            get better every month. The judgment requirement does not go away.
          </p>
          <p>
            I'm not optimistic this gets better on its own. The models improve; the fundamental
            problem — code generated without systemic understanding — doesn't have a prompt
            engineering solution. What you can do today: be the reviewer. Be the one who holds
            the architecture. The agent is a very fast typist with no taste. That's fine. You're
            the taste.
          </p>
          <p>
            If you are building with MCP servers and you want your agents to have better project
            awareness — actual schema context, real dependency graphs, session-aware state — look
            for platforms that treat context as a first-class infrastructure concern, not just
            a longer context window. The difference between an agent that guesses and an agent
            that knows is usually the infrastructure feeding it information.
          </p>
        </section>
      </div>
    </article>
  );
}
