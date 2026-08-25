import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempDir = 'C:\\Users\\atill\\AppData\\Local\\Temp\\chrome-debug';
const defaultPortFile = 'C:\\Users\\atill\\AppData\\Local\\Google\\Chrome\\User Data\\DevToolsActivePort';

if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

// Launch VISIBLE Chrome (no --headless) with temp profile
const child = spawn(chromePath, [
  '--remote-debugging-port=9222',
  `--user-data-dir=${tempDir}`,
  '--no-first-run',
  '--no-default-browser-check',
  'https://app.supabase.com'
], {
  detached: false,
  stdio: ['ignore', 'pipe', 'pipe']
});

const log = fs.createWriteStream('chrome_error.log', { flags: 'w' });
child.stdout.pipe(log);
child.stderr.pipe(log);

child.on('error', (err) => {
  console.error('Chrome error:', err.message);
  process.exit(1);
});

console.log('Visible Chrome started with PID:', child.pid);

// Watch for DevToolsActivePort in temp dir and copy to default
let copied = false;
const interval = setInterval(() => {
  const tempPort = `${tempDir}\\DevToolsActivePort`;
  if (fs.existsSync(tempPort) && !copied) {
    copied = true;
    const content = fs.readFileSync(tempPort, 'utf8');
    fs.writeFileSync(defaultPortFile, content);
    console.log('DevToolsActivePort copied! Content:', content.trim());
    clearInterval(interval);
  }
}, 300);

// Keep alive for 15 minutes
setTimeout(() => {
  clearInterval(interval);
  if (fs.existsSync(defaultPortFile)) fs.unlinkSync(defaultPortFile);
  child.kill();
  process.exit(0);
}, 900000);
