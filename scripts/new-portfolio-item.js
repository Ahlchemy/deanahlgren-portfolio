#!/usr/bin/env node

/**
 * Portfolio Item Generator CLI
 *
 * Creates new portfolio items (projects, courses, articles) with all required fields.
 * Generates placeholder thumbnails and creates proper data entries.
 *
 * Usage: npm run new-project | npm run new-course | npm run new-article
 */

import * as readline from 'readline';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Design system colors from tailwind.config.js
const COLORS = {
  ocean: '#0B5570',
  amber: '#C87A1A',
  dawn: '#D4915A',
  white: '#FFFFFF',
};

// Category configurations
const PROJECT_CATEGORIES = [
  { value: 'ai-learning', label: 'AI Learning' },
  { value: 'interactive-courses', label: 'Interactive Courses' },
  { value: 'applications', label: 'Applications' },
  { value: 'data-science', label: 'Data Science' },
  { value: 'specialized', label: 'Specialized' },
  { value: 'presentations', label: 'Presentations' },
];

const ARTICLE_CATEGORIES = [
  { value: 'research', label: 'Research' },
  { value: 'whitepaper', label: 'Whitepaper' },
  { value: 'analysis', label: 'Analysis' },
  { value: 'thought-leadership', label: 'Thought Leadership' },
];

// Readline interface for prompts
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question, defaultValue = '') {
  const defaultText = defaultValue ? ` (${defaultValue})` : '';
  return new Promise((resolve) => {
    rl.question(`${question}${defaultText}: `, (answer) => {
      resolve(answer.trim() || defaultValue);
    });
  });
}

function promptSelect(question, options) {
  console.log(`\n${question}`);
  options.forEach((opt, i) => {
    console.log(`  ${i + 1}. ${opt.label}`);
  });
  return new Promise((resolve) => {
    rl.question('Select number: ', (answer) => {
      const index = parseInt(answer, 10) - 1;
      if (index >= 0 && index < options.length) {
        resolve(options[index].value);
      } else {
        console.log('Invalid selection, using first option.');
        resolve(options[0].value);
      }
    });
  });
}

