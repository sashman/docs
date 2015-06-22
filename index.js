var learnblocks = require('@docs/learnblocks');
var sidebar = require('@docs/sidebar');
var nav = require('@docs/nav');
var quicklinks = require('@docs/quicklinks');
var react = require('react');

require('webcomponents.js');

// register custom elements
document.registerElement('gh-button', require('@docs/gh-button'));

var learnblocksSelector = document.querySelector('.learn-blocks');
if (learnblocksSelector) react.renderComponent(learnblocks(), learnblocksSelector);

var navSelector = document.querySelector('.nav-sticky');
if (navSelector) react.renderComponent(nav(), navSelector);

var quickLinksSelector = document.querySelector('.quicklinks');
if (quickLinksSelector) react.renderComponent(quicklinks(), quickLinksSelector);

var sidebarSelector = document.querySelector('.sidebar');
if (sidebarSelector) react.renderComponent(sidebar()(), sidebarSelector);

// init metrics
require('@docs/metrics');
