import { spawn } from 'child_process';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const child = spawn('cmd.exe', [
  '/c', 'start', '/b', '""',
  `"${chromePath}"`,
  '--remote-debugging-port=9222',
  '--headless=new',
  '--disable-gpu'
], {
  detached: true,
  stdio: 'ignore',
  shell: true
});

child.unref();
console.log('Headless Chrome successfully spawned as a detached system task.');
process.exit(0);
