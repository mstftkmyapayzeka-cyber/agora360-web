const fs = require('fs');
const dir = 'src/pages/admin/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Admin.tsx') && f !== 'AdminDashboard.tsx');

files.forEach(f => {
    let content = fs.readFileSync(dir + f, 'utf8');
    
    // ensure filteredData.map is used
    const dataVarMatch = content.match(/const \{ ([a-zA-Z]+), /);
    if (dataVarMatch) {
        const dataVar = dataVarMatch[1];
        content = content.replace(new RegExp(`\\{${dataVar}\\.map`), `{filteredData.map`);
    }

    // find what the map parameter is: {filteredData.map((X) =>
    const mapMatch = content.match(/filteredData\.map\(\s*\(\s*([a-zA-Z]+)\s*\)/);
    if (mapMatch) {
        const paramName = mapMatch[1];
        // replace {item.section === to {X.section ===
        // but only if it's the section rendering part we added
        content = content.replace(/\{item\.section ===/g, `{${paramName}.section ===`);
    }

    // also fix currentItem to currentArticle or whatever the state is called in the section dropdown
    const stateVarMatch = content.match(/const \[([a-zA-Z]+), ([a-zA-Z]+)\] = useState<Partial</);
    if (stateVarMatch) {
        const stateVar = stateVarMatch[1]; // e.g. currentArticle
        const setStateVar = stateVarMatch[2]; // e.g. setCurrentArticle
        
        // replace value={currentItem.section || 'portal'} with value={currentArticle.section || 'portal'}
        content = content.replace(/value=\{currentItem\.section/g, `value={${stateVar}.section`);
        content = content.replace(/onChange=\{e => setCurrentItem\(\{ \.\.\.currentItem, /g, `onChange={e => ${setStateVar}({ ...${stateVar}, `);
    }

    fs.writeFileSync(dir + f, content);
    console.log('Fixed variables in ' + f);
});