function promptYesNo(question, defaultValue = false) {
  const defaultText = defaultValue ? '(Y/n)' : '(y/N)';
  return new Promise((resolve) => {
    rl.question(`${question} ${defaultText}: `, (answer) => {
      const normalized = answer.trim().toLowerCase();
      if (normalized === '') {
        resolve(defaultValue);
      } else {
        resolve(normalized === 'y' || normalized === 'yes');
      }
    });
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function generatePlaceholderSVG(title, category, type = 'project') {
  const lines = title.split(' ').reduce((acc, word) => {
    const lastLine = acc[acc.length - 1] || '';
    if ((lastLine + ' ' + word).length <= 20) {
      acc[acc.length - 1] = (lastLine + ' ' + word).trim();
    } else {
      acc.push(word);
    }
    return acc;
  }, ['']);

  // Limit to 3 lines
  const displayLines = lines.slice(0, 3);

  const bgColor = type === 'article' ? COLORS.dawn : COLORS.ocean;
  const accentColor = COLORS.amber;

  const textY = 180 - (displayLines.length - 1) * 20;
  const textElements = displayLines
    .map((line, i) => `<text x="200" y="${textY + i * 44}" text-anchor="middle" fill="${COLORS.white}" font-family="Raleway, system-ui, sans-serif" font-size="32" font-weight="600">${escapeXml(line)}</text>`)
    .join('\n    ');

  return `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${adjustColor(bgColor, -30)};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#bg)"/>
  <rect x="0" y="260" width="400" height="40" fill="${accentColor}" opacity="0.9"/>
  <text x="200" y="286" text-anchor="middle" fill="${COLORS.white}" font-family="Roboto, system-ui, sans-serif" font-size="14" font-weight="500">${escapeXml(category.toUpperCase())}</text>
  ${textElements}
</svg>`;
}

function escapeXml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function adjustColor(hex, amount) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amount));
  const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

function getNextOrder(dataFile) {
  try {
    const content = fs.readFileSync(dataFile, 'utf-8');
    const orderMatches = content.match(/order:\s*(\d+)/g);
    if (orderMatches) {
      const orders = orderMatches.map((m) => parseInt(m.replace('order:', '').trim(), 10));
      return Math.max(...orders) + 1;
    }
  } catch (e) {
    // File doesn't exist or can't be read
  }
  return 0;
}

async function createProject() {
  console.log('\n📦 Create New Project\n');
  console.log('─'.repeat(40));

  const title = await prompt('Project title');
  const slug = await prompt('URL slug', slugify(title));
  const category = await promptSelect('Category', PROJECT_CATEGORIES);
  const shortDescription = await prompt('Short description (for cards)');
  const description = await prompt('Full description');
  const technologies = await prompt('Technologies (comma-separated)');

  console.log('\n📎 Links (press Enter to skip)');
  const demoUrl = await prompt('  Demo URL (e.g., /demos/my-project/index.html)');
  const githubUrl = await prompt('  GitHub URL');
  const liveUrl = await prompt('  Live site URL');

  const featured = await promptYesNo('Featured on homepage?', false);

  // Generate placeholder thumbnail
  const thumbnailPath = `/images/projects/${slug}-thumb.svg`;
  const thumbnailFullPath = path.join(ROOT_DIR, 'public', thumbnailPath);

  const useExistingThumbnail = await prompt('Custom thumbnail path (or press Enter for auto-generated)');

  let finalThumbnailPath = thumbnailPath;
  if (!useExistingThumbnail) {
    // Ensure directory exists
    fs.mkdirSync(path.dirname(thumbnailFullPath), { recursive: true });

    const categoryLabel = PROJECT_CATEGORIES.find(c => c.value === category)?.label || category;
    const svg = generatePlaceholderSVG(title, categoryLabel, 'project');
    fs.writeFileSync(thumbnailFullPath, svg);
    console.log(`\n✅ Generated placeholder thumbnail: ${thumbnailPath}`);
  } else {
    finalThumbnailPath = useExistingThumbnail;
  }

  const today = new Date().toISOString().split('T')[0];
  const nextOrder = getNextOrder(path.join(ROOT_DIR, 'src/data/projects.ts'));

  const projectEntry = `
  {
    id: '${slug}',
    title: '${title.replace(/'/g, "\\'")}',
    slug: '${slug}',
    category: '${category}',
    description: \`${description.replace(/`/g, '\\`')}\`,
    shortDescription: '${shortDescription.replace(/'/g, "\\'")}',
    technologies: [${technologies.split(',').map((t) => `'${t.trim()}'`).join(', ')}],
    links: {${demoUrl ? `\n      demo: '${demoUrl}',` : ''}${githubUrl ? `\n      github: '${githubUrl}',` : ''}${liveUrl ? `\n      live: '${liveUrl}',` : ''}
    },
    images: {
      thumbnail: '${finalThumbnailPath}',
      hero: '${finalThumbnailPath}',
    },
    metrics: [],
    status: 'published',
    featured: ${featured},
    order: ${nextOrder},
    createdAt: '${today}',
    updatedAt: '${today}',
  },`;

  console.log('\n📝 Generated project entry:\n');
  console.log(projectEntry);

  const addToFile = await promptYesNo('\nAdd to projects.ts?', true);
  if (addToFile) {
    const projectsFile = path.join(ROOT_DIR, 'src/data/projects.ts');
    let content = fs.readFileSync(projectsFile, 'utf-8');

    // Find the last project entry and insert after it
    const insertPoint = content.lastIndexOf('},\n]');
    if (insertPoint !== -1) {
      content = content.slice(0, insertPoint + 2) + projectEntry + '\n]' + content.slice(insertPoint + 3 + 1);
      fs.writeFileSync(projectsFile, content);
      console.log('\n✅ Added to src/data/projects.ts');
    } else {
      console.log('\n⚠️  Could not find insertion point. Please add manually.');
    }
  }

  // Create demo directory if demo URL provided
  if (demoUrl && demoUrl.startsWith('/demos/')) {
    const demoDir = path.join(ROOT_DIR, 'public', demoUrl.replace('/index.html', ''));
    if (!fs.existsSync(demoDir)) {
      const createDemo = await promptYesNo(`Create demo directory at ${demoDir}?`, true);
      if (createDemo) {
        fs.mkdirSync(demoDir, { recursive: true });
        fs.writeFileSync(
          path.join(demoDir, 'index.html'),
          `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - Demo</title>
  <style>
    body { font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #0B5570; color: white; }
    .container { text-align: center; padding: 2rem; }
    h1 { font-size: 2rem; margin-bottom: 1rem; }
    p { opacity: 0.8; }
  </style>
</head>
<body>
  <div class="container">
    <h1>${title}</h1>
    <p>Demo coming soon</p>
  </div>
</body>
</html>`
        );
        console.log(`✅ Created demo directory: ${demoDir}`);
      }
    }
  }

  console.log('\n🎉 Project created successfully!\n');
}

