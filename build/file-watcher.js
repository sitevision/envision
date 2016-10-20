var watch = require('watch');
watch.createMonitor('src', function(monitor) {
   monitor.on('changed', function(f, stat) {
      console.log('changed');
   });
});
