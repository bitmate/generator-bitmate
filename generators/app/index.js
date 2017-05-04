'use strict';
const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const open = require('open');

module.exports = yeoman.generators.Base.extend({
  prompting() {
    var done = this.async();

    this.log();
    this.log(chalk.white.bold.underline('Welcome to the BitMate Generator!'));
    this.log();
    this.log(chalk.white(
        'BitMate allows you to generate applications in the cloud,\n' +
        'with built in best practice and tooling, committed straight\n' +
        'to your repository.\n' +
        ' \n' +
        'To get started with BitMate you will need an account:'));
    this.log();

    var prompts = [{
      type: 'confirm',
      name: 'account',
      message: 'Would you like to open a BitMate account?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  configuring() {
    if (this.props.account === true) {
      open('https://bitmate.io/signup');
    }else{
      this.log();
      this.log(chalk.white.bold('Sorry to see you go!'));
      this.log();
      this.log(chalk.white(
          'If you change your mind, you can sign up at https://bitmate.io'
      ));
    }
  }

});
