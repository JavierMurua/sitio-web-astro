# Astro Modern Company Theme

NOTE - Heavily Inspired by - https://www.wellthapp.com/

[Live Preview Here](https://modern.corytrimm.com/).

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

```bash
bash
git clone https://github.com/your-username/magical-motion.git
```

2. Navigate to the project directory:

```bash
cd magical-motion
```

3. Install the dependencies

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The development server will start at `http://localhost:4321`. Any changes you make to the code will be automatically reflected in the browser.

## Project Structure

The project structure is organized as follows:

```bash
magical-motion/
├── src/
│ ├── components/
│ │ ├── Header.astro
│ │ ├── Footer.astro
│ │ ├── Hero.astro
│ │ ├── Features.astro
│ │ ├── Testimonials.astro
│ │ ├── Partners.astro
│ │ ├── CallToAction.astro
│ │ └── ContactForm.astro
│ ├── layouts/
│ │ └── Layout.astro
│ └── pages/
│ └── index.astro
├── public/
│ └── images/
├── tailwind.config.js
├── astro.config.mjs
└── package.json
```

- `src/components/`: This directory contains reusable Astro components used throughout the website.
- `src/layouts/`: This directory contains the main layout component (`Layout.astro`) that wraps the entire website.
- `src/pages/`: This directory contains the main page components, which define the routes of the website.
- `public/images/`: This directory contains static image assets used in the website.
- `tailwind.config.js`: This file contains the configuration for the Tailwind CSS utility classes.
- `astro.config.mjs`: This file contains the configuration for the Astro build process.
- `package.json`: This file contains the project dependencies and scripts.

## Editing Components

To edit a component, navigate to the `src/components/` directory and open the corresponding `.astro` file. For example, to edit the `Header` component, open `src/components/Header.astro`.

Astro components use a mix of HTML, CSS, and JavaScript (or TypeScript). You can modify the markup, styles, and logic within these files to customize the appearance and behavior of the components.

## Building for Production

To build the project for production, run the following command:

```bash
npm run build
```

This command will generate a production-ready build of your website in the `dist/` directory.

## Deploying to Production

After building the project, you can deploy the `dist/` directory to a hosting service of your choice. Some popular options include:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- [AWS S3](https://aws.amazon.com/s3/)

Refer to the documentation of your chosen hosting service for instructions on how to deploy the `dist/` directory.

## Learn More

To learn more about Astro and its features, check out the [official Astro documentation](https://docs.astro.build/).
