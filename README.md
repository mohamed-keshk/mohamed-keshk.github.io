# Mohamed Keshk — Engineering Portfolio

Hugo Blox portfolio for autonomous UAVs, robotics, electronics, and custom tooling.
Public address: https://mohamed-keshk.github.io/

## Local development

Use Hugo **Extended 0.161.1**, Node.js **22** (24 also tested locally), Go **1.26**, and pnpm **10.14.0**. Keep Hugo on PATH. The GitHub Pages workflow uses the same Hugo version. The Hugo Blox module requires Hugo 0.161.0 or newer.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the address printed by Hugo. The scripts prepare pnpm Tailwind wrappers so Hugo can locate the JavaScript entry point. This only updates an ignored wrapper under node_modules; npm symlinks are left as installed.

```sh
pnpm build
```

The production output is `public/`. The build cleans old output and then generates Pagefind search. To inspect search locally, serve the production output over HTTP; the Hugo development server does not automatically rebuild the Pagefind index.

## Content editing

- `data/authors/me.yaml`: biography, experience, education, and professional links.
- `content/_index.md`: homepage sections, filter buttons, and skills.
- `content/projects/<slug>/index.md`: project summary, categories, and case study. Keep related images in the same folder.
- `static/images/workshop/`: photographs for the homepage workshop section.
- `static/uploads/resume.pdf`: existing public resume download.
- `assets/css/custom.css`: small responsive and accessibility additions.
- `layouts/_partials/hbx/blocks/workshop/block.html`: homepage photograph layout.

Use the `project-figure` shortcode for a captioned image. It generates a compressed WebP display image, preserves dimensions to reduce layout movement, and links to the full image:

```text
{{< project-figure src="assembly.jpg" caption="Assembled prototype showing the enclosure." >}}
```

Each homepage filter must match at least one project's tag. Do not add speculative performance ratings or project dates. Label CAD images and physical prototypes accurately. The source notes in `docs/portfolio-review.md` record the evidence and open questions behind the current content.

## GitHub Pages

The repository is a user site named `mohamed-keshk.github.io`, with base URL `https://mohamed-keshk.github.io/`. In repository Settings → Pages, choose **GitHub Actions**. Pushing to `main` runs `.github/workflows/deploy.yml`, which calls the build workflow, indexes search, and publishes the Pages artifact. Pull requests run the build without publishing.

Keep `hugoblox.yaml`, `.github/workflows/build.yml`, and the optional Netlify configuration on the same Hugo version. The dependency lockfile and Go module checksums are tracked for reproducibility. Software license notices and Hugo Blox attribution are retained; the site's content license is configured separately.
