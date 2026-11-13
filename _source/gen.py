"""Generates the 4 pages + shared assets into /tmp/v3d/dist"""
import base64, os, subprocess

D = '/tmp/v3d/dist'
os.makedirs(D + '/assets', exist_ok=True)
subprocess.run(['npx', 'esbuild', 'src/main.js', '--bundle', '--minify', '--format=iife', '--target=es2020',
                '--legal-comments=none', f'--outfile={D}/assets/app.js'], check=True, cwd='/tmp/v3d')

F = '/tmp/fonts/node_modules/@fontsource'
def ff(fam, path, style='normal', w=400):
    b = base64.b64encode(open(f'{F}/{path}', 'rb').read()).decode()
    return f"@font-face{{font-family:'{fam}';font-style:{style};font-weight:{w};font-display:swap;src:url(data:font/woff2;base64,{b}) format('woff2')}}\n"
fonts = ''.join([ff('Anton', 'anton/files/anton-latin-400-normal.woff2'),
                 ff('Instrument Serif', 'instrument-serif/files/instrument-serif-latin-400-normal.woff2'),
                 ff('Instrument Serif', 'instrument-serif/files/instrument-serif-latin-400-italic.woff2', 'italic'),
                 ff('Inter', 'inter/files/inter-latin-400-normal.woff2'), ff('Inter', 'inter/files/inter-latin-500-normal.woff2', w=500),
                 ff('Inter', 'inter/files/inter-latin-600-normal.woff2', w=600), ff('Inter', 'inter/files/inter-latin-700-normal.woff2', w=700)])
open(f'{D}/assets/style.css', 'w').write(fonts + open('/tmp/v3d/src/style.css').read() + open('/tmp/v3d/src/pages.css').read())

NAV = [('Work', 'index.html#work', None), ('Projects', 'projects.html', 'projects'), ('Leadership', 'leadership.html', 'leadership'),
       ('Teaching', 'teaching.html', 'teaching'), ('Research', 'research.html', 'research'), ('Unofficially', 'unofficial.html', 'unofficial'), ('Contact', '#contact', None)]

def chrome(page, title, dots, body, desc):
    links = []
    for label, href, key in NAV:
        if page == 'home' and href.startswith('index.html#'): href = href[len('index.html'):]
        if page == 'unofficial' and href == '#contact': href = 'index.html#contact'
        links.append(f'<a href="{href}"{" class=cur" if key == page else ""} data-label="{label}">{label}</a>')
    dot_html = ''.join(f'<a href="#{i}"><span>{l}</span></a>' for i, l in dots)
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="theme-color" content="#0d0403">
<link rel="stylesheet" href="assets/style.css?v=8">
</head>
<body data-page="{page}" data-title="{ {'home':'Vanessa','projects':'Projects','leadership':'Leadership','teaching':'Teaching','research':'Research','unofficial':'Unofficially'}[page] }">

<div id="loader">
  <div class="l-top"><span>VAF</span><span>Portfolio — 2026</span></div>
  <div class="l-mid">
    <div class="l-label">Initialising network</div>
    <div class="l-num" id="lnum">000</div>
  </div>
  <div class="loader-bar"><i></i></div>
</div>

<canvas id="gl"></canvas>
<div class="grain"></div>
<div class="cur-dot"></div><div class="cur-ring"></div>

<nav>
  <a href="{'#top' if page == 'home' else 'index.html'}" class="logo" data-label="Home">VAF<em>.</em></a>
  <div class="nav-links">
    {chr(10).join(links)}
  </div>
  <div class="pill"><i></i>Open to new roles</div>
</nav>

<aside class="hud">
  <div class="hud-sec"><b id="secnum">01</b> / <span id="sectot">06</span></div>
  <div class="hud-e"><span class="bolt">↯</span> <b id="energy">0.000</b> kWh <small>spent scrolling</small></div>
