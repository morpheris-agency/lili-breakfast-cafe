import fs from 'fs';
import path from 'path';

const menuDataPath = path.join(__dirname, 'menuData.ts');
let content = fs.readFileSync(menuDataPath, 'utf8');

// Use a global RegExp to replace all unsplash URLs
content = content.replace(/imageUrl:\s*"https:\/\/images\.unsplash\.com[^"]+"/g, (match, offset, string) => {
    // Extract id from the line before it or just random
    // It's easier just to assign a random picsum string
    const rand = Math.floor(Math.random() * 1000) + 100;
    return `imageUrl: "https://picsum.photos/seed/${rand}/400/300"`;
});

fs.writeFileSync(menuDataPath, content);
console.log('Successfully updated menu data to Picsum URLs!');