async function createCourse() {
  console.log('\n📚 Create New Course\n');
  console.log('─'.repeat(40));

  const title = await prompt('Course title');
  const slug = await prompt('URL slug', slugify(title));
  const shortDescription = await prompt('Short description (for cards)');
  const description = await prompt('Full description');
  const technologies = await prompt('Technologies (comma-separated)');
  const objectives = await prompt('Learning objectives (comma-separated)');

  const hasDemo = await promptYesNo('Has interactive demo?', true);
  let demoUrl = '';
  if (hasDemo) {
    demoUrl = await prompt('Demo URL', `/demos/${slug}/index.html`);
  }

  const featured = await promptYesNo('Featured on homepage?', false);

  // Generate placeholder thumbnail
  const thumbnailPath = `/images/courses/${slug}-thumb.svg`;
  const thumbnailFullPath = path.join(ROOT_DIR, 'public', thumbnailPath);

  const useExistingThumbnail = await prompt('Custom thumbnail path (or press Enter for auto-generated)');

  let finalThumbnailPath = thumbnailPath;
  if (!useExistingThumbnail) {
    fs.mkdirSync(path.dirname(thumbnailFullPath), { recursive: true });
    const svg = generatePlaceholderSVG(title, 'Interactive Course', 'course');
    fs.writeFileSync(thumbnailFullPath, svg);
    console.log(`\n✅ Generated placeholder thumbnail: ${thumbnailPath}`);
  } else {
    finalThumbnailPath = useExistingThumbnail;
  }

  const nextOrder = getNextOrder(path.join(ROOT_DIR, 'src/data/courses.ts'));

  const courseEntry = `
  {
    id: '${slug}',
    title: '${title.replace(/'/g, "\\'")}',
    slug: '${slug}',
    description: \`${description.replace(/`/g, '\\`')}\`,
    shortDescription: '${shortDescription.replace(/'/g, "\\'")}',
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        description: 'Getting started with the course',
        duration: '10 min',
      },
    ],
    objectives: [${objectives.split(',').map((o) => `'${o.trim()}'`).join(', ')}],
    technologies: [${technologies.split(',').map((t) => `'${t.trim()}'`).join(', ')}],
    images: {
      thumbnail: '${finalThumbnailPath}',
      hero: '${finalThumbnailPath}',
    },
    demoUrl: ${demoUrl ? `'${demoUrl}'` : 'undefined'},
    hasInteractiveDemo: ${hasDemo},
    status: 'published',
    featured: ${featured},
    order: ${nextOrder},
  },`;

  console.log('\n📝 Generated course entry:\n');
  console.log(courseEntry);

  const addToFile = await promptYesNo('\nAdd to courses.ts?', true);
  if (addToFile) {
    const coursesFile = path.join(ROOT_DIR, 'src/data/courses.ts');
    let content = fs.readFileSync(coursesFile, 'utf-8');

    const insertPoint = content.lastIndexOf('},\n]');
    if (insertPoint !== -1) {
      content = content.slice(0, insertPoint + 2) + courseEntry + '\n]' + content.slice(insertPoint + 3 + 1);
      fs.writeFileSync(coursesFile, content);
      console.log('\n✅ Added to src/data/courses.ts');
    } else {
      console.log('\n⚠️  Could not find insertion point. Please add manually.');
    }
  }

  console.log('\n🎉 Course created successfully!\n');
}