</aside>
<button class="sound-btn" id="sound" type="button" aria-pressed="false" aria-label="Toggle sound"><span class="sbars"><i></i><i></i><i></i><i></i></span><span class="s-label">Sound off</span></button>
<aside class="dots">{dot_html}</aside>

<main>
{body}
</main>

<script src="assets/app.js?v=8"></script>
</body>
</html>
'''

CONTACT_SUB = '''
<section class="contact" id="contact" data-s="{n}">
  <div class="kicker rv"><span class="idx">{idx}</span> Contact</div>
  <h2 class="display big" data-split>Open to Systems Developer <span class="o">and ML-adjacent roles</span> — <span class="serif">let's talk.</span></h2>
  <div class="cgrid three">
    <a class="rv" href="mailto:vattafynn.work@gmail.com"><small>Email</small><span>vattafynn.work@gmail.com</span></a>
    <a class="rv" href="https://github.com/VanessaAttaFynn" target="_blank" rel="noopener"><small>GitHub</small><span>github.com/VanessaAttaFynn</span></a>
    <a class="rv" href="https://linkedin.com/in/vanessa-atta-fynn" target="_blank" rel="noopener"><small>LinkedIn</small><span>linkedin/in/vanessa-atta-fynn</span></a>
  </div>
  <footer><span>Tantra Hill, Accra, Ghana</span><span>© 2026 Vanessa Atta-Fynn</span></footer>
</section>'''

def hero(kicker, h1, lede):
    return f'''
<section class="hero phero" id="top" data-s="0">
  <div class="hero-inner">
    <a href="index.html" class="back rv" data-label="Home">← Back home</a>
    <div class="kicker rv">{kicker}</div>
    <h1 class="display mega" data-split>{h1}</h1>
    <p class="lede rv">{lede}</p>
  </div>
  <div class="scroll-hint rv"><i></i>Scroll</div>
</section>'''

def stats(items):
    return '<div class="stats">' + ''.join(f'<div class="rv"><b data-count="{n}">0</b><span>{l}</span></div>' for n, l in items) + '</div>'

def tags(items):
    return '<div class="tags rv">' + ''.join(f'<span>{t}</span>' for t in items) + '</div>'

def prose(paras):
    return '<div class="prose glass rv">' + ''.join(f'<p>{p}</p>' for p in paras) + '</div>'

# ---------------- HOME ----------------
home_body = open('/tmp/v3d/src/home_main.html').read()
pages = {}
pages['home'] = chrome('home', 'Vanessa Atta-Fynn — Systems Developer',
    [('top', 'Intro'), ('about', 'About'), ('work', 'Work'), ('experience', 'Experience'), ('research', 'Research'), ('explore', 'Explore'), ('contact', 'Contact')],
    home_body, 'Vanessa Atta-Fynn — Systems Developer building enterprise software and researching energy-efficient machine learning.')

# ---------------- PROJECTS ----------------
p = hero('Projects', 'Selected &amp; full body <span class="serif">of work.</span>',
         "From a national regulator's compliance platform to a from-scratch research platform built for my university — the systems I've designed, built, and shipped, plus the ML work alongside it.")
p += f'''
<section class="proj left" id="ugabstracts" data-s="1">
  <div class="col">
    <div class="kicker rv"><span class="idx">01</span> Production system, built solo</div>
    <h2 class="display huge" data-split>UGAbstracts</h2>
    {tags(['Yii2', 'PHP 8.4', 'SQL Server', 'IIS', 'Tailscale Funnel'])}
    {prose(["The abstract review system built for the University of Ghana's DCS Postgraduate Research Conference (GRCW/DCS 2026). I was elected Chair of the committee that would use it — and when nothing existing fit the review workflow we needed, I built it myself.",
            "It's a full workflow engine: rubric-based scoring, role-based access control, and automatic conflict-of-interest detection running across a five-stage review pipeline (Stages 0–4, with fan-out/fan-in assignment logic across thematic tracks). It runs on IIS, deployed to a VPS and exposed publicly via Tailscale Funnel.",
            "Before opening it up to real reviewers, I hunted down and fixed a run of production-grade bugs under deadline pressure: a workflow conflict-resolution bug, intermittent PHP session failures, a unique index silently blocking legitimate null inserts, and an IIS hostname-binding issue that only showed up post-deploy.",
            'It\'s the first system I\'ve taken solo from architecture through to a live server handling real submissions — and I did it while also chairing the committee and personally reviewing abstracts. More on that side of it on the <a href="leadership.html" data-label="Leadership">Leadership page</a>.'])}
    {stats([(281, 'real submissions processed'), (7, 'thematic review tracks'), (15, 'abstracts personally reviewed as Chair'), (5, 'stage review pipeline')])}
  </div>
