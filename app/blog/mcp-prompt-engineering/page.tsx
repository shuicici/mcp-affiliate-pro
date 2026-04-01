import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MCP Prompt Engineering: How to Write Better Prompts for MCP-Powered AI in 2026',
  description:
    'Learn how to write effective prompts when using AI models with MCP (Model Context Protocol). Covers context management, prompt structure, and advanced techniques for getting better results from MCP-connected AI assistants.',
  keywords: [
    'mcp prompt engineering',
    'prompt engineering mcp',
    'claude prompt mcp',
    'mcp context prompts',
    'ai prompting tips',
  ],
};

export default function MclPromptEngineeringPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published April 1, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          MCP Prompt Engineering: How to Write Better Prompts for MCP-Powered AI in 2026
        </h1>
        <p className="text-zinc-400 text-lg">
          Using an AI assistant with MCP (Model Context Protocol) connected feels different from
          prompting a bare language model. The tools are richer, the context windows behave
          differently, and the model can take real actions. That means the old prompting playbook
          needs an upgrade. This guide covers everything you need to know to write prompts that
          actually work with MCP-powered AI in 2026.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'mcp prompt engineering',
            'prompt engineering mcp',
            'claude prompt mcp',
            'mcp context prompts',
            'ai prompting tips',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Why MCP Changes the Prompting Game</h2>
          <p>
            Standard prompt engineering assumes you are working with a static context window — your
            prompt, a few examples, and maybe some conversation history. MCP blows that model wide
            open. When your AI is connected to MCP servers, it has access to live data, file systems,
            APIs, and tools that can modify the world outside the chat window.
          </p>
          <p>
            This creates a fundamentally different prompting dynamic:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-zinc-200">The AI can pull in context on demand</strong> — rather
              than stuffing everything into the prompt upfront, you teach the model to request the
              specific context it needs.
            </li>
            <li>
              <strong className="text-zinc-200">Actions have real consequences</strong> — a poorly
              worded prompt can trigger a file write, a Git commit, or an API call you did not intend.
            </li>
            <li>
              <strong className="text-zinc-200">Context is dynamic, not一次性</strong> — the model can
              maintain state across tool calls, which means your prompts need to account for multi-step
              reasoning loops.
            </li>
          </ul>
          <p>
            Reddit users working with MCP-connected AI have consistently reported the same pain
            points: "My AI keeps forgetting context," "I do not know how to structure prompts for
            MCP tools," and "I get unexpected tool calls." All three stem from treating MCP like a
            normal chat interface. This guide fixes that.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Understanding MCP Context Windows
          </h2>
          <p>
            MCP servers communicate with the AI through a structured context mechanism. Unlike a
            simple chat history, MCP context is organized as a series of tool definitions and
            capability announcements. Understanding how this works is essential for writing effective
            prompts.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">How MCP Servers Feed Context</h3>
            <p>
              When you connect an MCP server to your AI client, it announces its capabilities through
              a standardized manifest. This manifest lists:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Available tools and their parameters</li>
              <li>Resource types the server can access</li>
              <li>Prompt templates the server provides</li>
              <li>Lifecycle methods (e.g., initialize, shutdown)</li>
            </ul>
            <p className="text-sm text-zinc-400">
              The AI does not load all this context at once — it selects which parts to activate based
              on your prompt. This means you need to guide the model toward the right tools through
              clear, specific instruction.
            </p>
          </div>

          <p>
            The practical implication: <strong className="text-zinc-200">your system prompt sets
            the rules</strong>, and your conversational prompts activate specific capabilities.
            A well-structured prompt tells the model not just what to do, but which MCP resources
            to reach for.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Prompt Structure for MCP-Powered AI
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-zinc-200 mb-2">
                System Prompts That Work With MCP
              </h3>
              <p>
                Your system prompt is the foundation. It should explicitly tell the model how to use
                MCP tools, not just what they are. A weak system prompt is the top reason MCP
                connections underperform.
              </p>
              <p>Include these elements in your MCP system prompt:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong className="text-zinc-200">Tool selection criteria</strong> — when should the
                  model call a tool vs. reasoning from existing knowledge?
                </li>
                <li>
                  <strong className="text-zinc-200">Confirmation thresholds</strong> — specify which
                  tool calls require user confirmation before execution (e.g., file writes, API
                  mutations).
                </li>
                <li>
                  <strong className="text-zinc-200">Fallback behavior</strong> — what should the model
                  do if a tool call fails or returns unexpected results?
                </li>
                <li>
                  <strong className="text-zinc-200">Context scope</strong> — which MCP servers are
                  active, and which are reserved for specific tasks?
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-200 mb-2">
                Tool-Calling Patterns
              </h3>
              <p>
                The biggest shift from regular prompting to MCP prompting is that you are not just
                asking the AI to generate text — you are asking it to plan a sequence of tool calls.
                Structure your prompts to make this easy.
              </p>
              <p>Effective patterns include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong className="text-zinc-200">Scoped requests</strong> — "Use the GitHub MCP
                  server to find all open PRs from this week" is better than "what PRs are open?"
                </li>
                <li>
                  <strong className="text-zinc-200">Step-by-step framing</strong> — "First check the
                  database schema, then write a query that..." gives the model a clear execution plan.
                </li>
                <li>
                  <strong className="text-zinc-200">Result specification</strong> — tell the model
                  what format you want the tool output in before it starts: "summarize each PR in
                  one sentence."
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-200 mb-2">
                Multi-Turn Conversation Design
              </h3>
              <p>
                MCP shines in multi-turn conversations where each turn builds on the last. Design your
                prompts to take advantage of this:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong className="text-zinc-200">Anchor context early</strong> — in the first
                  message, establish the project scope, relevant file paths, and which MCP servers to
                  use. The model carries this forward.
                </li>
                <li>
                  <strong className="text-zinc-200">Reference prior tool results explicitly</strong> —
                  "Based on the schema you just read, write a query that..." keeps the model grounded.
                </li>
                <li>
                  <strong className="text-zinc-200">Close loops</strong> — end each major task with a
                  summary the model can reference in the next turn. "Great, the file has been
                  written. Here is what we did: [summary]."
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Context Management Techniques
          </h2>
          <p>
            One of the most common complaints from MCP users: "The AI forgets context." This is usually
            a context management problem, not a model memory problem. Here is how to fix it.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-zinc-100">What to Include vs. Exclude</h3>
              <p>
                Not all context is equal. Verbose logs, raw API responses, and irrelevant file
                contents can push useful context out of the window. Be intentional:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong className="text-zinc-200">Include</strong> — file paths, key function names,
                  error messages, the goal you are working toward.
                </li>
                <li>
                  <strong className="text-zinc-200">Exclude</strong> — full file contents when only a
                  specific section matters, verbose stack traces (summarize instead), build output
                  unless specifically relevant.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-100">Chunking Large Contexts</h3>
              <p>
                When you need to feed large amounts of information through MCP, chunk it. Instead of
                asking the model to "read the entire codebase," split it by module or feature:
              </p>
              <p>
                <em className="text-zinc-400">"First, read the auth module files. Tell me the key
                functions. Then we will move to the API layer."</em>
              </p>
              <p>
                This mirrors how an experienced developer would onboard a human colleague — not by
                dumping everything at once.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-100">Priority Framing</h3>
              <p>
                When context is at risk of overflowing, the model needs to know what matters most.
                Use explicit priority signals in your prompts:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>"The most important constraint is [X] — prioritize that over [Y]."</li>
                <li>"Ignore the legacy files; focus only on the new codebase."</li>
                <li>"If you have to drop context, keep the error message and drop the logs."</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Advanced MCP Prompting Patterns
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-zinc-100">
                Few-Shot Examples in MCP Workflows
              </h3>
              <p>
                Few-shot prompting works differently with MCP. Instead of just showing input-output
                pairs, you can show the model a full tool-call sequence. For example:
              </p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-sm">
                <p className="text-zinc-400">{"// Example: Finding and reviewing a PR"}</p>
                <p className="text-green-400">User: Find my open PRs</p>
                <p className="text-blue-400">{"→ github_mcp.list_pull_requests(state: \"open\")"}</p>
                <p className="text-zinc-400">{"→ [PR #42: Fix auth bug, PR #38: Update deps]"}</p>
                <p className="text-green-400">User: What changed in #42?</p>
                <p className="text-blue-400">{"→ github_mcp.get_pr_details(pr_number: 42)"}</p>
                <p className="text-zinc-400">{"→ [Shows diff summary]"}</p>
              </div>
              <p className="text-sm text-zinc-400 mt-2">
                Showing the model the expected tool-call pattern before asking for a new task produces
                far more reliable tool usage than describing the pattern in prose.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-100">
                Chain-of-Thought With MCP Tools
              </h3>
              <p>
                Chain-of-thought prompting gains a new dimension with MCP — the model can use tools
                to validate its reasoning at each step. Structure prompts to encourage this:
              </p>
              <p>
                <em className="text-zinc-400">"Before writing the query, first check the database
                schema to confirm the table exists and note the column types. Then explain your
                approach before executing."</em>
              </p>
              <p>
                This creates a feedback loop where tool outputs inform the next reasoning step, rather
                than the model blindly executing a plan it formed before seeing the data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-100">
                Role-Based Prompting
              </h3>
              <p>
                Assigning a clear role in your system prompt focuses the model's tool selection.
                Compare:
              </p>
              <p>
                <em className="text-zinc-400">"Help me with my code."</em> vs.{' '}
                <em className="text-zinc-400">"You are a backend engineer debugging a PostgreSQL
                connection issue. Use the database MCP server to check current connections and
                identify the bottleneck."</em>
              </p>
              <p>
                The second version automatically narrows the tool set the model considers, reducing
                irrelevant tool calls and improving response quality.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Common Prompting Mistakes With MCP
          </h2>
          <div className="space-y-3">
            {[
              {
                mistake: 'Assuming tools are always available',
                fix: 'Always verify MCP server connections at the start of a session. Ask the model to list available tools before assigning complex tasks.',
              },
              {
                mistake: 'Prompting without scoping tool access',
                fix: 'Specify which MCP servers are in scope for each task. Ambiguous prompts cause the model to pick the wrong tool or make unnecessary tool calls.',
              },
              {
                mistake: 'Feeding raw, unfiltered outputs into follow-up prompts',
                fix: 'Summarize or extract the relevant parts from tool outputs before continuing. Long raw outputs dilute context quality.',
              },
              {
                mistake: 'Not setting confirmation boundaries',
                fix: 'Be explicit about which actions require your approval. A misplaced git push or file overwrite can be costly.',
              },
              {
                mistake: 'Expecting linear responses from a non-linear system',
                fix: 'MCP is event-driven. The model may call tools in an order you did not expect. Design prompts that accommodate this, and ask for a plan before execution for high-stakes tasks.',
              },
            ].map(({ mistake, fix }) => (
              <div key={mistake} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                <p className="font-semibold text-red-400 mb-1">✗ {mistake}</p>
                <p className="text-sm text-zinc-400">
                  <span className="text-green-400">Fix: </span>
                  {fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Quick Reference: MCP Prompting Cheat Sheet
          </h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-5">
            {[
              {
                category: 'System Prompt',
                rules: [
                  'Define active MCP servers explicitly',
                  'Set confirmation thresholds for dangerous tool calls',
                  'Specify fallback behavior on tool failure',
                  'Include tool selection criteria',
                ],
              },
              {
                category: 'Tool Calling',
                rules: [
                  'Scope requests to specific servers: "Use [X] MCP to..."',
                  'Specify output format before calling: "Summarize each result in one line"',
                  'Break complex tasks into sequential scoped steps',
                  'Reference prior tool results explicitly in follow-ups',
                ],
              },
              {
                category: 'Context Management',
                rules: [
                  'Exclude raw logs; summarize error messages instead',
                  'Chunk large context by module or feature',
                  'Anchor project scope in the first message',
                  'Use priority signals when context is at risk: "X matters more than Y"',
                ],
              },
              {
                category: 'Advanced Patterns',
                rules: [
                  'Show full tool-call sequences as few-shot examples',
                  'Use chain-of-thought with tool validation at each step',
                  'Assign explicit roles to narrow tool selection',
                  'Request a plan before execution on high-stakes tasks',
                ],
              },
              {
                category: 'MCP Hosting Tip',
                rules: [
                  'Use a managed MCP hosting platform like MCPize to avoid infrastructure headaches and focus on prompting quality.',
                ],
              },
            ].map(({ category, rules }) => (
              <div key={category}>
                <h3 className="font-semibold text-zinc-100 mb-2">{category}</h3>
                <ul className="space-y-1">
                  {rules.map((rule) => (
                    <li key={rule} className="text-sm text-zinc-300 flex gap-2">
                      <span className="text-blue-400 flex-shrink-0">→</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Putting It Together</h2>
          <p>
            MCP prompting is a skill that rewards precision. The better your prompts, the more
            effectively your AI leverages connected tools instead of getting lost in them. Start with
            a strong system prompt, scope each conversational turn carefully, and always give the model
            signals about what matters most when context is limited.
          </p>
          <p>
            If you are building MCP-powered workflows and want a reliable hosting platform that handles
            infrastructure so you can focus on the prompting layer, check out{' '}
            <a
              href="https://mcpize.com?ref=A7RDJ"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              MCPize
            </a>
            . And for managing AI-assisted workflows on your Mac,{' '}
            <a
              href="https://raycast.com/?via=zhang-yao"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Raycast
            </a>{' '}
            is worth exploring as a productivity launcher that integrates well with MCP workflows.
          </p>
          <p>
            The developers who master MCP prompting in 2026 will get dramatically better results than
            those who treat it like a standard chat interface. Start applying these patterns today.
          </p>
        </section>
      </div>
    </article>
  );
}
