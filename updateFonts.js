const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace H1/H2 font-heading with font-script text-5xl
    // This is a bit tricky with regex, so we'll replace font-heading globally to font-script
    content = content.replace(/font-heading/g, 'font-script');

    // Remove font-bold where font-script is used
    content = content.replace(/font-script\s+font-bold/g, 'font-script font-normal');
    // Also remove font-medium
    content = content.replace(/font-script\s+font-medium/g, 'font-script font-normal');

    // Change H1/H2 big titles to use text-5xl (e.g. text-6xl md:text-8xl -> text-5xl)
    // We will specifically target the H1/H2 class strings that we saw in the grep.

    // Hero.tsx
    content = content.replace(/text-6xl md:text-8xl font-script font-normal/g, 'font-script text-5xl');

    // Page.tsx (H2)
    content = content.replace(/text-4xl md:text-6xl font-script font-normal/g, 'font-script text-5xl');

    // MenuPageClient.tsx (H1)
    content = content.replace(/text-6xl md:text-8xl font-script font-normal/g, 'font-script text-5xl');

    // About page H1 & H2
    content = content.replace(/text-4xl md:text-5xl font-script font-normal/g, 'font-script text-5xl');

    // Contact page H1
    content = content.replace(/text-6xl md:text-8xl font-script font-normal/g, 'font-script text-5xl');

    // Change small subtitles, buttons, and category headers to font-display font-black uppercase tracking-widest
    // We replace font-display font-bold uppercase tracking-wider
    content = content.replace(/font-display\s+font-bold\s+uppercase\s+tracking-wide[r]*/g, 'font-display font-black uppercase tracking-widest');
    content = content.replace(/font-display\s+font-bold/g, 'font-display font-black');
    content = content.replace(/tracking-wider/g, 'tracking-widest');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
    }
}

function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            walk(file);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                replaceInFile(file);
            }
        }
    });
}

walk(path.join(__dirname, 'src'));