</section>

<section class="proj right" id="dataforge" data-s="2">
  <div class="col">
    <div class="kicker rv"><span class="idx">02</span> Full platform, built for my university</div>
    <h2 class="display huge" data-split>DataForge</h2>
    {tags(['Yii2', 'SQL Server', 'Windows VPS', 'Cloudflare Tunnel'])}
    {prose(["A Kaggle-style competitions and research platform, built from scratch for my university so students can create, discover, and register for challenges and hackathons — something that previously only existed as scattered WhatsApp messages and department flyers.",
            "Under the hood it's architected as a blog system: every post carries a type — dataset, notebook, competition, or discussion — which keeps one clean data model powering four very different experiences. Datasets and discussions publish immediately (flagged unverified until reviewed); competitions and hackathons require approval first, since they carry real commitments to other students.",
            "Teams are their own standalone entity: consent-based (invite and accept, no admin gatekeeping), able to register for multiple competitions independently, and automatically disbanded once membership hits zero. Each competition's creator sets its own submission cap, team-size limit, and whether it accepts individuals, teams, or both.",
            "Notebooks are a static, read-only viewer for real uploaded .ipynb files — parsed and rendered code cells, markdown, and cached outputs, filterable by field, topic, and tags. Datasets preview CSVs directly in-browser; other file types show creator-supplied summary statistics instead.",
            "Access is verification-gated: students authenticate with their university email, then submit a student ID and proof-of-registration document for admin approval before they can create or join anything. Staff accounts (on the university's staff domain) are auto-assigned moderator privileges at signup.",
            "The whole thing is deployed on a Windows VPS matching my exact dev stack (IIS, SQL Server, PHP) — deliberately, so I wasn't re-fighting a fresh round of platform bugs right before the deadline, with grading running unattended and asynchronously. Public access runs through a Cloudflare Tunnel on the VPS itself, giving a stable URL that survives restarts."])}
  </div>
</section>

<section class="proj left" id="ml" data-s="3">
  <div class="col">
    <div class="mlcard glass tilt rv">
      <div class="kicker"><span class="idx">03</span> Applied ML</div>
      <h2 class="display mid" data-split>VLM Image Captioning</h2>
      {tags(['EfficientNetB0', 'LSTM', 'Bahdanau Attention'])}
      <p>An image-captioning model pairing an EfficientNetB0 encoder with an LSTM decoder built entirely from scratch, using Bahdanau attention so the decoder learns which region of the image to focus on for each word it generates. Reached a BLEU-4 score of 0.179.</p>
      <div class="metric">BLEU-4 <b>0.179</b></div>
    </div>
    <div class="mlcard glass tilt rv">
      <div class="kicker"><span class="idx">04</span> Applied ML</div>
      <h2 class="display mid" data-split>Loan Default Prediction</h2>
      {tags(['Random Forest', 'BorderlineSMOTE'])}
      <p>A classification model for predicting loan default, using BorderlineSMOTE rather than naive oversampling to address severe class imbalance near the decision boundary specifically. Achieved a ROC-AUC of 0.910.</p>
      <div class="metric">ROC-AUC <b>0.910</b></div>
    </div>
  </div>
</section>

