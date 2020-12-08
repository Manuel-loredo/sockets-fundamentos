
    var socket = io();

        // on escuchar informacion
          socket.on('connect', function() {
              console.log('Conectado al servidor');
          });
  
          socket.on('disconnect', function() {
              console.log('Perdimos conexion con el servidor');
          })
  

          
          // emit enviar informaciom
          socket.emit('enviarMensaje', {
             usuario: 'Manuel',
              mensaje: 'hola mundo'
          }, function(resp){
              console.log( 'Respuesta server: ', resp);
          });
  
          //escuchar informacion
          socket.on('enviarMensaje', function(mensaje) {
              console.log('Servidor:', mensaje);
          });