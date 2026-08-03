# Pix Lore Website

This is the front-end for Pix Lore, an AI content creation studio. Built with React, Vite, and plain CSS.

## Getting Started

To run this project locally:

1. Make sure you have Node.js installed.
2. Open your terminal in this project folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the URL shown in your terminal (usually `http://localhost:5173`) to view the site.

## How to Edit Content

- **Images and Videos**: Search for `ADD YOUR PHOTO HERE` and `ADD YOUR VIDEO HERE` comments in `src/components/FashionWork.jsx` and `src/components/BusinessWork.jsx`. You can replace the placeholder text with your actual images (e.g. using `backgroundImage` or `<img />` / `<video />` tags).
- **Contact Info**: Open `src/components/Contact.jsx` and edit the `WHATSAPP_NUMBER` and `GMAIL_ADDRESS` constants at the top of the file.
- **Testimonials**: Edit `src/components/Testimonials.jsx` to swap out the placeholder quotes and client names.

## Deployment

### GitHub Pages

1. In `vite.config.js`, add `base: '/your-repo-name/'` (if deploying to a subdirectory).
2. Run `npm run build` to create a production bundle in the `dist/` folder.
3. You can use a tool like `gh-pages` to deploy the `dist/` folder to your `gh-pages` branch.

### Vercel

1. Import your GitHub repository into Vercel.
2. Vercel will automatically detect that it's a Vite project.
3. Leave the build command as `npm run build` and the output directory as `dist`.
4. Click Deploy.