<section class="proj right" id="tenant" data-s="4">
  <div class="col">
    <div class="badge rv">In progress · learning project</div>
    <div class="kicker rv"><span class="idx">05</span> Personal project</div>
    <h2 class="display huge" data-split>Tenant Management App</h2>
    {tags(['Django', 'SQLite', 'Python'])}
    {prose(["A management-only app (no client-facing side) for tracking tenants across a 3-room rental property, branded for my property under Fynn's Properties. It's also a deliberate excuse to properly learn Python and Django outside of a PHP-heavy day job.",
            "It generates downloadable, printable tenant agreements and receipts — signed physically, then filed against the tenant — and automates email notifications via Gmail. Part of the scope is also digitizing years of previous paper records into the same system."])}
  </div>
</section>

<section class="proj left" id="npra" data-s="5">
  <div class="col">
    <div class="kicker rv"><span class="idx">06</span> Day job, in production</div>
    <h2 class="display huge" data-split>Engineering at NPRA</h2>
    <p class="sub rv">Selected work on NPRA_RBSS, the regulatory compliance platform I maintain onsite at Ghana's National Pensions Regulatory Authority.</p>
    <ul class="bullets glass rv">
      <li>Designed and built the Formal Transfer of Pension Scheme Assets module: a multi-tab, multi-stage review workflow with per-tab approvals and admin-configurable stage logic.</li>
      <li>Built a database-driven contextual help/manual widget system, plus a Driver.js-based guided onboarding walkthrough for new users.</li>
      <li>Migrated SharePoint file-browsing integration from NTLM to OAuth2/Microsoft Graph.</li>
      <li>Diagnosed and fixed a run of production bugs: a no-skip policy bug counting draft submissions as valid prior submissions, a period-not-set error on a specific return, a null-lookup bug in merger applications needing a two-step lookup, and a JS bug where review buttons always fired the wrong stage ID.</li>
      <li>Fixed broadcast email failures by building RFC 2822-compliant address validation and failure logging.</li>
      <li>Maintain Power BI dashboards and manage Git/deployment across local, server, and Azure DevOps environments.</li>
    </ul>
  </div>
</section>
''' + CONTACT_SUB.format(n=6, idx='07')
pages['projects'] = chrome('projects', 'Projects — Vanessa Atta-Fynn',
    [('top', 'Intro'), ('ugabstracts', 'UGAbstracts'), ('dataforge', 'DataForge'), ('ml', 'Applied ML'), ('tenant', 'Tenant app'), ('npra', 'NPRA'), ('contact', 'Contact')],
    p, 'Projects by Vanessa Atta-Fynn — UGAbstracts, DataForge, applied ML and engineering at NPRA.')

# ---------------- LEADERSHIP ----------------
l = hero('Leadership', 'Leading by building <span class="serif">the thing myself.</span>',
         "In 2026 I was elected Chair of the Abstract Review Committee for my university's DCS Postgraduate Research Conference — and ended up building the entire system the committee ran on.")
l += f'''
<section class="proj left" id="role" data-s="1">
  <div class="col">
    <div class="kicker rv"><span class="idx">01</span> The role</div>
    <h2 class="display huge" data-split>Elected Chairperson</h2>
    {prose(["I ran for and won the Chairperson election for the Abstract Review Committee of the GRCW/DCS 2026 postgraduate research conference, with Prince Amofa elected Vice Chairperson alongside me.",
            "The committee was responsible for reviewing every abstract submitted to the conference across multiple thematic research tracks — from Machine Learning and Data Science to HCI, Networks, and Cybersecurity — before the conference could go ahead."])}
  </div>
</section>

<section class="proj right" id="framework" data-s="2">
  <div class="col">
    <div class="kicker rv"><span class="idx">02</span> The framework</div>
    <h2 class="display big2" data-split>Designing how 281 abstracts get reviewed <span class="serif">fairly</span></h2>
    {prose(["Before any review could happen, I designed the process itself: a multi-stage review framework (Stages 0–4) with fan-out/fan-in assignment logic, so abstracts could be distributed across reviewers by track and then reconciled back into final decisions.",
            "I wrote this up formally as a Plan of Action, which went through review by my supervising lecturer before the committee started work — and I ran the committee's first meeting to walk everyone through it."])}
  </div>
