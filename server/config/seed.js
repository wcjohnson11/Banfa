/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Card = require('../api/card/card.model');
var Category = require('../api/category/category.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Card.find({}).remove(function() {
  Card.create({
    hanzi: '中国',
    pinyin: 'Zhōng guó',
    info: 'Countries',
    translation: 'China'
  },{
    hanzi: '美国',
    pinyin: 'Měi guó',
    info: 'Countries',
    translation: 'America'
  },{
    hanzi: '马里',
    pinyin: 'Mǎ lǐ',
    info: 'Countries',
    translation: 'Mali'
  },{
    hanzi: '日本',
    pinyin: 'Rì běn',
    info: 'Countries',
    translation: 'Japan'
  }, {
    hanzi: '德国',
    pinyin: 'Dé guó',
    info: 'Countries',
    translation: 'Germany'
  }, function() {
      console.log('finished populating cards');
    }
  );
});
Category.find({}).remove(function() {
  Category.create({
    name : 'Countries',
    info : 'A set of country names'
  }, {
    name : 'Food!',
    info : 'Some of my favorite types of food, chinese and not'
  }, function() {
      console.log('finished populating categories');
    }
  );
});