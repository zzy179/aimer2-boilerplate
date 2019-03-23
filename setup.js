const fs = require('fs');
const shell = require('shelljs');
const ora = require('ora');
const { exec } = require('child_process');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdout.write('\n');

cleanRepo(
  () => {
    installDeps();
  },
  () => {
    process.stdout.write('\n');
    process.stdout.write('\n删除.git文件失败!');
    process.stdout.write('\n');
    process.stdout.write('\n是否继续下一步? [Y/n] ');

    process.stdin.resume();
    process.stdin.on('data', pData => {
      const val = pData.toString().trim();
      if (val === 'y' || val === 'Y' || val === '') {
        installDeps();
      } else {
        process.exit(0);
      }
    });
  },
);

function cleanRepo(success, failed) {
  fs.readFile('.git/config', 'utf8', (err, data) => {
    if (!err) {
      const isClonedRepo = typeof data === 'string';
      if (isClonedRepo) {
        process.stdout.write('\n');
        process.stdout.write('正在删除.git文件!');
        shell.rm('-rf', '.git/');
        success();
      }
    } else {
      failed();
    }
  });
}

function installDeps() {
  process.stdout.write('\n');
  // eslint-disable-next-line no-console
  const o = ora('正在安装依赖!').start();
  exec('npm install --registry https://registry.npm.taobao.org', err => {
    if (!err) {
      process.stdout.write('\n');
      o.succeed('依赖安装完成,Enjoy it!');
    } else {
      process.stdout.write('\n');
      o.fail('依赖安装失败!');
    }
    endProcess();
  });
}

function endProcess() {
  process.exit(0);
}
