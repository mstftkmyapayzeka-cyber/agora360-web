const fs = require('fs');
const dir = 'src/pages/admin/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Admin.tsx') && f !== 'AdminDashboard.tsx');

files.forEach(f => {
  let content = fs.readFileSync(dir + f, 'utf8');
  
  if (!content.includes('useSearchParams')) {
      if (content.includes('react-router-dom')) {
          content = content.replace(/import \{([^}]*)\} from 'react-router-dom';/, (match, p1) => {
              return `import { ${p1}, useSearchParams } from 'react-router-dom';`;
          });
      } else {
          content = "import { useSearchParams } from 'react-router-dom';\n" + content;
      }
  }

  if (!content.includes('sectionQuery')) {
      content = content.replace(/const \[currentItem, setCurrentItem\] = useState<Partial<.*>>\(\{\}\);/, 
        `$&\n    const [searchParams] = useSearchParams();\n    const sectionQuery = searchParams.get('section');`);
  }

  const dataVarMatch = content.match(/const \{ ([a-zA-Z]+), /);
  if (dataVarMatch) {
      const dataVar = dataVarMatch[1];
      if (!content.includes(`filteredData`)) {
         content = content.replace(/return \(\s*<div className="space-y-6">/, 
            `const filteredData = sectionQuery ? ${dataVar}.filter(item => item.section === sectionQuery) : ${dataVar};\n\n    return (\n        <div className="space-y-6">`);
         
         // Replace array references in the table rendering
         content = content.replace(new RegExp(`\\{${dataVar}\\.length === 0 \\?`, 'g'), `{filteredData.length === 0 ?`);
         content = content.replace(new RegExp(`\\{${dataVar}\\.map`, 'g'), `{filteredData.map`);
      }
  }

  content = content.replace(/setCurrentItem\(\{\}\)/g, `setCurrentItem({ section: sectionQuery || 'portal' })`);

  fs.writeFileSync(dir + f, content);
  console.log('Updated filters in ' + f);
});
