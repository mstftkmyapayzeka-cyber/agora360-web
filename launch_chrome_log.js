import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const log = fs.createWriteStream('chrome_error.log');

const child = spawn(chromePath, [
  '--remote-debugging-port=9222',
  '--user-data-dir=C:\\Users\\atill\\AppData\\Local\\Google\\Chrome\\User Data',
  '--headless=new',
  '--disable-gpu'
]);

child.stdout.pipe(log);
child.stderr.pipe(log);

child.on('error', (err) => {
  fs.writeFileSync('chrome_spawn_error.txt', err.stack);
});

console.log('Headless Chrome started on port 9222. Keeping process alive...');

// Keep Node process running so the child process stays alive
setTimeout(() => {
  console.log('Finished 10-minute timeout. Exiting.');
  process.exit(0);
}, 600000); // 10 minutes
