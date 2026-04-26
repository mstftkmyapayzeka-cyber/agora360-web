const fs = require('fs');
const dir = 'src/pages/';

const targets = [
  { file: 'ArticlesPage.tsx', dataVar: 'articles' },
  { file: 'AnalysisPage.tsx', dataVar: 'analyses' },
  { file: 'LearningPage.tsx', dataVar: 'learningModules' },
  { file: 'PodcastsPage.tsx', dataVar: 'podcasts' },
  { file: 'ResourcesPage.tsx', dataVar: 'resources' }
];

targets.forEach(({ file, dataVar }) => {
  let content = fs.readFileSync(dir + file, 'utf8');
  if (content.includes('useSection')) {
      console.log('Skipping ' + file);
      return;
  }
  
  // Add import if needed
  content = content.replace(/import \{ useData \} from '\.\.\/context\/DataContext';/, 
    "import { useData } from '../context/DataContext';\nimport { useSection } from '../context/SectionContext';");

  // Add useMemo if not imported
  if (!content.includes('useMemo')) {
      content = content.replace(/import React(.*?)(?:, \{([^}]*)\})? from 'react';/, (match, p1, p2) => {
          if (p2) {
             return `import React${p1}, { ${p2}, useMemo } from 'react';`;
          }
          return `import React${p1}, { useMemo } from 'react';`;
      });
      if (!content.includes('useMemo') && content.includes("import { useState } from 'react';")) {
          content = content.replace("import { useState } from 'react';", "import { useState, useMemo } from 'react';");
      } else if (!content.includes('useMemo') && content.includes("import { useState, useEffect } from 'react';")) {
          content = content.replace("import { useState, useEffect } from 'react';", "import { useState, useEffect, useMemo } from 'react';");
      }
  }

  // Replace hook
  const regex = new RegExp(`const \\{ ${dataVar} \\} = useData\\(\\);`);
  const replacement = `const { ${dataVar}: allData } = useData();
    const { activeSection } = useSection();
    const ${dataVar} = useMemo(() => allData.filter(x => !activeSection || x.section === activeSection.id || x.section === 'portal'), [allData, activeSection]);`;
  
  content = content.replace(regex, replacement);
  fs.writeFileSync(dir + file, content);
  console.log('Updated ' + file);
});
