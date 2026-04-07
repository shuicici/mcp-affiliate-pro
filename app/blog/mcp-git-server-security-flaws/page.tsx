import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MCP Git Server Security Flaws: What Developers Need to Know',
  description:
    'Three critical vulnerabilities were discovered in Anthropic\'s official mcp-server-git, allowing arbitrary file access and code execution. Here\'s what was affected, what the risks are, and how to protect yourself.',
  keywords: [
    'mcp security',
    'mcp-server-git vulnerabilities',
    'CVE-2025-68143',
    'CVE-2025-68144',
    'CVE-2025-68145',
    'MCP git server',
    'MCP security flaws',
  ],
};

export default function McpGitServerSecurityFlawsPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published January 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          MCP Git Server Security Flaws: What Developers Need to Know
        </h1>
        <p className="text-zinc-400 text-lg">
          Three critical vulnerabilities in Anthropic&apos;s official mcp-server-git let attackers
          read arbitrary files, overwrite system content, and even execute code — all through
          prompt injection. Here&apos;s what you need to know, what&apos;s affected, and how to
          lock things down.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'mcp security',
            'mcp-server-git',
            'CVE-2025-68143',
            'CVE-2025-68144',
            'CVE-2025-68145',
            'MCP vulnerabilities',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">What Is mcp-server-git?</h2>
          <p>
            <a
              href="https://pypi.org/project/mcp-server-git/"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              mcp-server-git
            </a>{' '}
            is Anthropic&apos;s official Model Context Protocol server for Git. It is a Python
            package that gives AI assistants a structured way to read, search, and manipulate
            Git repositories — things like running diffs, checking out branches, viewing logs,
            and initializing new repos. If you are building anything with MCP that involves Git,
            there is a good chance this is one of the servers you are using or referencing.
          </p>
          <p>
            That is exactly why these vulnerabilities matter so much. This is not a niche,
            third-party package with questionable maintenance. It is the canonical reference
            implementation — the one developers are expected to copy, extend, and build on.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">The Three Vulnerabilities</h2>
          <p>
            Security researchers at{' '}
            <a
              href="https://cyata.ai/blog/cyata-research-breaking-anthropics-official-mcp-server/"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Cyata
            </a>{' '}
            discovered three distinct flaws in mcp-server-git, all disclosed responsibly to
            Anthropic in June 2025. Two were patched in September 2025, and the remaining
            issues were addressed in December 2025. Here is a breakdown of each.
          </p>

          <div className="space-y-4">
            <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-5 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-zinc-100 text-lg">
                  CVE-2025-68143 — Path Traversal in git_init
                </h3>
                <span className="text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded shrink-0">
                  CVSS 8.8
                </span>
              </div>
              <p className="text-sm text-zinc-400">
                The <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">git_init</code> tool
                accepted arbitrary filesystem paths for repository creation without any validation.
                An attacker could pass a path like <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">../../etc</code> and
                initialize a Git repo anywhere on the system writable by the server process.
                This vulnerability was fixed in version{' '}
                <strong className="text-zinc-200">2025.9.25</strong>.
              </p>
            </div>

            <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-5 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-zinc-100 text-lg">
                  CVE-2025-68144 — Argument Injection in git_diff &amp; git_checkout
                </h3>
                <span className="text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded shrink-0">
                  CVSS 8.1
                </span>
              </div>
              <p className="text-sm text-zinc-400">
                The <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">git_diff</code> and{' '}
                <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">git_checkout</code> functions
                passed user-controlled arguments directly to Git CLI commands without sanitization.
                A specially crafted branch name or path could inject additional Git arguments,
                allowing file overwrites and arbitrary command behavior. Fixed in version{' '}
                <strong className="text-zinc-200">2025.12.18</strong>.
              </p>
            </div>

            <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-5 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-zinc-100 text-lg">
                  CVE-2025-68145 — Missing Path Validation in --repository Flag
                </h3>
                <span className="text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded shrink-0">
                  CVSS 7.1
                </span>
              </div>
              <p className="text-sm text-zinc-400">
                The <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">--repository</code> flag
                was designed to restrict Git operations to a specific repository path. But it lacked
                path validation, allowing attackers to escape the intended boundary and access any
                repository on the server. Also fixed in version{' '}
                <strong className="text-zinc-200">2025.12.18</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            What Can an Attacker Actually Do?
          </h2>
          <p>
            These are not theoretical vulnerabilities. The Cyata team demonstrated a full attack
            chain that chains all three together with the Filesystem MCP server to achieve remote
            code execution. Here is how it works:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong className="text-zinc-200">Use git_init</strong> to create a Git repository in
              a writable directory on the system.
            </li>
            <li>
              <strong className="text-zinc-200">Use the Filesystem MCP server</strong> to write a
              malicious <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">.git/config</code>{' '}
              file containing a clean filter — a Git hook that executes arbitrary commands.
            </li>
            <li>
              <strong className="text-zinc-200">Write a .gitattributes file</strong> to apply the
              filter to specific file types.
            </li>
            <li>
              <strong className="text-zinc-200">Write a shell script payload</strong> that the
              filter will execute.
            </li>
            <li>
              <strong className="text-zinc-200">Call git_add</strong> to stage a file that triggers
              the clean filter — executing the payload under the server process&apos;s user context.
            </li>
          </ol>
          <p>
            The entry point is prompt injection: an attacker does not need direct system access.
            They just need to influence what an AI assistant reads — a malicious README, a poisoned
            Git commit message, a compromised issue description, or even a crafted webpage. The AI
            picks it up, the MCP server processes it, and the attack chain runs.
          </p>
          <p>
            Even without chaining to code execution, the vulnerabilities individually allow reading
            and deleting arbitrary files and accessing repositories outside the intended scope. If
            you are running mcp-server-git on a shared system or with elevated permissions, the
            blast radius is significant.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Which Versions Are Affected?</h2>
          <p>
            The vulnerabilities were introduced in older versions of mcp-server-git and were patched
            across two releases:
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left px-4 py-3 text-zinc-400 font-medium">Vulnerability</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-medium">CVSS</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-medium">Fixed In</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800/50">
                  <td className="px-4 py-3 text-zinc-300">
                    <code className="text-sm">CVE-2025-68143</code> — git_init path traversal
                  </td>
                  <td className="px-4 py-3 text-red-400 font-medium">8.8</td>
                  <td className="px-4 py-3 text-green-400">2025.9.25</td>
                </tr>
                <tr className="border-b border-zinc-800/50">
                  <td className="px-4 py-3 text-zinc-300">
                    <code className="text-sm">CVE-2025-68144</code> — argument injection
                  </td>
                  <td className="px-4 py-3 text-red-400 font-medium">8.1</td>
                  <td className="px-4 py-3 text-green-400">2025.12.18</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-zinc-300">
                    <code className="text-sm">CVE-2025-68145</code> — --repository path traversal
                  </td>
                  <td className="px-4 py-3 text-red-400 font-medium">7.1</td>
                  <td className="px-4 py-3 text-green-400">2025.12.18</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            If you are running any version before <strong className="text-zinc-200">2025.12.18</strong>,
            you are exposed to at least one of these vulnerabilities. Update immediately. As a further
            hardening step, the <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">git_init</code>{' '}
            tool has been removed entirely from the package — if you rely on it, you will need to
            find an alternative approach.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">How to Protect Yourself</h2>
          <p>
            Beyond updating the package, here are the practical steps you should take right now.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-4">
            <h3 className="text-lg font-semibold text-zinc-100">Immediate Actions</h3>
            <ul className="space-y-3">
              {[
                {
                  step: 'Update mcp-server-git',
                  detail:
                    'pip install --upgrade mcp-server-git or update via your package manager. Target version 2025.12.18 or later.',
                },
                {
                  step: 'Audit which MCP clients use this server',
                  detail:
                    'Identify every AI assistant, agent, or workflow that connects to mcp-server-git. Check the exact version running in each context.',
                },
                {
                  step: 'Remove git_init usage',
                  detail:
                    'Since this tool was removed, audit your prompts and workflows that may have relied on it and find alternatives.',
                },
                {
                  step: 'Review filesystem access',
                  detail:
                    'If mcp-server-git runs alongside the Filesystem MCP server (which was used in the full exploit chain), treat them as a combined attack surface. Restrict the Filesystem server&apos;s permissions too.',
                },
              ].map((action) => (
                <li key={action.step} className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-0.5">⚠</span>
                  <div>
                    <strong className="text-zinc-200">{action.step}:</strong>{' '}
                    <span className="text-zinc-400">{action.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <h3 className="text-lg font-semibold text-zinc-100">Host MCP Servers with Built-In Security</h3>
            <p>
              Managing MCP server security hardening, dependency updates, and vulnerability patches
              takes real ongoing effort. If you want production-grade security without managing it
              yourself, consider a hosted MCP platform that treats security as a first-class concern.{' '}
              <a
                href="https://mcpize.com?ref=A7RDJ"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                MCPize
              </a>{' '}
              provides managed MCP server hosting with automatic security patching, network isolation,
              secret management, and audit logging built in — so you can focus on building rather
              than chasing CVE announcements.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
            General MCP Security Best Practices
          </h2>
          <p>
            These vulnerabilities are a reminder that the MCP ecosystem is still maturing, and
            security needs to be considered at every layer. Here is what you should be doing
            regardless of which MCP servers you run.
          </p>

          <div className="space-y-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">
                Assume every MCP server can be compromised
              </h3>
              <p className="text-sm text-zinc-400">
                Whether through vulnerabilities like these or through prompt injection, MCP servers
                are not hermetically sealed. Run them with the minimum filesystem and network access
                they need — nothing more.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">
                Never trust untrusted content as MCP input
              </h3>
              <p className="text-sm text-zinc-400">
                The attack chain described here starts with prompt injection — feeding malicious content
                into an AI assistant. Be cautious about processing Git commits, README files, issue
                comments, or any user-generated content from untrusted sources through MCP servers
                with file or system access.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">
                Keep MCP servers on isolated networks
              </h3>
              <p className="text-sm text-zinc-400">
                Do not expose MCP servers directly to the internet. Run them on internal networks or
                behind reverse proxies that enforce TLS and authentication. If a server must be
                internet-facing, treat it as a high-risk asset and apply extra hardening.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">
                Review your MCP server supply chain
              </h3>
              <p className="text-sm text-zinc-400">
                You are only as secure as the weakest link in your MCP server stack. Use servers from
                trusted sources, pin to specific versions, subscribe to security advisories for the
                servers you use, and have an update process in place. Platforms like{' '}
                <a
                  href="https://mcpize.com?ref=A7RDJ"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  MCPize
                </a>{' '}
                handle this automatically by maintaining and patching servers on your behalf.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">
                Monitor and log MCP activity
              </h3>
              <p className="text-sm text-zinc-400">
                You cannot detect exploitation if you are not watching. Log which tools are invoked,
                with what arguments, by which client, and at what time. Set up alerts for anomalous
                patterns — especially git_init calls, unusual file access, or operations from
                unexpected sources.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">The Bigger Picture</h2>
          <p>
            Shahar Tal, CEO of Cyata, put it well: &ldquo;This is the canonical Git MCP server,
            the one developers are expected to copy. If security boundaries break down even in the
            reference implementation, it is a signal that the entire MCP ecosystem needs deeper
            scrutiny.&rdquo;
          </p>
          <p>
            The vulnerabilities in mcp-server-git are not edge cases or exotic configurations.
            They worked out of the box. That should give everyone in the MCP ecosystem — developers,
            platform builders, and AI practitioners — pause. The convenience of giving AI models
            direct access to powerful tools like Git comes with real security responsibilities.
          </p>
          <p>
            The good news: these vulnerabilities were found, responsibly disclosed, and fixed.
            The fix was shipped. But one set of vulnerabilities being found does not mean the
            ecosystem is secure. It means the baseline has improved, and the rest of the work —
            auditing your own deployments, applying least-privilege principles, monitoring for
            unusual activity — still falls on you.
          </p>
          <p>
            Update your servers, review your configurations, and if you do not want to manage
            MCP server security patches yourself,{' '}
            <a
              href="https://mcpize.com?ref=A7RDJ"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              find a hosting platform that takes security seriously
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
