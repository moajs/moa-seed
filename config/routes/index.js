var routes = require('require-directory')(module);



function mount(app){
  
  for (var k in routes) {
    console.log('xxx=' + k);
    console.log('xxx=' + routes[k]);
  
    if(k === 'home'){
      app.use('/', routes[k]);
    }else{
      app.use('/' + k, routes[k]);
    }
  }
  
}

module.exports = mount;