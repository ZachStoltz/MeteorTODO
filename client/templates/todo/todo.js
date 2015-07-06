Template.todo.helpers({
  tasks: [{
      item: 'List Item One',
      priority: 4
    },
    {
      item: 'List Item Two',
      priority: 3
    },
    {
      item: 'List Item Three',
      priority: 2
    },
    {
      item: 'List Item Four',
      priority: 1
    },
    {
      item: 'List Item Five',
      priority: 5
    }
  ]
});

Template.todo.events({
  'click .addItem': function (ev) {
    ev.preventDefault();

    alert($(ev.target));
  }
});