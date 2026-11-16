# Dr. Shepard

A single home for the agent skills and code I've starred on GitHub. Each repo below sits in `skills/` as a **git submodule**, so the original author's code, license, and updates stay intact.

## Get everything

```bash
git clone --recurse-submodules https://github.com/GameHub-0/Dr.-Shepard
```

Already cloned? Run `git submodule update --init --recursive`.

## Pull the latest from every repo

```bash
git submodule update --remote --merge
git commit -am "Update skills" && git push
```

## What's inside

| Folder | Source | License | Highlights |
|---|---|---|---|
| `skills/agent-skills` | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | MIT | 25 engineering skills: code review, TDD, debugging, planning, security, shipping, context engineering, spec-driven development |
| `skills/humanizer` | [blader/humanizer](https://github.com/blader/humanizer) | MIT | One skill that makes AI-written text sound human |
| `skills/hyperframes` | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Apache-2.0 | Video and motion skills: slideshow, captions, Figma, Remotion conversion, reverse-any-video |
| `skills/scroll-craft` | [nateherkai/scroll-craft](https://github.com/nateherkai/scroll-craft) | MIT | Scroll-animation design plugin (`plugins/nateherk-design`) |
| `skills/apify-mcp-server` | [apify/apify-mcp-server](https://github.com/apify/apify-mcp-server) | MIT | Apify MCP server (web scraping tools) plus 3 skills in `.claude/skills` |
| `skills/cli` | [cli/cli](https://github.com/cli/cli) | MIT | GitHub CLI; `skills/gh` and `skills/gh-skill` teach agents to use `gh` |
| `skills/mattpocock-profile` | [mattpocock/mattpocock](https://github.com/mattpocock/mattpocock) | — | Matt Pocock's profile README (links to his TypeScript and AI resources) |

## Adding a new starred repo

```bash
git submodule add --depth 1 https://github.com/OWNER/REPO skills/REPO
git commit -m "Add REPO" && git push
```

Then add a row to the table above.
