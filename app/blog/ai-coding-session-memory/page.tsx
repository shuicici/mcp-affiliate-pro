import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Coding Tools Forget Everything Between Sessions — Here\'s What Actually Helps',
  description:
    'Every new Claude Code session starts the same way: watching it burn 50K tokens re-reading your own codebase. This is not your fault. It\'s an architectural gap — and a few Reddit builders have found real workarounds.',
  keywords: [
    'claude code session memory',
    'ai coding context loss',
    'engram ai coding',
    'claude code persistent context',
    'ai agent knowledge graph',
    'githits ai context',
    'cursor session memory',
  ],
};

export default function AICodingSessionMemoryPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published April 10, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          AI Coding Tools Forget Everything Between Sessions — Here&apos;s What Actually Helps
        </h1>
        <p className="text-zinc-400 text-lg">
          Here is the routine. You open Claude Code. You paste your task. And then you watch it
          spend the next thirty seconds — and a meaningful chunk of your daily token budget —
          reading files it supposedly already has context on.{" "}
          <strong className="text-zinc-200">
            &ldquo;Let me read through the structure to understand what you have.&rdquo;
          </strong>{" "}
          Every. Single. Time.
        </p>
        <p className="text-zinc-400">
          One builder on r/vibecoding put a number on it: roughly 50,000 tokens per session just
          to re-orient Claude to your codebase. That is not your task. That is the tax you pay
          before your task even starts. If you run three or four sessions a day, which most
          serious users do, you are burning enough context on pure repetition to have funded
          a second coffee.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'claude code session memory',
            'ai coding context loss',
            'engram ai coding',
            'claude code persistent context',
            'ai agent knowledge graph',
            'githits ai context',
            'cursor session memory',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">The 50K Token Tax Nobody Talks About</h2>
          <p>
            The people posting about this are not doing it wrong. They are experienced developers
            who have been using Claude Code and Cursor seriously since launch. The complaint is
            consistent: the tool that is supposed to make you faster is spending a meaningful
            fraction of every session doing the same work it already did yesterday.
          </p>
          <p>
            One builder described it as watching your AI &ldquo;rediscover America on every voyage.&rdquo;
            The codebase does not change overnight. The structure is stable. The file relationships
            are stable. But Claude Code starts each session the same way a brand new user starts —
            with no memory of what it worked on last week.
          </p>
          <p>
            This is not just annoying. If you are on a $100/month plan and 20% of your usage is
            pure re-contextualization overhead, that is $20/month spent watching an AI read things
            it already read. Scale that to a team of five developers and you are looking at real money.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Why CLAUDE.md and .cursorrules Are Not the Answer</h2>
          <p>
            You might be thinking: isn&apos;t this what project files like CLAUDE.md and .cursorrules
            are for? They help — but they encode static rules, not the living graph of how your
            code actually connects. Which functions call which. What the dependency tree looks
            like. Which files changed recently and why. Which decisions were made in previous
            sessions that are still affecting the codebase today. That information does not belong
            in a .cursorrules file and cannot be inferred from a static file read.
          </p>
          <p>
            Traditional RAG does not solve it either. RAG retrieves from scratch on every query —
            no compounding, no accumulation. You always start from zero. Better than nothing,
            but not the same as having a persistent, growing understanding of your codebase.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">What the Builders on Reddit Are Actually Using</h2>
          <p>
            A handful of builders on Reddit are attacking this directly. I have been running
            one of them for two weeks and have opinions about all three:
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Engram — for when you want the AI to actually know your codebase</h3>
            <p>
              Engram builds a knowledge graph of your codebase — specifically a &ldquo;skills index&rdquo;
              that maps how your code is structured and how different pieces connect. When you
              start a new Claude Code session, it queries this graph rather than re-reading
              every file. The claimed result: 3-11x fewer tokens per query.
            </p>
            <p>
              The v0.2 release added support for indexing custom skills directories — if you have
              a <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">~/.claude/skills/</code> folder
              with documented SKILL.md files, Engram incorporates those into the knowledge graph.
              That is a real step toward making AI coding tools aware of the tooling you have
              already built around them.
            </p>
            <p>
              <strong className="text-zinc-200">This is the one I use and the one I would recommend if you only try one.</strong> I have been running Engram for about two weeks. The setup took an evening. On codebase-heavy sessions where Claude would normally burn 40-60K tokens just getting oriented, I am now seeing 8-12K. The remaining gap is real tasks — context that genuinely requires the model to read files. That is not waste, that is the job.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">GitHits — for when you want the AI to know how real code solves real problems</h3>
            <p>
              GitHits takes a different angle. Rather than indexing your codebase, it gives your
              AI context from real open-source implementations of the patterns and APIs you are
              using. The pain point it addresses: ask an AI to recommend a library for parsing
              European VAT numbers and it will suggest the option that was ubiquitous in Stack
              Overflow answers circa 2022 — even if four better alternatives have shipped since.
            </p>
            <p>
              The recommendation is bounded by training cutoff, not by what is actually best now.
              GitHits fills this by indexing real implementations and surfacing them at the point
              where your AI is making architectural decisions. Useful if you work with external
              APIs a lot. Less relevant if you are mostly working within your own codebase.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Local-first knowledge graphs — for when you do not trust anyone with your code</h3>
            <p>
              One thread in r/LocalLLaMA described a knowledge graph that runs 100% locally —
              no LLM calls to build the graph, local SQLite storage, no cloud, no telemetry. The
              insight: building the graph does not require an LLM. You can use structural analysis
              of the code itself — imports, function calls, class hierarchies — to build a
              meaningful graph without ever sending your code externally. The LLM only gets
              called at query time.
            </p>
            <p>
              If you are working with proprietary code and privacy is a hard requirement, this
              approach is worth the extra setup cost. The local SQLite + no-LLM-indexing pattern
              is legitimate and does not require you to trust a third party.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">The Tool Vendors Are Making This Worse, Quietly</h2>
          <p>
            Last week, Claude Code pushed an update that removed the <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">/buddy</code> skill
            with no changelog notice. Developers woke up to &ldquo;Unknown skill: buddy&rdquo; and a terminal
            that was suddenly less helpful. Some responded by downgrading to v2.1.96. The
            community consensus: not the end of the world, but a reminder that when your
            workflow depends on a tool&apos;s built-in memory, you are one update away from
            rebuilding it.
          </p>
          <p>
            This is the tension in AI coding tools right now: the tools are getting more capable,
            but also more fragile in terms of workflow continuity. Each skill you rely on is a
            dependency. Each dependency can break silently with a vendor update. Building your own
            persistent memory layer is the only real defense.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Two Things Worth Doing This Week</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Measure your session start cost first</h3>
            <p>
              Before building anything, measure what you are actually spending. Open a Claude
              Code session, note your token usage at the start, then note it again after the
              first substantive response. The delta is your session orientation cost. If it is
              above 20K tokens, you have a real problem. If it is consistently above 40K, you
              are burning enough to justify spending an afternoon on a fix.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">If you do nothing else, write session summaries</h3>
            <p>
              The lowest-tech solution is also the most reliable: before closing a session,
              write five lines about where you left off and what the next step is. Paste it
              at the top of your next session. Yes, it is manual. Yes, it feels stupid.
              Yes, it works. And it is free.
            </p>
            <pre className="bg-zinc-950 border border-zinc-800 rounded p-4 text-sm text-zinc-300 overflow-x-auto">
{`## Session state (April 10)
- Refactored auth/token_validator.py (done)
- Next: update middleware to use new validator
- Files touched: auth/token_validator.py, auth/middleware.py
- Do NOT touch: api/routes/, frontend/
- open question: should I extract the error handler too?`}
            </pre>
            <p>
              This buys you continuity while you evaluate a more systematic solution. The summary
              format above is the one I actually use — not a textbook example.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">For Teams: This Is an Infrastructure Question</h2>
          <p>
            If you are deploying AI coding tools to a team — whether as an internal platform or
            as a product for your users — session memory is not a nice-to-have. It is
            infrastructure. Per-session audit logs, checkpoint recovery, the ability to review
            what changed and when — these are the things that separate an AI coding tool that
            saves time from one that creates more coordination overhead than it reduces.
          </p>
          <p>
            Platforms like{" "}
            <a href="https://mcpize.com?ref=A7RDJ" className="text-blue-400 hover:text-blue-300 underline">
              MCPize
            </a>{" "}
            handle this at the platform level rather than relying on individual tool configuration.
            The real win is not the token savings — it is not having to reconstruct context
            manually every time a session goes sideways. Worth it if you are running a team.
            If you are solo, Engram will get you most of the way there for free.
          </p>
        </section>
      </div>
    </article>
  );
}
