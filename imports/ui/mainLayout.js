import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

import { Bins } from '../api/collections.js';
import { Wastes } from '../api/collections.js';
import { Days } from '../api/collections.js';

import './day.html';
import './home.js';
import './bins/addBin.js';
import './bins/manageBin.js';
import './wastes/addWaste.js';
import './wastes/manageWaste.js';
import './mainLayout.html';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Template.mainLayout.helpers({
  bins() {
    return Bins.find({username: Meteor.user().username});
  },

  wastes() {
    return Wastes.find({username: Meteor.user().username});
  },
});

Template.mainLayout.events({
  'click button.show-dialog'(){
    const dialog = document.querySelector('dialog');
    dialog.showModal();
  },
});


Router.route('/manageBin/:binName', function () {
  this.render('manageBin', {
    data: function () {
      return Bins.findOne({binName: this.params.binName});
    }
  });
});

Router.route('/manageWaste/:wasteName', function () {
  this.render('manageWaste', {
    data: function () {
      return Wastes.findOne({wasteName: this.params.wasteName});
    }
  });
});

Router.route('/', function () {
  this.render('home');
});