</section>

<section class="proj left" id="build" data-s="3">
  <div class="col">
    <div class="kicker rv"><span class="idx">03</span> The build</div>
    <h2 class="display big2" data-split>When nothing fit, <span class="serif">I built it</span></h2>
    {prose(['Partway into planning, it became clear that no existing tool matched the review workflow the committee actually needed. So I built <a href="projects.html" data-label="Projects">UGAbstracts</a> — a full Yii2/SQL Server workflow engine with rubric scoring, role-based access, and automatic conflict-of-interest detection — and deployed it myself.',
            "I chaired the committee, wrote the process it followed, and built the software it ran on, all while personally reviewing 15 abstracts as Chair — alongside a full-time job and an MSc thesis running in parallel."])}
    {stats([(281, 'abstracts processed'), (7, 'thematic tracks coordinated'), (15, 'reviewed personally'), (1, 'system built to run it')])}
  </div>
</section>

<section class="proj left" id="reflection" data-s="4">
  <div class="col">
    <div class="kicker rv"><span class="idx">04</span> Reflection</div>
    <h2 class="display big2" data-split>What it actually <span class="serif">took</span></h2>
    <p class="quote rv">Chairing a committee is a governance job — framework, fairness, meetings, decisions. Building the platform underneath it is an engineering job. Doing both at once meant every gap in the process became a bug I had to fix myself, and every technical constraint became something I had to explain and defend to the committee. That loop — between designing a process and building the tool that enforces it — is the part of this I'd sign up for again.</p>
  </div>
</section>
''' + CONTACT_SUB.format(n=5, idx='05')
pages['leadership'] = chrome('leadership', 'Leadership — Vanessa Atta-Fynn',
    [('top', 'Intro'), ('role', 'The role'), ('framework', 'Framework'), ('build', 'The build'), ('reflection', 'Reflection'), ('contact', 'Contact')],
    l, 'Leadership — Chair of the Abstract Review Committee, GRCW/DCS 2026.')

# ---------------- TEACHING ----------------
t = hero('Teaching', "Turning technical skills into <span class=\"serif\">other people's skills.</span>",
         "Alongside development work, I've taught four students so far — across two very different groups, with very different goals.")
t += f'''
<section class="proj left" id="overview" data-s="1">
  <div class="col">
    <div class="kicker rv"><span class="idx">01</span> Overview</div>
    <h2 class="display big2" data-split>Two groups, <span class="serif">two goals</span></h2>
    <div class="groups">
      <div class="group glass tilt rv"><div class="gnum">01</div><h3>Young adults (11–20)</h3><p>Web development fundamentals — HTML, CSS, JavaScript, and Python — for students building their first real technical skills.</p></div>
      <div class="group glass tilt rv"><div class="gnum">02</div><h3>Professionals (30–45)</h3><p>Professional-level Microsoft Office proficiency — Word, PowerPoint, and Excel — for working adults adding new skills mid-career.</p></div>
    </div>
  </div>
</section>

<section class="proj right" id="case" data-s="2">
  <div class="col">
    <div class="kicker rv"><span class="idx">02</span> Case study</div>
    <h2 class="display big2" data-split>A six-week intensive, <span class="serif">built from scratch</span></h2>
    {prose(["My most recent engagement is a six-week course for an 18-year-old student, covering both the Microsoft Office suite and Python, at four sessions a week.",
            "Rather than teach from generic material, I built a custom slide-deck design system for the course — a consistent dark navy and orange visual identity, generated programmatically with pptxgenjs so every session's materials look professionally consistent rather than assembled ad hoc."])}
  </div>
</section>

