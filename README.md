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

Includes all 12 repos from Nate Herk's video [I Tried 100+ Github Repos for Claude](https://www.youtube.com/watch?v=HhZdNYI4pJs).

| Folder | Source | License | Highlights |
|---|---|---|---|
| `skills/agent-skills` | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | MIT | 25 engineering skills: code review, TDD, debugging, planning, security, shipping, context engineering, spec-driven development |
| `skills/humanizer` | [blader/humanizer](https://github.com/blader/humanizer) | MIT | One skill that makes AI-written text sound human |
| `skills/hyperframes` | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Apache-2.0 | Video and motion skills: slideshow, captions, Figma, Remotion conversion, reverse-any-video |
| `skills/scroll-craft` | [nateherkai/scroll-craft](https://github.com/nateherkai/scroll-craft) | MIT | Scroll-animation design plugin (`plugins/nateherk-design`) |
| `skills/apify-mcp-server` | [apify/apify-mcp-server](https://github.com/apify/apify-mcp-server) | MIT | Apify MCP server (web scraping tools) plus 3 skills in `.claude/skills` |
| `skills/cli` | [cli/cli](https://github.com/cli/cli) | MIT | GitHub CLI; `skills/gh` and `skills/gh-skill` teach agents to use `gh` |
| `skills/google-workspace-cli` | [googleworkspace/cli](https://github.com/googleworkspace/cli) | Apache-2.0 | 95 skills for Gmail, Drive, Calendar, Sheets, Docs, plus ready-made "recipes" and personas |
| `skills/expo-skills` | [expo/skills](https://github.com/expo/skills) | MIT | 25 skills for building mobile apps with Expo / React Native |
| `skills/supabase-agent-skills` | [supabase/agent-skills](https://github.com/supabase/agent-skills) | MIT | Supabase + Postgres best practices |
| `skills/stripe-ai` | [stripe/ai](https://github.com/stripe/ai) | MIT | 11 Stripe skills in `skills/` — start with `skills/stripe-best-practices` |
| `skills/playwright-cli` | [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli) | Apache-2.0 | Browser automation and testing via Playwright |
| `skills/claude-plugins-official` | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Per plugin | Anthropic's plugin directory — Claude Security is at `plugins/claude-security` (all rights reserved: use it, don't redistribute) |
| `skills/open-seo` | [every-app/open-seo](https://github.com/every-app/open-seo) | MIT | SEO skills: keyword research, audits, competitor analysis, local SEO, AI visibility |
| `skills/mattpocock-profile` | [mattpocock/mattpocock](https://github.com/mattpocock/mattpocock) | — | Matt Pocock's profile README (links to his TypeScript and AI resources) |

## Adding a new starred repo

```bash
git submodule add --depth 1 https://github.com/OWNER/REPO skills/REPO
git commit -m "Add REPO" && git push
```

Then add a row to the table above.
