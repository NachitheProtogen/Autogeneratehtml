const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createDirectory(projectPath, projectName) {
  const fullProjectPath = path.join(projectPath, projectName);

  if (!fs.existsSync(fullProjectPath)) {
    fs.mkdirSync(fullProjectPath);
    console.log(`Project directory '${fullProjectPath}' created.`);

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${projectName}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
    `;

    const cssContent = `
/* Add your CSS styles here */
    `;

    const jsContent = `
// Add your JavaScript code here
    `;

    fs.writeFileSync(path.join(fullProjectPath, 'index.html'), htmlContent);
    fs.writeFileSync(path.join(fullProjectPath, 'styles.css'), cssContent);
    fs.writeFileSync(path.join(fullProjectPath, 'script.js'), jsContent);

    console.log('Project files created.');
    rl.close();
  } else {
    console.log(`Error: Directory '${fullProjectPath}' already exists.`);
    rl.close();
  }
}

rl.question('Enter project path: ', (projectPath) => {
  rl.question('Enter project name: ', (projectName) => {
    createDirectory(projectPath, projectName);
  });
});
