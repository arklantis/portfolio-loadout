(() => {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const loadouts = {
    profile: {
      number:"PLAYER 01", status:"PROFILE LOADOUT", code:"PLAYER_DATA // ACTIVE", title:"Yen Chun Lin<br>Game &amp; Technical Designer",
      panelLabel:"PLAYER PROFILE", description:"London-based designer working across game systems, technical art, interface production and 2D game visuals.",
      evidence:"<span><strong>London</strong> based</span><span><strong>2</strong> CV versions</span><span><strong>UK</strong> opportunities</span>",
      gears:["Profile","CV files","Experience","Contact"], project:"Profile + CV", featureLabel:"PLAYER FILE", action:"OPEN PROFILE + CV", link:"about.html",
      image:"assets/media/cyber-studio/layers/profile-files.png", imageAlt:"Profile and CV files", avatarLabel:"PROFILE", avatarNote:"BASIC MOTIONS // IDLE + WALK",
      animations:[
        {id:"idle",label:"IDLE",file:"idle/front.gif",state:"IDLE",alt:"front-facing idle"},
        {id:"walk",label:"WALK",file:"walk/front.gif",state:"WALK",alt:"front-facing walking-in-place"}
      ]
    },
    game: {
      number:"CLASS 02", status:"DESIGN LOADOUT", code:"GAME_DESIGN // ACTIVE", title:"Game &amp;<br>System Designer",
      panelLabel:"CURRENT DISCIPLINE", description:"I design playable systems across tabletop and digital games, moving from rules and prototypes to implementation and iteration.",
      evidence:"<span><strong>Tabletop</strong> systems</span><span><strong>Digital</strong> games</span><span><strong>BGA</strong> private alpha</span>",
      gears:["Systems","Tabletop","Digital games","Iteration"], project:"Game Design: Digital + Tabletop", featureLabel:"WORK CATEGORY", action:"OPEN GAME WORK", link:"work.html",
      image:"https://static.wixstatic.com/media/e60170_799424338d784bcea077755896c2aebc~mv2.jpg/v1/fill/w_700,h_394,al_c,q_88,enc_avif,quality_auto/02_JPG.jpg", imageAlt:"Hegemony of FAITH game design work", avatarLabel:"GAME DESIGN", avatarNote:"CLASS ANIMATION // BOARD GAME DESIGN",
      animations:[
        {id:"board-game-design",label:"BOARD GAME DESIGN",asset:"assets/media/avatar/classes/game-design-card-notes.gif",alt:"Yen inspecting a tabletop game card and writing design notes"}
      ]
    },
    technical: {
      number:"CLASS 03", status:"SPECIALIST LOADOUT", code:"TECH_ART // ACTIVE", title:"Technical<br>Artist",
      panelLabel:"CURRENT DISCIPLINE", description:"I develop real-time materials and practical production tools, including UE5 studies and a packaged batch-renaming workflow.",
      evidence:"<span><strong>UE5</strong> materials</span><span><strong>Python</strong> tools</span><span><strong>Blueprint</strong> motion</span>",
      gears:["Materials","Blueprint","Python tools","Pipelines"], project:"Slime Shader + Batch Renamer", featureLabel:"WORK CATEGORY", action:"OPEN TECH ART", link:"work.html?filter=technical",
      image:"https://static.wixstatic.com/media/e60170_6e142c8626104cb5b6a7d076eb797805~mv2.png/v1/fill/w_700,h_394,al_c,q_90,enc_avif,quality_auto/batch_renamer_ui_demo.png", imageAlt:"Batch Renamer technical art tool", avatarLabel:"TECH ART", avatarNote:"CLASS ANIMATION // REAL-TIME PROTOTYPING",
      animations:[
        {id:"real-time-prototyping",label:"REAL-TIME PROTOTYPING",asset:"assets/media/avatar/classes/game-design-digital-loop.gif",alt:"Yen adjusting a holographic interaction flow and playtesting a real-time prototype"}
      ]
    },
    ui: {
      number:"CLASS 04", status:"PRODUCTION LOADOUT", code:"UI_VISUAL // ACTIVE", title:"UI &amp; Visual<br>Designer",
      panelLabel:"CURRENT DISCIPLINE",
      description:"I carry interface ideas through layout, responsive implementation and the visual production needed to keep a system consistent.",
      evidence:"<span><strong>30+</strong> client projects</span><span><strong>50+</strong> layouts</span><span><strong>RWD</strong> delivery</span>",
      gears:["Layout","Components","Responsive","Visual assets"], project:"Interface & Web Production", featureLabel:"FEATURED MISSION", action:"OPEN UI / VISUAL", link:"project.html?id=ui-production",
      image:"https://static.wixstatic.com/media/e60170_58fd8f2d23d1434ab887929de0d85e59~mv2.jpg/v1/fill/w_700,h_394,al_c,q_85,enc_avif,quality_auto/web%20online01.jpg", imageAlt:"Interface and web production work", avatarLabel:"UI / VISUAL", avatarNote:"CLASS ANIMATION // RESPONSIVE UI SYSTEMS",
      animations:[
        {id:"responsive-ui",label:"RESPONSIVE UI",asset:"assets/media/avatar/classes/ui-responsive-loop.gif",alt:"Yen switching responsive previews as a web layout reflows from desktop to tablet and mobile"}
      ]
    },
    art: {
      number:"CLASS 05", status:"VISUAL LOADOUT", code:"ART_2D // ACTIVE", title:"2D Artist &amp;<br>Game Visual Designer",
      panelLabel:"CURRENT DISCIPLINE", description:"I develop concept art, characters, game assets and interface visuals for personal and game projects.",
      evidence:"<span><strong>2D</strong> concepts</span><span><strong>Game</strong> assets</span><span><strong>UI</strong> visuals</span>",
      gears:["Concepts","Characters","Game assets","Illustration"], project:"2D Art & Game Assets", featureLabel:"WORK CATEGORY", action:"OPEN 2D ART", link:"project.html?id=2d-art",
      image:"https://static.wixstatic.com/media/e60170_384c7588e278494ca4a379d6eea26da3~mv2.jpg", imageAlt:"2D art and game assets", avatarLabel:"2D ART", avatarNote:"CLASS ANIMATION // 2D SPEED PAINTING",
      animations:[
        {id:"speed-painting",label:"SPEED PAINTING",asset:"assets/media/avatar/classes/2d-art-speedpaint-loop.gif",alt:"Yen rapidly sketching and colouring a character portrait at an easel"}
      ]
    }
  };

  const studioLocations = {
    tabletop:{index:"OBJECT 01",category:"GAME & SYSTEM DESIGN",title:"Tabletop Systems",description:"Inspect the physical game design work behind Hegemony of FAITH and supporting tabletop projects.",evidence:["4-8 players","2 editions","Published product"],project:"Hegemony of FAITH",link:"project.html?id=hegemony-bga",image:"https://static.wixstatic.com/media/e60170_799424338d784bcea077755896c2aebc~mv2.jpg/v1/fill/w_700,h_394,al_c,q_88,enc_avif,quality_auto/02_JPG.jpg",x:"24%",y:"50%"},
    bga:{index:"OBJECT 02",category:"TECHNICAL GAME DESIGN",title:"BGA Adaptation",description:"Rules, hidden information and table negotiation rebuilt as explicit states, actions and player-facing feedback for a creator-side private alpha.",evidence:["Creator-side build","Private alpha","Rules to states"],project:"Hegemony of FAITH / BGA",link:"project.html?id=hegemony-bga",image:"https://static.wixstatic.com/media/e60170_799424338d784bcea077755896c2aebc~mv2.jpg/v1/fill/w_700,h_394,al_c,q_88,enc_avif,quality_auto/02_JPG.jpg",x:"50%",y:"24%"},
    slime:{index:"OBJECT 03",category:"TECHNICAL ART",title:"Material Lab",description:"An Unreal Engine 5 study combining surface response, emission, opacity and Blueprint-driven squash and stretch.",evidence:["UE5 material","Blueprint","Study / WIP"],project:"Slime Material Study",link:"project.html?id=slime-material",image:"https://static.wixstatic.com/media/e60170_27e6c79926bd432c962a4fb4e92b7539f000.jpg/v1/fill/w_700,h_394,al_c,q_85,enc_avif,quality_auto/e60170_27e6c79926bd432c962a4fb4e92b7539f000.jpg",x:"82%",y:"26%"},
    tools:{index:"OBJECT 04",category:"WORKFLOW AUTOMATION",title:"Tool Drawer",description:"Small practical utilities designed around production friction, safe previews and repeatable file operations.",evidence:["Python","PyQt","Windows release"],project:"Batch Renamer",link:"project.html?id=batch-renamer",image:"https://static.wixstatic.com/media/e60170_6e142c8626104cb5b6a7d076eb797805~mv2.png/v1/fill/w_700,h_394,al_c,q_90,enc_avif,quality_auto/batch_renamer_ui_demo.png",x:"82%",y:"74%"},
    ui:{index:"OBJECT 05",category:"UI / VISUAL PRODUCTION",title:"Drawing Tablet",description:"Interface layouts, responsive implementation and visual production across commercial and public-sector client work.",evidence:["30+ client projects","50+ layouts","Responsive delivery"],project:"Interface & Web Production",link:"project.html?id=ui-production",image:"https://static.wixstatic.com/media/e60170_58fd8f2d23d1434ab887929de0d85e59~mv2.jpg/v1/fill/w_700,h_394,al_c,q_85,enc_avif,quality_auto/web%20online01.jpg",x:"52%",y:"75%"},
    prototypes:{index:"OBJECT 06",category:"DIGITAL GAMES & PROTOTYPES",title:"Unity Game Shelf",description:"Playable Unity projects showing game mechanics, interaction design, UI, 2D production and C# implementation across different formats.",evidence:["Unity","C#","Playable projects"],project:"Unity Games & Prototypes",link:"work.html?filter=unity",image:"https://static.wixstatic.com/media/e60170_7cac22e8da8f4380ad4edd1bb2045d6b~mv2.jpg/v1/fill/w_700,h_394,al_c,q_85,enc_avif,quality_auto/Booboisie_Village.jpg",x:"22%",y:"78%"},
    profile:{index:"OBJECT 07",category:"PLAYER PROFILE",title:"Profile File",description:"Open the verified career timeline, capability summary, contact routes and two role-specific CV versions.",evidence:["London based","2 CV loadouts","Verified facts"],project:"Yen Chun Lin / Profile",link:"about.html",image:"https://static.wixstatic.com/media/e60170_2121b7a1d1784099a282f5fa2ece5243~mv2.png/v1/fill/w_700,h_394,al_c,q_85,enc_avif,quality_auto/GameDesign_normal.png",x:"16%",y:"18%"}
  };

  const card = (project) => `
    <a class="project-card reveal" href="project.html?id=${project.id}" data-category="${project.category}">
      <span class="project-arrow" aria-hidden="true">↗</span>
      <div class="project-image"><img src="${project.image}" alt="${project.title} project preview" loading="lazy"></div>
      <div class="project-body">
        <div class="project-meta"><span>${project.categoryLabel}</span><span>MISSION / ${project.year}</span></div>
        <h3>${project.title}</h3><p class="project-subtitle">${project.subtitle}</p><p class="project-summary">${project.summary}</p>
      </div>
    </a>`;

  const activateReveals = () => {
    const items = document.querySelectorAll(".reveal:not(.visible)");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(item => item.classList.add("visible")); return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    items.forEach(item => observer.observe(item));
  };

  const renderFeatured = () => {
    const target = document.querySelector("#featured-projects");
    if (!target) return;
    target.innerHTML = projects.filter(project => project.featured).slice(0, 4).map(card).join("");
  };

  const renderIndex = (filter = "all") => {
    const target = document.querySelector("#project-index");
    if (!target) return;
    const selected = filter === "all" ? projects.filter(project => project.featured) : projects.filter(project => project.category === filter);
    target.innerHTML = selected.map(card).join("");
    const count = document.querySelector("#project-count");
    if (count) count.textContent = `${String(selected.length).padStart(2,"0")} PROJECT${selected.length === 1 ? "" : "S"} DISPLAYED`;
    document.querySelectorAll("[data-filter]").forEach(button => button.classList.toggle("active", button.dataset.filter === filter));
    const url = new URL(location.href); filter === "all" ? url.searchParams.delete("filter") : url.searchParams.set("filter", filter);
    history.replaceState({}, "", url);
    activateReveals();
  };

  const escapeAttr = value => String(value || "").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

  const mediaMarkup = (items = [], label = "Project evidence") => items.length ? `
    <div class="case-gallery" role="group" aria-label="${escapeAttr(label)}">
      ${items.map((item,index) => `<button class="case-gallery-item" type="button" data-lightbox data-full="${escapeAttr(item.src)}" data-alt="${escapeAttr(item.alt || item.caption)}" data-caption="${escapeAttr(item.caption)}">
        <img src="${item.src}" alt="${escapeAttr(item.alt || item.caption)}" loading="lazy" decoding="async">
        ${item.caption ? `<span><b>${String(index + 1).padStart(2,"0")}</b>${item.caption}</span>` : ""}
      </button>`).join("")}
    </div>` : "";

  const videoMarkup = (items = []) => items.length ? `<div class="case-video-grid">
    ${items.map(item => `<figure><video controls playsinline preload="metadata"${item.poster ? ` poster="${escapeAttr(item.poster)}"` : ""}><source src="${item.src}"></video>${item.caption ? `<figcaption>${item.caption}</figcaption>` : ""}</figure>`).join("")}
  </div>` : "";

  const sectionMarkup = section => `
    <section class="case-section reveal ${section.missing ? "missing" : ""}">
      <p class="eyebrow">${section.kicker || "Project detail"}</p><h2>${section.title}</h2>
      ${(section.body || []).map(paragraph => `<p>${paragraph}</p>`).join("")}
      ${section.points ? `<ul>${section.points.map(point => `<li>${point}</li>`).join("")}</ul>` : ""}
      ${section.links?.length ? `<div class="button-row">${section.links.map(link => `<a class="button button-outline" href="${escapeAttr(link.url)}" target="_blank" rel="noreferrer">${link.label} &rarr;</a>`).join("")}</div>` : ""}
      ${section.note ? `<aside class="case-note"><strong>Current evidence status</strong><p>${section.note}</p></aside>` : ""}
      ${videoMarkup(section.videos)}
      ${mediaMarkup(section.media, section.title)}
    </section>`;

  const collectionMarkup = (collection,index) => `
    <details class="case-collection reveal"${index === 0 ? " open" : ""}>
      <summary><span>${String(index + 1).padStart(2,"0")}</span><strong>${collection.title}</strong><em>${collection.items?.length || 0} files</em></summary>
      <div class="case-collection-body">${collection.intro ? `<p>${collection.intro}</p>` : ""}${mediaMarkup(collection.items, collection.title)}</div>
    </details>`;

  const setupCaseLightbox = target => {
    const dialog = target.querySelector("[data-lightbox-dialog]");
    if (!dialog) return;
    const image = dialog.querySelector("img");
    const caption = dialog.querySelector("figcaption");
    const close = () => { if (dialog.open) dialog.close(); };
    target.querySelectorAll("[data-lightbox]").forEach(button => button.addEventListener("click",() => {
      image.src = button.dataset.full;
      image.alt = button.dataset.alt || "Project image";
      caption.textContent = button.dataset.caption || button.dataset.alt || "";
      dialog.showModal();
    }));
    dialog.querySelector("[data-lightbox-close]")?.addEventListener("click",close);
    dialog.addEventListener("click",event => { if (event.target === dialog) close(); });
  };

  const renderProject = () => {
    const target = document.querySelector("#case-study");
    if (!target) return;
    const id = new URLSearchParams(location.search).get("id") || "hegemony-bga";
    const project = projects.find(item => item.id === id);
    if (!project) {
      target.innerHTML = `<section class="not-found"><p class="eyebrow">404</p><h1>Project not found.</h1><a class="button button-primary" href="work.html">Back to work</a></section>`; return;
    }
    document.title = `${project.title} — Yen Chun Lin`;
    const facts = project.facts || [["Year", project.year], ["Role", project.role]];
    const sections = project.sections || [{kicker:"Project summary",title:project.subtitle,body:[project.summary]}];
    const currentIndex = projects.indexOf(project);
    const next = projects[(currentIndex + 1) % projects.length];
    target.innerHTML = `
      <article>
        <header class="case-hero reveal">
          <div class="case-breadcrumb"><a href="work.html">Mission board</a><span>/</span><b>${project.categoryLabel}</b></div>
          <div class="case-title-grid"><div><p class="eyebrow">${project.year}</p><h1>${project.title}<small>${project.subtitle}</small></h1></div><p class="case-role"><strong>My role</strong>${project.role}</p></div>
        </header>
        <div class="case-media reveal"><img src="${project.image}" alt="${project.title} project"></div>
        <div class="case-facts reveal">${facts.map(([label,value]) => `<div class="case-fact"><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>
        <div class="case-layout">
          <aside class="case-side reveal"><p>Equipped toolkit</p><div class="case-tools">${(project.tools || []).map(tool => `<span>${tool}</span>`).join("")}</div>${project.links ? `<div class="case-links">${project.links.map(link => `<a class="text-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label} &rarr;</a>`).join("")}</div>` : ""}</aside>
          <div class="case-content">${project.contentWarning ? `<p class="case-warning reveal"><strong>Content warning</strong>${project.contentWarning}</p>` : ""}<p class="case-intro reveal">${project.intro || project.summary}</p>${sections.map(sectionMarkup).join("")}</div>
        </div>
        ${project.collections?.length ? `<section class="case-library"><header class="case-library-heading reveal"><p class="eyebrow">Evidence library</p><h2>Open the full project archive.</h2><p>The main case above is the recruiter summary. These grouped files preserve the complete visual material from the previous portfolio.</p></header>${project.collections.map(collectionMarkup).join("")}</section>` : ""}
      </article>
      <section class="case-next reveal"><p class="eyebrow">Next mission</p><h2>${next.title}</h2><a class="button button-outline" href="project.html?id=${next.id}">Open mission &rarr;</a></section>
      <dialog class="media-lightbox" data-lightbox-dialog><button type="button" data-lightbox-close aria-label="Close image">Close</button><figure><img alt=""><figcaption></figcaption></figure></dialog>`;
    setupCaseLightbox(target);
  };

  const setupLoadout = () => {
    const root = document.querySelector("[data-loadout]");
    if (!root) return;
    const options = [...root.querySelectorAll("[data-role]")];
    const screen = root.querySelector(".loadout-screen");
    const avatarSprite = root.querySelector("[data-avatar-sprite]");
    const avatarPreview = root.querySelector("[data-avatar-preview]");
    const avatarRole = root.querySelector("[data-avatar-role]");
    const avatarNote = root.querySelector("[data-avatar-note]");
    const avatarMotions = root.querySelector("[data-avatar-motions]");
    const avatarControls = root.querySelector(".avatar-controls");
    const turnButtons = [...root.querySelectorAll("[data-avatar-turn]")];
    /* The approved walk set is the direction reference. Idle front diagonals
       already match it; only the two idle back diagonals are named oppositely. */
    const directions = [
      {file:"front",label:"FRONT",alt:"front-facing"},
      {file:"front-right",label:"FRONT-RIGHT",alt:"front-right-facing"},
      {file:"right",label:"RIGHT",alt:"right-facing"},
      {file:"back-right",idleFile:"back-left",label:"BACK-RIGHT",alt:"back-right-facing"},
      {file:"back",label:"BACK",alt:"back-facing"},
      {file:"back-left",idleFile:"back-right",label:"BACK-LEFT",alt:"back-left-facing"},
      {file:"left",label:"LEFT",alt:"left-facing"},
      {file:"front-left",label:"FRONT-LEFT",alt:"front-left-facing"}
    ];
    let activeRole = "profile";
    let avatarMotion = "idle";
    let facingIndex = 0;
    const setText = (selector, value, html = false) => { const node = root.querySelector(selector); if (node) html ? node.innerHTML = value : node.textContent = value; };
    const updateAvatar = profile => {
      if (!avatarSprite) return;
      const animations = profile.animations || [];
      const motion = animations.find(item => item.id === avatarMotion) || animations[0];
      const direction = directions[facingIndex];
      const isProfile = activeRole === "profile";
      const directionFile = motion?.id === "idle" ? (direction.idleFile || direction.file) : direction.file;
      const avatarFile = isProfile && motion ? `${motion.id}/${directionFile}.gif` : "idle/front.gif";
      const roleAnimation = !isProfile && motion?.asset;
      const avatarSource = roleAnimation ? motion.asset : `assets/media/avatar/${avatarFile}`;
      avatarSprite.src = `${avatarSource}?v=20260721-1`;
      avatarSprite.alt = isProfile && motion
        ? `Yen pixel character, ${direction.alt} ${motion.alt.replace("front-facing ","")} animation`
        : roleAnimation
          ? motion.alt
          : `Yen pixel character base idle preview for ${profile.avatarLabel.toLowerCase()}`;
      avatarPreview?.classList.toggle("is-role-scene", Boolean(roleAnimation));
      if (avatarRole) avatarRole.textContent = profile.avatarLabel;
      if (avatarNote) avatarNote.textContent = profile.avatarNote;
      avatarMotions?.querySelectorAll("[data-avatar-motion]").forEach(button => {
        const active = button.dataset.avatarMotion === avatarMotion;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    };
    const renderAvatarControls = profile => {
      if (!avatarMotions) return;
      const animations = profile.animations || [];
      const planned = profile.plannedAnimations || [];
      const canTurn = activeRole === "profile" && animations.length > 0;
      avatarControls?.classList.toggle("has-turn",canTurn);
      turnButtons.forEach(button => { button.hidden = !canTurn; });
      avatarMotions.classList.toggle("planned", !animations.length && planned.length > 0);
      avatarMotions.classList.toggle("has-planned", animations.length > 0 && planned.length > 0);
      avatarMotions.classList.toggle("single", animations.length + planned.length === 1);
      avatarMotions.innerHTML = [
        ...animations.map(item => `<button type="button" data-avatar-motion="${item.id}" aria-pressed="${String(item.id === avatarMotion)}">${item.label}</button>`),
        ...planned.map(label => `<button type="button" disabled><span>${label}</span><small>PLANNED</small></button>`)
      ].join("");
      avatarMotions.querySelectorAll("[data-avatar-motion]").forEach(button => button.addEventListener("click", () => {
        avatarMotion = button.dataset.avatarMotion;
        updateAvatar(loadouts[activeRole]);
      }));
    };

    turnButtons.forEach(button => button.addEventListener("click", () => {
      if (activeRole !== "profile") return;
      facingIndex = (facingIndex + Number(button.dataset.avatarTurn) + directions.length) % directions.length;
      updateAvatar(loadouts.profile);
    }));

    const select = role => {
      const profile = loadouts[role]; if (!profile) return;
      activeRole = role;
      avatarMotion = profile.animations?.[0]?.id || "";
      document.body.dataset.roleTheme = role;
      options.forEach(option => { const active = option.dataset.role === role; option.classList.toggle("active",active); option.setAttribute("aria-pressed",String(active)); });
      setText("[data-role-number]",profile.number); setText("[data-role-status]",profile.status); setText("[data-role-code]",profile.code);
      setText("[data-role-panel-label]",profile.panelLabel); setText("[data-role-title]",profile.title,true); setText("[data-role-description]",profile.description); setText("[data-role-evidence]",profile.evidence,true);
      ["a","b","c","d"].forEach((key,index)=>setText(`[data-gear-${key}]`,profile.gears[index]));
      setText("[data-role-feature-label]",profile.featureLabel); setText("[data-role-project]",profile.project); setText("[data-role-action-text]",profile.action);
      const image = root.querySelector("[data-role-image]"); if (image) { image.src = profile.image; image.alt = profile.imageAlt; }
      const link = root.querySelector("[data-role-link]"); if (link) link.href = profile.link;
      renderAvatarControls(profile); updateAvatar(profile);
      screen.classList.remove("role-swap"); void screen.offsetWidth; screen.classList.add("role-swap");
    };
    options.forEach(option => option.addEventListener("click",()=>select(option.dataset.role)));
    select("profile");
    addEventListener("keydown",event=>{
      if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName)) return;
      if (document.activeElement?.closest?.(".avatar-controls")) return;
      const keys = Object.keys(loadouts); const current = keys.indexOf(document.body.dataset.roleTheme || "profile");
      if (/^[1-5]$/.test(event.key)) select(keys[Number(event.key)-1]);
      if (["ArrowDown","ArrowRight"].includes(event.key)) { event.preventDefault(); select(keys[(current+1)%keys.length]); }
      if (["ArrowUp","ArrowLeft"].includes(event.key)) { event.preventDefault(); select(keys[(current-1+keys.length)%keys.length]); }
    });
  };

  const setupGameMenu = () => {
    const navLinks = [...document.querySelectorAll(".site-nav a")];
    navLinks.forEach((link,index)=>link.dataset.menuKey=String(index+1).padStart(2,"0"));
    const path = location.pathname.split("/").pop() || "index.html";
    const currentFilter = new URLSearchParams(location.search).get("filter") || "";
    navLinks.forEach(link=>{
      const url = new URL(link.href,location.href); const targetPath = url.pathname.split("/").pop();
      const linkFilter = url.searchParams.get("filter") || "";
      const active = targetPath === path && (path !== "work.html" || linkFilter === currentFilter);
      link.classList.toggle("active",active);
    });

    document.body.insertAdjacentHTML("beforeend",`
      <div class="page-transition" aria-hidden="true"><div class="transition-panel transition-a"></div><div class="transition-panel transition-b"></div><div class="transition-core"><span>YCL // SYSTEM INTERFACE</span><strong>LOADING DATA</strong><div><i></i></div><small>SYNCING PROJECT FILE...</small></div></div>`);

    const transition = document.querySelector(".page-transition");
    const transitionTitle = transition.querySelector("strong");
    const transitionFor = href => href.includes("project.html") ? "LOADING MISSION" : href.includes("work.html") ? "OPENING MISSION BOARD" : href.includes("about.html") ? "LOADING PLAYER PROFILE" : "RETURNING TO TITLE SCREEN";
    document.addEventListener("click",event=>{
      const control=event.target.closest("button,a"); if (!control) return;
      const link=control.closest("a"); if(!link || event.defaultPrevented || event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const href=link.getAttribute("href")||""; if(!href || href.startsWith("#") || href.startsWith("mailto:") || href.endsWith(".pdf") || link.target==="_blank") return;
      const url=new URL(link.href,location.href); if(url.origin!==location.origin) return;
      event.preventDefault(); transitionTitle.textContent=transitionFor(href); transition.classList.add("active"); document.body.classList.add("page-leaving");
      setTimeout(()=>{ location.href=url.href; }, reduceMotion?40:430);
    });
    addEventListener("pageshow",()=>{ document.body.classList.remove("page-leaving"); transition.classList.remove("active"); });
  };

  const setupCyberStudio = () => {
    const root = document.querySelector("[data-cyber-studio]");
    if (!root) return;
    const map = root.querySelector(".cyber-studio-map");
    const sceneToggle = root.querySelector(".studio-scene-toggle");
    let dayScene = false;
    const syncScene = () => {
      map?.classList.toggle("scene-day",dayScene);
      if (sceneToggle) { sceneToggle.setAttribute("aria-pressed",String(dayScene)); sceneToggle.textContent=dayScene?"SCENE: DAY":"SCENE: NIGHT"; }
    };
    sceneToggle?.addEventListener("click",()=>{ dayScene=!dayScene; syncScene(); });
    syncScene();
    const status = root.querySelector("[data-cyber-status]");
    const names = { expo:"EVENTS & EXHIBITIONS", tabletop:"GAME SYSTEMS", code:"UNITY GAMES", slime:"MATERIAL LAB", ui:"UI / VISUAL", tools:"WORKFLOW TOOLS", profile:"PROFILE + CV", art:"2D ART / ILLUSTRATION" };
    root.querySelectorAll("[data-object]").forEach(object => {
      const setStatus = () => { if (status) status.textContent = `TARGET // ${names[object.dataset.object] || "PROJECT"}`; };
      object.addEventListener("pointerenter", setStatus);
      object.addEventListener("focus", setStatus);
      object.addEventListener("pointerleave", () => { if (status) status.textContent = "SELECT AN OBJECT"; });
      object.addEventListener("blur", () => { if (status) status.textContent = "SELECT AN OBJECT"; });
    });
  };

  const setupStudio = () => {
    const root=document.querySelector("[data-studio]"); if(!root)return;
    const desk=root.querySelector(".studio-desk"); const frame=root.querySelector(".studio-frame");
    let visited=new Set(); try{visited=new Set(JSON.parse(sessionStorage.getItem("yen-studio-visited")||"[]"));}catch(_){}
    const setText=(selector,value)=>{const node=root.querySelector(selector);if(node)node.textContent=value;};
    const updateProgress=()=>{setText("[data-studio-progress]",`EXPLORED ${visited.size} / ${Object.keys(studioLocations).length}`);root.querySelectorAll("[data-studio-id]").forEach(button=>button.classList.toggle("visited",visited.has(button.dataset.studioId)));};
    const select=(id,mark=true)=>{
      const location=studioLocations[id];if(!location)return;
      root.querySelectorAll("[data-studio-id]").forEach(button=>{const active=button.dataset.studioId===id;button.classList.toggle("active",active);button.setAttribute("aria-pressed",String(active));});
      root.querySelectorAll("[data-studio-jump]").forEach(button=>button.classList.toggle("active",button.dataset.studioJump===id));
      setText("[data-studio-index]",location.index);setText("[data-studio-category]",location.category);setText("[data-studio-title]",location.title);setText("[data-studio-description]",location.description);setText("[data-studio-project]",location.project);setText("[data-studio-state]",mark?"INSPECTED":"SELECTED");
      const evidence=root.querySelector("[data-studio-evidence]");if(evidence)evidence.innerHTML=location.evidence.map(item=>`<span>${item}</span>`).join("");
      const image=root.querySelector("[data-studio-image]");if(image){image.src=location.image;image.alt=`${location.project} preview`;}
      const link=root.querySelector("[data-studio-link]");if(link)link.href=location.link;
      desk.style.setProperty("--token-x",location.x);desk.style.setProperty("--token-y",location.y);
      frame.classList.remove("studio-selecting");void frame.offsetWidth;frame.classList.add("studio-selecting");
      if(mark){visited.add(id);try{sessionStorage.setItem("yen-studio-visited",JSON.stringify([...visited]));}catch(_){}updateProgress();}
    };
    root.querySelectorAll("[data-studio-id]").forEach(button=>button.addEventListener("click",()=>select(button.dataset.studioId)));
    root.querySelectorAll("[data-studio-jump]").forEach(button=>button.addEventListener("click",()=>{select(button.dataset.studioJump);root.querySelector(`[data-studio-id="${button.dataset.studioJump}"]`)?.focus({preventScroll:true});}));
    updateProgress();select("tabletop",false);
  };

  renderFeatured(); renderProject(); setupLoadout(); setupStudio(); setupCyberStudio();

  const requestedFilter = new URLSearchParams(location.search).get("filter") || "all";
  const initialFilter = requestedFilter === "game" ? "tabletop" : requestedFilter;
  renderIndex(["all","tabletop","unity","technical","ui","art","events"].includes(initialFilter) ? initialFilter : "all");
  setupGameMenu();
  document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => renderIndex(button.dataset.filter)));

  document.querySelectorAll("[data-year]").forEach(item => item.textContent = new Date().getFullYear());
  const header = document.querySelector("[data-header]");
  const setHeader = () => header?.classList.toggle("scrolled", scrollY > 18);
  setHeader(); addEventListener("scroll", setHeader, {passive:true});

  const navButton = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  navButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("open"); navButton.setAttribute("aria-expanded", String(open)); document.body.style.overflow = open ? "hidden" : "";
  });

  if (!reduceMotion) {
    addEventListener("pointermove", event => {
      document.body.style.setProperty("--mx", `${event.clientX}px`); document.body.style.setProperty("--my", `${event.clientY}px`);
    }, {passive:true});
    document.querySelectorAll("[data-tilt]").forEach(panel => {
      panel.addEventListener("pointermove", event => {
        const rect = panel.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5; const y = (event.clientY - rect.top) / rect.height - .5;
        panel.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
      });
      panel.addEventListener("pointerleave", () => panel.style.transform = "");
    });
  }
  activateReveals();
})();