async function createArticle() {
  console.log('\n📄 Create New Article\n');
  console.log('─'.repeat(40));

  const title = await prompt('Article title');
  const slug = await prompt('URL slug', slugify(title));
  const category = await promptSelect('Category', ARTICLE_CATEGORIES);
  const excerpt = await prompt('Excerpt (summary for cards)');
  const tags = await prompt('Tags (comma-separated)');
  const readingTime = await prompt('Reading time (minutes)', '5');

  console.log('\n📎 Resources (press Enter to skip)');
  const downloadUrl = await prompt('  PDF download path (e.g., /downloads/article.pdf)');
  const externalUrl = await prompt('  External URL');
  const embedPdf = downloadUrl ? await promptYesNo('  Embed PDF on page?', true) : false;

  const featured = await promptYesNo('Featured on Insights page?', false);

  // Generate placeholder thumbnail
  const thumbnailPath = `/images/articles/${slug}-thumb.svg`;
  const thumbnailFullPath = path.join(ROOT_DIR, 'public', thumbnailPath);

  const useExistingThumbnail = await prompt('Custom thumbnail path (or press Enter for auto-generated)');

  let finalThumbnailPath = thumbnailPath;
  if (!useExistingThumbnail) {
    fs.mkdirSync(path.dirname(thumbnailFullPath), { recursive: true });
    const categoryLabel = ARTICLE_CATEGORIES.find(c => c.value === category)?.label || category;
    const svg = generatePlaceholderSVG(title, categoryLabel, 'article');
    fs.writeFileSync(thumbnailFullPath, svg);
    console.log(`\n✅ Generated placeholder thumbnail: ${thumbnailPath}`);
  } else {
    finalThumbnailPath = useExistingThumbnail;
  }

  const today = new Date().toISOString().split('T')[0];

  const articleEntry = `
  {
    id: '${slug}',
    title: '${title.replace(/'/g, "\\'")}',
    slug: '${slug}',
    excerpt: '${excerpt.replace(/'/g, "\\'")}',
    content: \`Add your full article content here.\`,
    tags: [${tags.split(',').map((t) => `'${t.trim()}'`).join(', ')}],
    category: '${category}',
    readingTime: ${parseInt(readingTime, 10)},
    publishedAt: '${today}',
    images: {
      featured: '${finalThumbnailPath}',
      thumbnail: '${finalThumbnailPath}',
    },${externalUrl ? `\n    externalUrl: '${externalUrl}',` : ''}${downloadUrl ? `\n    downloadUrl: '${downloadUrl}',` : ''}${embedPdf ? `\n    embedPdf: true,` : ''}
    featured: ${featured},
  },`;

  console.log('\n📝 Generated article entry:\n');
  console.log(articleEntry);

  const addToFile = await promptYesNo('\nAdd to articles.ts?', true);
  if (addToFile) {
    const articlesFile = path.join(ROOT_DIR, 'src/data/articles.ts');
    let content = fs.readFileSync(articlesFile, 'utf-8');

    // Find the articles array end
    const insertPoint = content.indexOf(']\n\nexport const presentations');
    if (insertPoint !== -1) {
      content = content.slice(0, insertPoint) + articleEntry + '\n]' + content.slice(insertPoint + 1);
      fs.writeFileSync(articlesFile, content);
      console.log('\n✅ Added to src/data/articles.ts');
    } else {
      // Try alternative pattern
      const altInsertPoint = content.lastIndexOf('},\n]');
      if (altInsertPoint !== -1) {
        content = content.slice(0, altInsertPoint + 2) + articleEntry + '\n]' + content.slice(altInsertPoint + 3 + 1);
        fs.writeFileSync(articlesFile, content);
        console.log('\n✅ Added to src/data/articles.ts');
      } else {
        console.log('\n⚠️  Could not find insertion point. Please add manually.');
      }
    }
  }

  console.log('\n🎉 Article created successfully!\n');
}

async function main() {
  const args = process.argv.slice(2);
  const type = args[0] || 'project';

  console.log('\n🚀 Portfolio Item Generator');
  console.log('═'.repeat(40));

  try {
    switch (type) {
      case 'project':
        await createProject();
        break;
      case 'course':
        await createCourse();
        break;
      case 'article':
        await createArticle();
        break;
      default:
        console.log(`Unknown type: ${type}`);
        console.log('Usage: node scripts/new-portfolio-item.js [project|course|article]');
    }
  } catch (error) {
    console.error('\n❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

main();
