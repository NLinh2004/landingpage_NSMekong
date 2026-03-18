const fs = require('fs');
const src = 'C:/Users/Admin/.gemini/antigravity/brain/e8417fba-ec8f-4546-adbb-89a1dd99e8a2/hero_agriculture_1773817175009.png';
const dst = 'C:/Users/Admin/mekong-landing/src/assets/hero.png';
fs.copyFileSync(src, dst);
console.log('Copied! Size:', fs.statSync(dst).size);
