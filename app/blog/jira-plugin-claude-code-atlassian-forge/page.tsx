import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'I Built a Jira Plugin with Claude Code in 10 Minutes. Atlassian Forge Almost Killed Me.',
  description:
    'Claude Code wrote the whole thing. Then I tried to ship it. What I learned about why Jira Data Center plugin development is still a nightmare — and how MCP tools can soften the blow.',
  keywords: [
    'jira plugin development',
    'atlassian forge claude code',
    'jira data center plugins',
    'claude code productivity',
    'jira post-function plugins',
    'mcp for jira',
  ],
};

export default function JiraPluginClaudeCodePage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published April 11, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          I Built a Jira Plugin with Claude Code in 10 Minutes. Atlassian Forge Almost Killed Me.
        </h1>
        <p className="text-zinc-400 text-lg">
          A thread on r/jira the other day described the classic sequence: you open Claude Code, give
          it the Atlassian SDK docs link, and watch it generate a working Jira post-function plugin
          in minutes. <strong className="text-zinc-200">The code looks great. It compiles. You
          feel invincible.</strong> Then you try to actually deploy it and the Atlassian Forge CLI
          starts throwing errors that make zero sense.
        </p>
        <p className="text-zinc-400">
          This is the Jira plugin development paradox in 2026. AI coding tools have collapsed the
          time it takes to write the code. The deployment infrastructure has not kept up.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'jira plugin development',
            'atlassian forge claude code',
            'jira data center plugins',
            'claude code productivity',
            'jira post-function plugins',
            'mcp for jira',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">The Setup: You Think You Are Winning</h2>
          <p>
            Let me paint the picture. You have a Jira Data Center instance running at your company.
            Every sprint, the ops team manually updates a custom field based on ticket transitions.
            Someone asks if it can be automated. You think: I&apos;ll ask Claude Code.
          </p>
          <p>
            You give Claude Code the Atlassian Forge documentation, describe the post-function behavior
            you want, and in about ten minutes it generates a plugin with the right lifecycle hooks,
            the correct Jira Data Center API calls, and even handles the error cases. The code is clean.
            Variable names make sense. It uses the modern Forge SDK structure.
          </p>
          <p>
            You run the local Forge simulation — <code className="text-zinc-200">forge deploy</code> —
            and it looks like it works. You feel smug. <strong className="text-zinc-200">This is the
            trap.</strong>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">The Forgetting: Where Atlassian Drops the Ball</h2>
          <p>
            Atlassian Forge is not a bad concept. It is a runtime and CLI for extending Atlassian
            products — Jira, Confluence, etc. The problem is the ecosystem around it:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-zinc-200">Documentation that moves faster than you can read it.</strong> APIs
              change between minor versions. Tutorials refer to deprecated methods. The docs for
              Forge&apos;s Data Center support are thinner than the cloud docs and less maintained.
            </li>
            <li>
              <strong className="text-zinc-200">A CLI that does not have opinions about your project structure.</strong> If
              your plugin grows past a certain complexity, you are managing your own architecture.
              Forge gives you a runtime, not a framework.
            </li>
            <li>
              <strong className="text-zinc-200">Marketplace post-function gaps.</strong> The old Atlassian
              ecosystem had a healthy marketplace of free post-function plugins. Many of those
              projects died when Forge launched. The new marketplace does not fill the gap — especially
              for Data Center customers who need server-side plugins, not cloud apps.
            </li>
            <li>
              <strong className="text-zinc-200">Stack Overflow is a ghost town for Forge questions.</strong> When you
              hit an error, you are mostly on your own. Atlassian Community forums are slow. The
              Slack channels are thin. You end up reading the source code of the CLI to understand
              what went wrong.
            </li>
          </ul>
          <p>
            One developer on r/jira described the experience perfectly: building the plugin was the
            easy part. <em>&ldquo;The hard part was getting Atlassian to agree to let my plugin run on
            my own server.&rdquo;</em> That is a quoting worth sitting with.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Why Claude Code Gives You False Confidence</h2>
          <p>
            Claude Code is genuinely good at understanding Atlassian&apos;s Java API surface. It can
            read the Javadoc, interpret the plugin lifecycle, and generate syntactically correct code.
            This is useful — and it is also dangerous.
          </p>
          <p>
            The code it generates is correct in isolation. The problem is that Jira plugin development
            is not a code problem — it is an <strong className="text-zinc-200">ecosystem navigation
            problem</strong>. The questions that will block you are not about writing a post-function
            class. They are questions like:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Which version of the Atlassian SDK does my Jira Data Center version support?</li>
            <li>How do I package this as an OSGi bundle that Data Center will accept?</li>
            <li>The <code className="text-zinc-200">DescriptorHandler</code> is returning a 403 in simulation — is this a permissions issue or a deployment config issue?</li>
            <li>How do I debug this when the Forge CLI&apos;s error messages are one line long?</li>
          </ul>
          <p>
            These are not questions that code generation solves. They require access to specific,
            versioned, often undocumented behavior of Atlassian&apos;s platform. Claude Code can write
            the code. It cannot tell you what version of the plugin framework your Jira instance is
            running.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Where MCP Tools Actually Help</h2>
          <p>
            Here is what the MCP ecosystem is starting to offer for exactly this problem:
          </p>
          <h3 className="text-xl font-semibold text-zinc-100">MCP Servers for API Reference on Demand</h3>
          <p>
            The real blocker in Atlassian Forge development is not writing code — it is knowing which
            Atlassian API to call for your specific Jira version and plugin context. An MCP server
            that indexes the Atlassian SDK and plugin framework documentation, exposed to Claude Code
            as a queryable tool, could answer the version-specific questions that the public docs
            bury or ignore.
          </p>
          <p>
            This is a genuine gap. Nobody has shipped a well-maintained Atlassian API MCP server yet —
            but the architecture is straightforward. The SDK Javadoc is public. A scraper, a RAG
            pipeline, and a lightweight MCP server wrapper would give Claude Code (and developers
            directly) a Q&amp;A interface over the specific Atlassian API surface they need.
          </p>
          <p>
            <strong className="text-zinc-200">If you are a solo developer who has been burned by
            Atlassian versioning before, building this MCP server is a real product idea.</strong> The
            demand is there. The community will find it.
          </p>
          <h3 className="text-xl font-semibold text-zinc-100">Pre-Built Jira Workflow MCP Connectors</h3>
          <p>
            For teams not looking to build plugins from scratch, the existing MCP server ecosystem
            includes early connectors for Jira&apos;s REST API. These are useful for reading Jira
            data, updating issues, and triggering transitions — all from within Claude Code or Cursor.
            Not quite the same as building a Data Center post-function, but useful for automating
            the workflow <em>around</em> Jira tickets.
          </p>
          <p>
            The specific pain of writing <strong className="text-zinc-200">server-side post-function
            plugins</strong> for Jira Data Center has not been solved by MCP yet — it is a genuinely
            hard problem that requires understanding Atlassian&apos;s OSGi plugin model. But for the
            80% of Jira automation that does not require a plugin — automations, transitions, bulk
            updates, custom field manipulations — MCP-connected Claude Code is already useful.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">The Practical Path Forward</h2>
          <p>
            If you are a developer who needs to extend Jira Data Center and AI coding tools are part
            of your workflow, here is the honest advice:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong className="text-zinc-200">Use Claude Code to generate the code</strong> — it genuinely
              helps with the boilerplate and API call patterns. Do not feel bad about this. It is the
              right use of the tool.
            </li>
            <li>
              <strong className="text-zinc-200">Treat the Forge CLI as a second project.</strong> Budget time
              to understand how Forge deploys, how Data Center differs from cloud, and how the plugin
              lifecycle works in your Jira version. This is not a 10-minute task.
            </li>
            <li>
              <strong className="text-zinc-200">Query the Atlassian Community forums before Stack Overflow</strong> — the
              community is more active and the answers are more likely to reflect recent Forge changes.
            </li>
            <li>
              <strong className="text-zinc-200">Look for existing marketplace plugins before building custom.</strong> If
              your need is common (auto-transitioning tickets, custom field calculations, SLA
              tracking), someone has probably built it. The ecosystem is thin but not empty.
            </li>
            <li>
              <strong className="text-zinc-200">Consider whether a Jira automation rule + scripted
              field</strong> can solve the problem without a plugin at all. Atlassian&apos;s native
              automation engine has grown significantly. Sometimes the plugin is overkill.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">The Irony Worth Noting</h2>
          <p>
            Atlassian built Forge to make plugin development more accessible. The irony is that AI
            coding tools have done more for plugin accessibility than Forge&apos;s own tooling
            has. <strong className="text-zinc-200">Claude Code can write a Jira plugin in 10 minutes.
            Forge still takes a day to get your local environment configured correctly.</strong>
          </p>
          <p>
            This is a pattern I keep seeing: AI coding tools are collapsing the skill barrier for
            writing code. The deployment, ecosystem, and platform integration barriers remain.
            Forge is a good example of that gap in the wild.
          </p>
          <p>
            For developers navigating this space, MCP tools — particularly API-indexed MCP servers
            that give AI coding assistants accurate, version-specific platform knowledge — are the
            most promising near-term solution. They do not eliminate the platform friction. But they
            reduce the amount of time you spend reading the wrong version of the documentation.
          </p>
          <p>
            For teams looking to run their own MCP infrastructure and avoid per-seat SaaS costs when
            extending development workflows like this,{' '}
            <a
              href="https://mcpize.com?ref=A7RDJ"
              className="text-blue-400 hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              MCPize
            </a>{' '}
            offers MCP server hosting with cost visibility built in — useful when your team is
            running multiple AI-assisted development workflows simultaneously.
          </p>
        </section>
      </div>
    </article>
  );
}
