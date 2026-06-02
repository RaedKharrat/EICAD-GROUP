const fs = require('fs');
const path = require('path');

const modulesDir = 'C:\\Users\\HP\\OneDrive\\Desktop\\ghassen\\apps\\api\\src\\modules';

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.controller.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove @Version('1') decorator
      if (content.includes("@Version('1')")) {
        content = content.replace(/@Version\('1'\)\s*/g, '');
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed ${file}`);
      }
    }
  }
}

try {
  walkDir(modulesDir);
  console.log('Successfully removed @Version decorators!');
} catch (error) {
  console.error('Error:', error);
}
