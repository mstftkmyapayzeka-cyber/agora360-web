const fs = require('fs');
const dir = 'src/pages/admin/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Admin.tsx'));

files.forEach(f => {
  let content = fs.readFileSync(dir + f, 'utf8');
  if (content.includes('Bölüm</label>')) return;
  const sectionHtml = `
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Bölüm</label>
                        <select
                            required
                            className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                            value={currentItem.section || 'portal'}
                            onChange={e => setCurrentItem({ ...currentItem, section: e.target.value })}
                        >
                            <option value="portal">Ana Portal</option>
                            <option value="siyaset">Siyaset</option>
                            <option value="ui">Uluslararası İlişkiler</option>
                            <option value="sanat_kosesi">Sanat Köşesi</option>
                        </select>
                    </div>`;
  content = content.replace(/<form[^>]*>\s*/, match => match + sectionHtml + '\n');
  fs.writeFileSync(dir + f, content);
  console.log('Updated ' + f);
});
