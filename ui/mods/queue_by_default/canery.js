(function() {
  var viewModel = {
    targetVersion: '63475',
    buildVersion: model.buildVersion
  }

  //load html dynamically
  loadTemplate = function (element, url, model) {
    element.load(url, function () {
      console.log("Loading html " + url);
      ko.applyBindings(viewModel, element.get(0));
    });
  };

  if (viewModel.targetVersion != viewModel.buildVersion()) {
    var container = $('<div id="insertion_point"></div>')
    container.appendTo('body')
    loadTemplate(container, 'coui://ui/mods/queue_by_default/canery.html', model);
  }
})()
