import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 能给代码分支，但改数据库全靠"碰运气"——MCP 怎么补上这个缺口',
  description:
    'Reddit 上一个帖子炸出了个老问题：AI 编程助手可以轻松创建 Git 分支，但当它要改数据库的时候，大多数团队还在用"希望不要出事"这种原始方法。MongoBranch 的出现是个信号，而 MCP 协议可能是真正的解法。',
  keywords: [
    'MCP database workflow',
    'AI agent database safety',
    'MCP server database version control',
    'AI agents database branches',
    'MCP MongoDB integration',
  ],
};

export default function MCPDatabaseWorkflowAIAgentsPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-4 pb-8 border-b border-zinc-800">
        <p className="text-zinc-500 text-sm">Published April 9, 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          AI 能给代码分支，但改数据库全靠"碰运气"
        </h1>
        <p className="text-zinc-400 text-lg">
          Reddit 上有人说了句大实话：AI 编程助手可以轻松创建 Git 分支，
          但当它要改数据库的时候，大多数团队还在用"希望不要出事"这种原始方法。
          这个问题不大，但很致命——而 MCP 可能是目前最接近解法的东西。
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'MCP database workflow',
            'AI agent database safety',
            'MCP server',
            'database version control',
          ].map((kw) => (
            <span key={kw} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {kw}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">那句话是怎么出来的</h2>
          <p>
            这周 r/mongodb 上有个帖子（
            <a
              href="https://www.reddit.com/r/mongodb/comments/1sgmir2/i_built_git_for_mongodb_branches_commits_threeway/"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              MongoBranch CLI
            </a>
            ），楼主的原话是这样的：
          </p>
          <blockquote className="border-l-4 border-zinc-700 pl-4 italic text-zinc-400">
            "AI agents can write code into branches. But when they write to databases, most teams
            still use 'hope.'"
          </blockquote>
          <p>
            这不是夸张。在真实工作流里，问题暴露得很清楚：
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              你让 Claude Code 给你加个字段，它开分支、写代码、创建 PR，
              有人 review，通过了再合并——标准的 Git 流程。
            </li>
            <li>
              同一个人让它往 MongoDB 里加个集合？它可能直接就连上去了，
              没有任何预览、没有任何回滚预案。成功了算你运气好，
              失败了——你希望你的备份是新的。
            </li>
          </ul>
          <p>
            代码有分支、有 PR、有 diff、有 blame。数据库有什么？
            大多数项目里，答案就是：什么都没有。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">MongoBranch 做了什么</h2>
          <p>
            帖子作者做了个 CLI 工具，叫 MongoBranch，基本思路是把 Git 的工作流搬进 MongoDB：
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>数据库分支（branch）——在主库之外开个实验环境</li>
            <li>提交（commit）——记录每一步变更</li>
            <li>三向合并（three-way merge）——解决冲突</li>
            <li>Diff 和时间旅行（time travel）——任意时间点回滚</li>
            <li>Blame——查是谁改了哪条记录</li>
            <li>PR-style review——合入前有人过目</li>
          </ul>
          <p>
            这东西做得很扎实。但更重要的是它的定位：
            <strong className="text-zinc-100">不是给人用的，是给 AI Agent 用的。</strong>
          </p>
          <p>
            作者在帖子里明确说：这个工具的 target user 是 AI agent 数据库工作流。
            Agent 需要确定性、可回滚、有审计的数据库操作——而现有的工具链完全没有覆盖这个场景。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">MCP 协议在这里能做什么</h2>
          <p>
            MCP（Model Context Protocol）本身的定位是 AI 工具的通用接口协议。
            它解决的核心问题是：AI 模型怎么以结构化的方式调用外部工具，
            而不只是塞给它一个 API endpoint 然后祈祷它用对。
          </p>
          <p>
            数据库工作流的缺失，恰好是 MCP 能补上的地方：
          </p>

          <div className="space-y-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">结构化调用 vs. 裸 SQL 拼装</h3>
              <p className="text-sm text-zinc-400">
                Agent 直接写 SQL/MongoDB 命令的问题是：你不知道它会生成什么。
                MCP Server 可以定义一套有 schema 的工具——Agent 调用{' '}
                <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">db.create_collection()</code>{' '}
                时，实际上是在 MCP 层走了一个有参数校验、有权限控制的路径，
                而不是直接连上数据库执行原始命令。
                这就像有了 TypeScript 编译器把关，而不是靠代码 review 抓 typo。
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">操作记录自动留存</h3>
              <p className="text-sm text-zinc-400">
                MCP Server 可以在每次工具调用时自动生成操作日志。
                这解决了 Git 没有的一个问题：Git 记录的是代码状态变化，
                不记录数据库的迁移历史。
                MCP 层可以在应用层补上这个审计轨迹——谁、在什么时间、通过什么上下文、触发了什么数据库写操作。
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">强制人类确认（Human-in-the-loop）</h3>
              <p className="text-sm text-zinc-400">
                MCP 协议支持 Tool 的定义，也支持在特定操作前插入确认步骤。
                这让"PR-style review before merge"可以在 MCP 层实现：
                Agent 想要执行高风险写操作（如删除集合、修改索引），MCP Server 可以触发暂停，
                等待人类确认后再执行。这不是禁止 AI 做事，而是确保它在有人看着的情况下做。
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">但说实话，大多数团队还没到这个层次</h2>
          <p>
            上面说的听起来很美好，但现实是：很多团队连 MCP Server 都没搭，
            整个 AI Coding 工作流就是本地 Claude Code 直连数据库，
            Agent 说"我来帮你加个索引"，然后就加了。
          </p>
          <p>
            这背后有个认知问题：代码部署有成熟的 CI/CD 流程，数据库变更却没有。
            团队会给代码写测试、做 Code Review、配 CI 分支保护，
            但数据库变更？通常是 SSH 进机器，手动跑一条命令，然后心里默念不要出事。
          </p>
          <p>
            当 AI Agent 加入之后，这个矛盾只会更突出——
            Agent 的执行速度远快于人类，错误的数据库操作造成的影响也会更快、更广。
            你的 Agent 每分钟可以尝试几百次数据库写操作，但你的人肉 review 每小时只能看几十条。
            不用 MCP 之类的结构化层来管这个事情，出事只是时间问题。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">你现在能做的事</h2>
          <p>
            不需要等 MCP 生态完全成熟才能解决这个问题：
          </p>

          <div className="space-y-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">给 AI Agent 的数据库操作加上 MCP 层</h3>
              <p className="text-sm text-zinc-400">
                即使你的团队还没有正式的 MCP Server，
                也可以在 Agent 和数据库之间加一个轻量级的代理层，
                把所有写操作记录到一张日志表里，并强制要求人类审批。
                这个代理不需要多复杂，核心就是：拦截写操作、记录日志、暂停等待确认。
                如果你用 MongoDB，MongoBranch 本身就是一个起点；
                如果你有其他数据库，找或者写类似的工具都不难。
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">选 MCP-native 的数据库托管平台</h3>
              <p className="text-sm text-zinc-400">
                如果你希望有更完整的方案，
                可以考虑使用内置 MCP Server 支持的数据库托管平台。
                平台如{' '}
                <a
                  href="https://mcpize.com?ref=A7RDJ"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  MCPize
                </a>{' '}
                支持通过 MCP 协议连接各类数据源，
                让 AI Agent 的数据库操作经过统一的协议层，而不是各 Agent 直连数据库。
                对于团队来说，这意味着你可以在 MCP 层统一配置权限、审计日志和操作策略，
                而不是在每个 Agent 的配置里单独处理。
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold text-zinc-100 mb-2">把数据库变更纳入 Code Review 流程</h3>
              <p className="text-sm text-zinc-400">
                如果你的团队已经在用 Git Flow，数据库变更应该也进同一条流。
                工具链上可以用 Liquibase 或 Flyway 这类数据库迁移工具，
                把 schema 变更写成版本化的迁移文件，走 PR review，
                合入之后由 CI 自动执行。
                AI Agent 如果用这类工具添加字段，它的操作就变成了一个 PR，
                而不是一次盲写的数据库连接。
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">"Hope"不是一个工程策略</h2>
          <p>
            那个 r/mongodb 帖子的楼主做的东西，叫 Git for MongoDB。
            这个名字本身就是一个控诉：在数据库操作这件事上，
            业界花了几十年建立起来的工程实践——分支、review、回滚、审计——在 AI Agent
            时代几乎完全缺席。
          </p>
          <p>
            MCP 协议不是银弹，但它是目前最有潜力把 AI Agent 的数据库操作从"Hope"变成"Plan"的
            基础设施层。它把工具调用从"Agent 想怎么写就怎么写"变成"Agent
            只能在被定义的范围内操作"。
          </p>
          <p>
            如果你正在用 AI Coding 工具处理任何涉及数据库修改的任务，
            问自己一个问题：我的 Agent 每次写数据库，现在有没有人在看？
            如果答案是"没有人"，那你就是在"Hope"模式下运行。
            MCP 不能完全解决这个问题，但它是第一步。
          </p>
        </section>
      </div>
    </article>
  );
}
