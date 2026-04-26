const fs = require('fs');
const dir = 'src/pages/admin/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Admin.tsx'));

files.forEach(f => {
  let content = fs.readFileSync(dir + f, 'utf8');
  if (content.includes('>Bölüm</th>')) return;

  content = content.replace(/<th className="p-4 font-medium text-right">İşlemler<\/th>/, 
    '<th className="p-4 font-medium">Bölüm</th>\n                                <th className="p-4 font-medium text-right">İşlemler</th>');
  
  content = content.replace(/<td className="p-4 text-right">\s*<div className="flex justify-end gap-2">/g, match => {
      return `<td className="p-4 text-slate-600 dark:text-slate-300">
                                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-mono">
                                                {item.section === 'sanat_kosesi' ? 'Sanat' : item.section === 'siyaset' ? 'Siyaset' : item.section === 'ui' ? 'Uluslararası' : 'Portal'}
                                            </span>
                                        </td>\n                                        ` + match;
  });

  fs.writeFileSync(dir + f, content);
  console.log('Updated tables in ' + f);
});
