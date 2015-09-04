(function() {
  model.shouldAppendFab = function(event) {
    return !event.shiftKey
  }
  model.shouldExitModeFab = function(event) {
    return event.shiftKey
  }

  model.shouldAppendCommand = function(event) {
    return event.shiftKey || model.cmdQueueCount() > 1
  }
  model.shouldExitModeCommand = function(event) {
    return false
  }

  var unselect = function() {
    api.select.empty();
    model.selection(null)
    model.playSelectionSound(true, null, false, null) 
  }

  var LeftButton = 0
  var MiddleButton = 1
  var RightButton = 2

  model.holodeckModeMouseDown.fab = function (mdevent) {
    if (mdevent.button === LeftButton) {
      model.beginFabDown(mdevent)
      return true;
    }
    else if (mdevent.button === RightButton) {
      model.endFabMode();
      unselect()
      return true;
    }
    return false;
  };

  var holodeckCommandMouseDown = function (command) {
    return function (mdevent) {
      if (mdevent.button === LeftButton) {
        model.commandModeDown(mdevent, command)
        return true;
      } else if (mdevent.button === RightButton) {
        model.endCommandMode()
        unselect()
        return true;
      }
    };
  };

  for (var i = 0; i < model.commands().length; ++i) {
    var command = model.commands()[i];
    model.holodeckModeMouseDown['command_' + command] =
      holodeckCommandMouseDown(command);
  }
})()