<section class="proj left" id="approach" data-s="3">
  <div class="col">
    <div class="kicker rv"><span class="idx">03</span> Approach</div>
    <h2 class="display big2" data-split>Why this, alongside <span class="serif">everything else</span></h2>
    <p class="quote rv">Teaching forces a different discipline than building systems does: you can't ship something a student doesn't understand and call it done. It's the same instinct that shows up in the contextual help systems I've built at work — the belief that good documentation and good teaching are really the same skill, aimed at different audiences.</p>
  </div>
</section>
''' + CONTACT_SUB.format(n=4, idx='04')
pages['teaching'] = chrome('teaching', 'Teaching — Vanessa Atta-Fynn',
    [('top', 'Intro'), ('overview', 'Overview'), ('case', 'Case study'), ('approach', 'Approach'), ('contact', 'Contact')],
    t, 'Teaching — web development and Microsoft Office training for young adults and professionals.')


# ---------------- RESEARCH ----------------
r = hero('Research', 'Predicting energy <span class="serif">before you spend it.</span>',
         "How much energy will it take to train a neural network — before you train it? That question started as my MSc thesis at the University of Ghana, defended in September 2026, and has grown into a line of papers with my supervisor, Prof. Kofi Sarpong Adu-Manu.")
r += f"""
<section class="proj left" id="question" data-s="1">
  <div class="col">
    <div class="kicker rv"><span class="idx">01</span> The question</div>
    <h2 class="display big2" data-split>Why predict it <span class="serif">at all?</span></h2>
    {prose(["Most energy figures for deep learning are measured after training has already happened. That's useful for reporting, but it doesn't help someone deciding whether an experiment is worth running in the first place.",
            "That decision matters most where compute is limited by power, not just budget. A planned geothermal-powered AI data center in Kenya, announced in 2024, had stalled by 2026 over grid capacity — a reminder that for many researchers on the continent, energy is the real constraint. An a priori predictor gives them an estimate from the model's design alone, before a single GPU-hour is spent."])}
    {stats([(2, 'papers under review'), (2, 'datasets: BUTTER-E &amp; EC-NAS'), (4, 'research questions'), (2, 'architecture families')])}
  </div>
</section>

<section class="proj right" id="review" data-s="2">
  <div class="col">
    <div class="kicker rv"><span class="idx">02</span> Paper 01 — Systematic review</div>
    <h2 class="display big2" data-split>Mapping what we can predict <span class="serif">and what we can't</span></h2>
    <div class="paper wide rv"><div class="pidx">Paper 01</div><p>"A Priori Energy Prediction for Neural Network Training: A Systematic Review of Methods, Measurement Fidelity, and Generalizability"</p><span class="status">Under review</span> <span class="venue">Sustainable Computing: Informatics and Systems</span></div>
    <p class="sub rv">A PRISMA 2020 systematic review of methods that predict neural network training energy before training — how they're built, how reliably their ground truth is measured, and how far their results carry to new models and hardware.</p>
    <div class="findings">
      <div class="glass rv"><i>01</i><b>Inference, not training</b><span>Most existing a priori predictors estimate inference energy. Very few target training.</span></div>
      <div class="glass rv"><i>02</i><b>CNNs dominate</b><span>The literature is concentrated on convolutional networks, leaving other families thinly covered.</span></div>
      <div class="glass rv"><i>03</i><b>Two design camps</b><span>Predictors split between layer-wise decomposition and whole-architecture regression.</span></div>
      <div class="glass rv"><i>04</i><b>Generalization is untested</b><span>Few studies check whether a predictor still holds on an architecture family it wasn't trained on.</span></div>
    </div>
    <p class="note rv"><b>Measurement fidelity:</b> software power meters can underestimate wall-socket energy by 20–30% (Fischer et al.) — so the ground truth many predictors learn from is itself biased.</p>
  </div>
</section>

<section class="proj left" id="calenergy" data-s="3">
  <div class="col">
    <div class="kicker rv"><span class="idx">03</span> Paper 02 — Prediction framework</div>
    <h2 class="display huge" data-split>CAL-ENERGY</h2>
    <div class="paper wide rv"><div class="pidx">Paper 02</div><p>"CAL-ENERGY: Calibration- and Domain-Aware A Priori Prediction of Neural Network Training Energy"</p><span class="status">Under review</span> <span class="venue">Sustainable Computing: Informatics and Systems</span></div>
    <div class="eq glass rv"><div class="eq-f">E <em>=</em> P <em>×</em> D</div><p>Instead of predicting energy directly, CAL-ENERGY predicts average power and training duration separately, then recomposes them. Splitting the two lets a known measurement-bias correction be applied to power alone — where the bias actually lives.</p></div>
    {prose(["The model works from a family-agnostic feature set — parameter count, depth, FLOPs, batch size, epochs and a hardware-utilization proxy — so the same predictor applies to both MLPs (BUTTER-E) and CNNs (EC-NAS) without a layer-by-layer encoding.",
            "Its second component, CAL-GATE, is an applicability check: it flags a prediction as untrustworthy when a request falls outside the model's training support, measured by nearest-neighbor distance to calibration data, or involves an unseen architecture family or hardware."])}
    <div class="label rv" style="margin-top:40px">Research questions</div>
    <div class="rqs">
      <div class="rv"><i>RQ1</i><b>Generalization</b><span>Train on one architecture family, test on the withheld other.</span></div>
      <div class="rv"><i>RQ2</i><b>Transferability</b><span>Train on one GPU class, test on others.</span></div>
      <div class="rv"><i>RQ3</i><b>Bias correction</b><span>Does correcting measurement bias improve pooling across datasets?</span></div>
      <div class="rv"><i>RQ4</i><b>Decomposition</b><span>Does predicting power and duration separately beat predicting energy directly?</span></div>
    </div>
  </div>
</section>

<section class="proj right" id="caltransfer" data-s="4">
  <div class="col">
    <div class="kicker rv"><span class="idx">04</span> Paper 03 — In preparation</div>
    <h2 class="display huge" data-split>CAL-TRANSFER</h2>
    <div class="paper wide rv"><div class="pidx">Paper 03</div><p>"Few-shot cross-GPU calibration of training-energy prediction"</p><span class="status alt">In preparation</span></div>
    <p class="quote rv">When a predictor moves to a new GPU, how few measured runs does it take to recalibrate it?</p>
  </div>
</section>

<section class="proj left" id="next" data-s="5">
  <div class="col">
    <div class="kicker rv"><span class="idx">05</span> What's next</div>
    <h2 class="display big2" data-split>Better data <span class="serif">for better predictions</span></h2>
    <div class="groups">
      <div class="group glass tilt rv"><div class="badge">In progress</div><h3>A transferability dataset</h3><p>Building a dataset to test CAL-ENERGY's cross-hardware and cross-architecture claims empirically. Architecture families are chosen by evidence of how they consume energy — not at random — and the shared features are the ones that drive energy most.</p></div>
      <div class="group glass tilt rv"><div class="badge alt">Planned</div><h3>A data-limitations audit</h3><p>An audit of public neural-network energy datasets: what they skew toward (often CO₂ estimates), and which fields they're missing that would explain how components drive energy.</p></div>
    </div>
  </div>
</section>
""" + CONTACT_SUB.format(n=6, idx='06')
pages['research'] = chrome('research', 'Research — Vanessa Atta-Fynn',
    [('top', 'Intro'), ('question', 'The question'), ('review', 'Systematic review'), ('calenergy', 'CAL-ENERGY'), ('caltransfer', 'CAL-TRANSFER'), ('next', "What's next"), ('contact', 'Contact')],
    r, 'Research — a priori prediction of neural network training energy: systematic review, CAL-ENERGY and CAL-TRANSFER.')


# ---------------- UNOFFICIALLY (her own words, verbatim) ----------------
import re as _re, html as _html
def _inline(t):
    t = _html.escape(t, quote=False)
    t = _re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', t)
    t = _re.sub(r'\*(.+?)\*', r'<em>\1</em>', t)
    return t.replace('♡', '<span class="hrt">♡</span>')
def _para(p):
    raw = p.strip()
    if raw.startswith('**') and raw.endswith('**') and raw.count('**') == 2:
        return f'<p class="pull rv">{_inline(raw)}</p>'
    if len(raw) <= 62:
        return f'<p class="beat rv">{_inline(raw)}</p>'
    return f'<p class="rv">{_inline(raw)}</p>'
md = open('/tmp/v3d/src/unofficial.md', encoding='utf-8').read().strip().split('\n')
title = md[0].lstrip('# ').strip()
sub = md[1].strip().strip('*')
blocks, cur = [], {'h': None, 'ps': []}
buf = []
def _flush():
    if buf: cur['ps'].append(' '.join(buf)); buf.clear()
for line in md[2:]:
    if line.startswith('## '):
        _flush(); blocks.append(cur); cur = {'h': line[3:].strip(), 'ps': []}
    elif not line.strip(): _flush()
    else: buf.append(line.strip())
_flush(); blocks.append(cur)
intro = blocks[0]['ps']
hello = intro[0]
title_html = _inline(title).replace('About Me <span class="hrt">♡</span>', '<span class="serif">About Me ♡</span>')
u = f"""
<section class="hero phero soft" id="top" data-s="0">
  <div class="hero-inner">
    <a href="index.html" class="back rv" data-label="Home">← Back home</a>
    <div class="kicker rv">Unofficially</div>
    <h1 class="display mega" data-split>{title_html}</h1>
    <p class="lede rv"><em>{_inline(sub)}</em></p>
    <p class="hello rv">{_inline(hello)}</p>
  </div>
  <div class="scroll-hint rv"><i></i>Scroll</div>
</section>
"""
secs = [('intro', None, intro[1:])] + [(_re.sub(r'[^a-z]+', '-', b['h'].lower()).strip('-'), b['h'], b['ps']) for b in blocks[1:]]
dots = [('top', 'Hello')]
for i, (sid, h, ps) in enumerate(secs, start=1):
    side = 'left' if i % 2 == 0 else 'right'
    if side == 'right': side = 'right'
    sign = ''
    if ps and ps[-1].startswith('*Just a girl'):
        sign = f'<div class="signoff rv"><span>{_inline(ps[-2])}</span><span>{_inline(ps[-1])}</span></div>'
        ps = ps[:-2]
    head = f'<h2 class="soft-h" data-split>{_inline(h)}</h2>' if h else ''
    body = ''.join(_para(p) for p in ps)
    u += f"""
<section class="proj {side} soft" id="{sid}" data-s="{i}">
  <div class="col">
    <div class="kicker rv"><span class="idx">{i:02d}</span></div>
    {head}
    <div class="letter glass">{body}{sign}</div>
  </div>
</section>
"""
    dots.append((sid, h.split(' and ')[0] if h else 'Where do I begin?'))
u += '\n<footer class="soft-foot"><span>Tantra Hill, Accra, Ghana</span><span>© 2026 Vanessa Atta-Fynn</span></footer>\n'
pages['unofficial'] = chrome('unofficial', 'A Little More About Me — Vanessa Atta-Fynn', dots, u,
    'A little more about Vanessa Atta-Fynn — the stories, worlds and dreams behind the work.')

names = {'home': 'index.html', 'projects': 'projects.html', 'leadership': 'leadership.html', 'teaching': 'teaching.html', 'research': 'research.html', 'unofficial': 'unofficial.html'}
for k, html in pages.items():
    open(f'{D}/{names[k]}', 'w').write(html)
print('ok', {k: len(v) for k, v in pages.items()}, os.path.getsize(f'{D}/assets/app.js') // 1024, 'KB js')
