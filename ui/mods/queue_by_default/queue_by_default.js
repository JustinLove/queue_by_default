model.shouldQueueCommand = function(event) {
  return !event.shiftKey
}

model.checkQueueAndWatchForEnd = function(mdevent, counter, onEnd) {
  return model.shouldQueueCommand(mdevent)
}
