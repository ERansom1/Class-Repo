var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function(name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function(event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// TODO: Add comments to describe the functionality of this jQuery UI interaction
//Function to pre-determine auto completion
$(function() {
  var skillNames = [
    'Bootstrap',
    'C',
    'C++',
    'CSS',
    'Express.js',
    'Git',
    'HTML',
    'Java',
    'JavaScript',
    'jQuery',
    'JSON',
    'MySQL',
    'Node.js',
    'NoSQL',
    'PHP',
    'Python',
    'React',
    'Ruby',
    'Ernest',
  ];
  $('#skill-name').autocomplete({
    source: skillNames
  });
});

// TODO: Add comments to describe the functionality of this jQuery UI interaction
//Calendar selection with month and year
$(function() {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true
  });
});

// TODO: Add comments to describe the functionality of this jQuery UI interaction
//Allow skillname to be sorted
$(function() {
  $('#skills-list').sortable({
    placeholder: 'ui-state-highlight'
  });
  $('#skills-list').disableSelection();
});
