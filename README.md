# Portfolio Loadout

An interactive, game-native portfolio that turns multidisciplinary creative work into an explorable studio, helping visitors understand skills, projects and process through play.

Portfolio Loadout was developed as an OpenAI Build Week project. It replaces a conventional Wix portfolio with a responsive pixel-art interface built around an interactive studio, career loadouts and reusable case-study pages.

## Live demo

Public deployment link will be added before the final Devpost submission.

## Core experience

- Explore a layered pixel-art studio where interactive objects open real portfolio projects.
- Switch between day and night versions of the studio.
- Select five career loadouts: Player Profile, Game Design, Technical Art, UI / Visual Design and 2D Art.
- Rotate the profile character through eight directions and preview idle or walking cycles.
- View a tabletop-design animation in Game Design and a real-time prototyping animation in Technical Art.
- Browse filterable project categories and reusable case-study pages.
- Use a dedicated project menu on smaller screens where image hotspots would be difficult to identify.

UI / Visual Design and 2D Art currently use the shared base avatar. Additional discipline-specific animations are planned extensions and are not required to navigate their content.

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- Python and Pillow for deterministic animation processing and GIF export
- OpenAI Codex
- GPT-5.6

The deployed website has no runtime framework or package dependencies.

## Run locally

From the project folder, start any static web server. For example:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173/`.

## Project structure

- `index.html` — interactive studio and career loadout selector
- `work.html` — filterable project index
- `project.html?id=...` — reusable case-study view
- `about.html` — profile, career evidence, CV downloads and contact routes
- `assets/js/data.js` — structured portfolio and case-study content
- `assets/js/site.js` — rendering, interaction, navigation and animation selection
- `assets/css/styles.css` — responsive visual system
- `assets/media/` — production-ready studio, project and character assets

The `REVIEW` folder used for raw animation frames and visual iteration is intentionally excluded from the public repository.

## How Codex and GPT-5.6 were used

Codex and GPT-5.6 were used as an implementation and iteration partner throughout the Build Week development process. Their contributions included:

- Inspecting and organising material migrated from the previous Wix portfolio and local project archive
- Developing the static HTML, CSS and JavaScript architecture
- Turning portfolio content into reusable data-driven cards and case-study views
- Implementing the layered interactive studio, career loadout selector, navigation transitions and responsive alternatives
- Creating repeatable processing steps for aligning pixel-art frames and exporting transparent GIF animations
- Diagnosing perspective, responsive-layout, animation-anchor, GIF-palette and transparency problems
- Supporting rapid revision after visual QA identified incorrect movement, alignment or interaction behaviour

The project was not produced through a single generation prompt. Yen Chun Lin directed the concept, information architecture, art direction and acceptance criteria; reviewed each visual and interaction state; manually corrected animation frames when required; and decided which results were suitable for the final experience.

## Build Week development

I discovered Build Week on July 13 while beginning to explore a new direction for my portfolio. I used the event as the point to develop that early idea into Portfolio Loadout and substantially build the submitted interactive experience.

The Build Week work includes the interactive studio, layered object states, day/night presentation, loadout selector, directional character previews, class animations, responsive navigation, migrated case-study system and the submission-focused documentation in this repository.

## Key challenges

- Matching transparent interactive objects to a fixed pixel-art scene without visible perspective or scale shifts
- Keeping character proportions, anchors, hair direction and walking rhythm consistent across animation frames
- Preventing black pixels, magenta fringes and residual fragments during transparent GIF encoding
- Preserving clear navigation when the illustrated desktop scene is reduced for smaller screens
- Separating visually interesting interaction from the professional content recruiters need to find quickly

## Accessibility and responsive behaviour

- Semantic links and buttons are used for interactive controls.
- Keyboard controls support loadout selection and profile preview navigation.
- Motion is reduced when the visitor enables `prefers-reduced-motion`.
- Mobile visitors receive explicit project links instead of depending only on small image hotspots.

## Current scope and next steps

The submission build prioritises a complete navigation and content loop over producing a unique animation for every loadout. Planned next steps include additional Technical Art, UI / Visual Design and 2D Art animations, clearer process evidence for selected case studies and further testing with recruiters and game-development professionals.

## Content ownership

Portfolio content, personal work, CV files and original project material are © Yen Chun Lin. Third-party product names and tools remain the property of their respective owners.
