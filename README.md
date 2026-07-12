# Curate — Jekyll Portfolio

A markdown-powered portfolio theme for Jekyll, ready to deploy to GitHub Pages.
It includes a home page, a projects showcase with four project layouts, a paginated
blog, standard pages, dark mode, and a responsive navigation.

## Quick start (local preview)

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Project structure

```
_config.yml            Site configuration (title, author, collections, pagination)
_data/
  navigation.yml       Main menu (supports a dropdown)
  social.yml           Social links (header, mobile menu, footer)
  footer.yml           Footer menu columns
_layouts/              Page templates (home, page, project, post, projects, blog…)
_includes/             Reusable partials (header, footer, cards, gallery…)
_projects/             Your portfolio projects (one Markdown file each)
_posts/                Your blog posts
_pages/                About / Contact / Privacy / Terms
index.html             Home page
projects.md            Projects listing page (/projects/)
blog/index.html        Blog listing page (paginated)
assets/                CSS, JS, fonts and images
```

## Make it yours

1. **Site details** — edit `_config.yml` (`title`, `description`, `author`, `email`,
   `twitter_username`, and the `footer` block).
2. **Navigation** — edit `_data/navigation.yml`.
3. **Social links** — edit `_data/social.yml` (icons are Font Awesome brand classes).
4. **Footer menus** — edit `_data/footer.yml`.
5. **Logo & favicon** — replace the files in `assets/images/logo/` and
   `assets/images/favicon/`.
6. **Contact form** — set `form_action` in `_pages/contact.md` to your
   [Formspree](https://formspree.io) endpoint.

### Adding a project

Create a file in `_projects/`, e.g. `_projects/my-project.md`:

```yaml
---
title: My Project
description: A short summary
style: default        # default | right | left | top
weight: 1             # controls ordering (lowest first)
client: Client Name
role: Your Role
date_text: 20 December 2024
categories: [design]
thumbnail: /assets/images/gen/projects/project-1-1-thumbnail.webp
gallery:
  - image: /assets/images/gen/projects/project-1-1.webp
    caption: "<strong>Caption:</strong> optional"
  - image: /assets/images/gen/projects/project-1-2.webp
---

Write the project description here in Markdown.
```

The four `style` values reproduce the four demo project layouts:

| style     | layout                                         | default gallery |
|-----------|------------------------------------------------|-----------------|
| `default` | details left, text right, masonry gallery below| masonry         |
| `right`   | text left, gallery on the right                | single-column   |
| `left`    | gallery on the left, text right                | single-column   |
| `top`     | gallery on top, details + text below           | two-column      |

You can override the gallery with `gallery_style: masonry | single-column | two-column`.

### Adding a blog post

Create a file in `_posts/` named `YYYY-MM-DD-title.md`:

```yaml
---
title: My Post
description: A short summary shown in listings
date: 2024-05-01
categories: [writing]
thumbnail: /assets/images/gen/blog/blog-1-thumbnail.webp
image: /assets/images/gen/blog/blog-1.webp
---

Post content in Markdown.
```

## Deploying to GitHub Pages

### Option A — GitHub Actions (recommended)

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The included workflow (`.github/workflows/pages.yml`) builds and deploys on every
   push to `main`. The `baseurl` is set automatically.

### Option B — Deploy from a branch

1. In **Settings → Pages**, set **Source** to **Deploy from a branch** and pick `main`.
2. If this is a **project** site (`username.github.io/repo`), set in `_config.yml`:

   ```yaml
   url: "https://username.github.io"
   baseurl: "/repo"
   ```

   For a **user/organisation** site (`username.github.io`), leave `baseurl` empty.

