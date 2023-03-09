const inquirer = require('inquirer');

async function askForCommitlint() {
  const { commitlint } = await inquirer.prompt([
    {
      type: 'checkbox',
      message: '请选择是否使用commitlint：(是/否)',
      name: 'commitlint',
      choices: [
        new inquirer.Separator(' = The Commitlint = '),
        {
          name: '是'
        },
        {
          name: '否'
        }
      ],
      validate(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one commitlint.';
        }

        return true;
      }
    }
  ]);

  return commitlint;
}

module.exports = {
  askForCommitlint
};
