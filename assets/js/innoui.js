/* CREATED BY INNOVISION SOFT SRL */ 
/* innovision-material.js - written by Vlad Onu and Daniel Tarcinsky */


$("#basicModalEx").on("shown.bs.modal", function() {
  $("#myInput").focus()
})

// tooltip initialization
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})

// popover initialization
$(function() {
  $('[data-toggle="popover"]').popover()
})

// waves initialization
$(document).ready(function() {
	// loading waves script
	Waves.init();
  Waves.attach('.btn-rotating', ['waves-circle', 'waves-light']);
  Waves.attach('.btn:not(.btn-link):not(.btn-light):not(.btn-white):not(.aqua-gradient):not([class*="btn-outline-"]):not([class*="btn-text-"]):not([data-notification-counter]), .btn-floating', ['waves-light']);
  Waves.attach('.btn-link, .btn-light, .btn-white, .btn.aqua-gradient, [class*="btn-outline-"], [class*="btn-text-"]', ['waves-effect']);
  Waves.attach('.chip', ['waves-effect']);
  Waves.attach('.material-icons.action-icon', ['waves-effect']);
  Waves.attach('.navbar-dark .navbar-nav .nav-item', ['waves-light']);
  Waves.attach('.navbar-light .navbar-nav .nav-item', ['waves-effect']);
  Waves.attach('.page-link', ['waves-effect']);
});
