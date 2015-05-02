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
