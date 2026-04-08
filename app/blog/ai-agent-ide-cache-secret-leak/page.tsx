import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '你的 AI Coding 工具正在后台偷偷缓存 API Key——这个漏洞很多人不知道',
  description:
    'Claude Code 的 ~/.claude 目录、Codex 的 ~/.codex 目录，都在悄悄存储包含明文 API Key 的对话历史。即使你严格使用了 .env 文件，只要 Key 曾在对话中被提及，它就已经进入了缓存。',
  keywords: [
    'claude code security',
    'api key security ai coding tools',
    'ide cache api keys',
    'agent memory security',
    'mcp security',
    'claude code ~/.claude directory',
  ],
};

export default function AIAgentIDECacheSecretLeakPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published April 8, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          你的 AI Coding 工具正在后台偷偷缓存 API Key
        </h1>
        <p className="text-zinc-400 text-lg">
          r/ClaudeAI 昨天炸出来一个帖子：一个开发者发现自己的 Claude Code
          在调试连接时"顺手"把他的 API Key 记录进了 IDE 缓存。即使他之前根本没打算让 Key
          上任何日志。这个漏洞不是 Bug，是设计逻辑——而知道它的人太少了。
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'claude code security',
            'api key security ai coding tools',
            'ide cache api keys',
            'agent memory security',
            'mcp security',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">问题是怎样发生的</h2>
          <p>
            开发者最常用的安全习惯：把 API Key 放在 .env 文件里，通过环境变量加载，绝对不硬编码。
            这是对的，标准操作。
          </p>
          <p>
            但在 AI Coding 工具里，这个逻辑出现了一个裂缝：
          </p>
          <p>
            当 Claude Code 帮你调试一个连接问题时，它可能需要在对话里提到 Key 才能理解上下文——
            比如问你"这个连接失败是不是因为 API Key 过期了"，或者直接把 Key 打印出来看。
            这个操作本身不会把 Key 写入你的源代码。但它会写入{' '}
            <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">~/.claude</code> 目录下的
            对话历史文件。
          </p>
          <p>
            Reddit 帖子原话是这么说的：
            <em className="text-zinc-400">
              "Even when a developer is careful to use a .env file, the moment a key is mentioned
              in a chat or read by the agent to debug a connection, it is recorded in one of the
              IDE caches."
            </em>
          </p>

        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">这些目录里都存了什么</h2>
          <p>
            根据多个来源确认，以下目录都存在类似行为：
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">~/.claude</code> — Claude Code
              的主缓存目录，存储会话历史、项目上下文、工具调用记录
            </li>
            <li>
              <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">~/.codex</code> — OpenAI Codex
              的缓存目录，同样记录完整对话历史
            </li>
            <li>
              IDE 自身的对话面板缓存（Chat History 里的内容，取决于 IDE 实现）
            </li>
          </ul>
          <p>
            这些文件是明文存储的。在大多数系统上，它们的权限设置是{' '}
            <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">rw-------</code>，
            意味着只有当前用户能读。但这是有前提的：你的机器被入侵了，这些文件就成了攻击者的目标。
            更重要的是：如果你的笔记本丢了，捡到的人不需要什么高级手法， cat 一下就能拿到历史记录里的 Key。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">不只是 API Key——对话历史本身就是敏感数据</h2>
          <p>
            把 API Key 当作唯一的攻击面是低估了这个问题的范围。
            Claude Code 的对话历史里还可能包含：
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>数据库连接字符串和内网地址</li>
            <li>第三方服务的 token（GitHub、AWS、Vercel）</li>
            <li>尚未发布的代码逻辑和商业机密</li>
            <li>内部系统的 URL 和架构描述</li>
            <li>用户数据片段（取决于你问 AI 什么）</li>
          </ul>
          <p>
            这意味着即使你不直接问 Claude Code 任何敏感问题，它在帮你工作时，
            只要在上下文中出现过这些东西，它们就会被记住——以文件的形式。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">为什么这个问题没有被广泛讨论</h2>
          <p>
            核心原因是：这个漏洞的存在形态是"设计选择"，而不是"明显错误"。
            AI 工具需要维护对话历史来提供连续性体验——你下次打开项目时，
            Claude Code 需要知道你们上次聊到哪里了。这本身是合理的功能。
          </p>
          <p>
            问题在于：这个"连续性"的代价是把敏感数据写入了本地文件，
            而用户往往不知道这些文件在哪里、内容是什么。
          </p>
          <p>
            而且：即使 AI 工具厂商把这个行为定性为漏洞，他们也需要在
            "保留对话历史以提升体验"和"自动过滤所有潜在敏感信息"之间做权衡。
            后者做不好会让工具变得很蠢——你问它"帮我调试这个 API"，它说"抱歉我看不到你的请求内容"。
            所以目前大多数厂商选择了前者，然后提醒用户"自己注意"。
          </p>
          <p>
            这个问题实际上在 Hacker News 上也引起过讨论——有人提到自己团队的 Claude Code
            会话记录里包含了内部的 AWS 内部地址段，最终不得不全面清理。
            但这类事件很少被写成文章，因为出事了大家倾向于低调处理，而不是发出来。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">你现在能做的几件事</h2>
          <p>
            没有完美的解决方案，但有一些实用的降低风险的手段：
          </p>

          <div className="space-y-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">定期清理对话缓存目录</h3>
              <p className="text-sm text-zinc-400">
                把清理 <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">~/.claude</code> 和{' '}
                <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">~/.codex</code> 纳入你的安全维护流程。
                每月清理一次，或者在处理完敏感项目之后立刻清理。
                注意：清理后你需要重新引导 Claude Code 了解项目上下文，这是代价。
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">在 .env 文件中使用哑变量名，而非真实 Key</h3>
              <p className="text-sm text-zinc-400">
                告诉 Claude Code："API_KEY 是你的环境变量，值为 os.getenv('API_KEY')，
                不要在对话中直接提及或打印具体值。"
                这样它调试时就不会把真实 Key 写进日志。
                这个方法不能百分百防住——Claude Code 有时候会忽略这类指令——但能降低概率。
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">机器丢失/被黑的威胁模型</h3>
              <p className="text-sm text-zinc-400">
                如果你的 threat model 里包含"笔记本被物理拿走"或"机器被远程入侵"，
                那么本地缓存的对话历史文件是真实的攻击面。
                对这种场景，使用全盘加密（FileVault on macOS, LUKS on Linux）是最低成本的防线。
                同时考虑把 ~/.claude 和 ~/.codex 目录加入你的加密备份排除列表——不要把它们上传到未加密的云备份。
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">使用 MCP 托管平台而非本地工具处理敏感项目</h3>
              <p className="text-sm text-zinc-400">
                这是一步到位的方案：如果你的代码仓库里含有真正敏感的资产，
                考虑使用 MCP 托管平台（如{' '}
                <a
                  href="https://mcpize.com?ref=A7RDJ"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  MCPize
                </a>
                ）来运行 AI Coding 任务，而不是在本地跑。
                托管平台通常提供会话隔离和即用即焚的运行环境，不会在持久化存储里留下对话历史。
                对团队来说，这也是一个可控的审计入口——你可以看到谁、在什么时间、调用了什么工具。
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">这是 AI Coding 工具的成长烦恼</h2>

          <p>
            简单说：把 AI Coding 工具当作你团队里一个不知道边界在哪里、但干活很勤快的实习生。
            你会给他访问权限，但你不会让他单独接触你的银行账户。
            对话历史的缓存问题，本质上就是：他记住了太多不该记住的东西。
          </p>
        </section>
      </div>
    </article>
  );
}
