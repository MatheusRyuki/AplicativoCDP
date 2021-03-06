/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
            $("#field1").hide();
    $("#field2").hide();
          $("#msg1").hide();
            $("#second").hide();
        $("#terceiro").hide();
             $("#quarto").hide();
        $("#documento").hide();
         $("#fifth").hide();
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
 
        
        
        
        // Primeiro Clique
$("#first").click(function(){
      $("#logo").remove();
        $("#titulo").remove();
    $("#first").remove();
      $("#msg1").show();
    $("#field1").show();
    $("#field2").show();
      $("#second").show();
    
});
        
                
        // Segundo Clique
$("#second").click(function(){
     localStorage.fiscal = $('#Fiscal').val();
         localStorage.area = $('#Area').val();
    var ator = localStorage.fiscal,
        local = localStorage.area;
    
      $("#field1").remove();
        $("#field2").remove();
    $("#msg1").remove();
        $("#second").remove();
    
    $("#rapaz").text(ator);
    
      $("#local").text(local);
    
    $("#terceiro").show();
    
});

        // Terceiro CLique
$("#third").click(function(){
        localStorage.resposta1 = $('.resposta1:checked').val(),
           localStorage.resposta2 = $('.resposta2:checked').val(),
           localStorage.resposta3 = $('.resposta3:checked').val()
       localStorage.resposta4 = $('.resposta4:checked').val(),
       localStorage.resposta5 = $('.resposta5:checked').val(),
       localStorage.resposta6 = $('.resposta6:checked').val(),
       localStorage.resposta7 = $('.resposta7:checked').val(),
       localStorage.resposta8 = $('.resposta8:checked').val(),
       localStorage.resposta9 = $('.resposta9:checked').val(),
       localStorage.resposta10 = $('.resposta10:checked').val(),
       localStorage.resposta11 = $('.resposta11:checked').val(),
       localStorage.resposta12 = $('.resposta12:checked').val(),
       localStorage.resposta13 = $('.resposta13:checked').val(),
       localStorage.resposta14 = $('.resposta14:checked').val(),
       localStorage.resposta15 = $('.resposta15:checked').val(),
       localStorage.resposta16 = $('.resposta16:checked').val(),
       localStorage.resposta17 = $('.resposta17:checked').val(),
       localStorage.resposta18 = $('.resposta18:checked').val(),
       localStorage.resposta19 = $('.resposta19:checked').val();
     $("#terceiro").hide();
    for (var i = 0; i < localStorage.length; i++){  
        if(typeof localStorage.getItem(localStorage.key(i)) == undefined){
                navigator.notification.alert(
                        'Você errou um dos campos!',  // message
                        function(){},         // callback
                        'Erro',            // title
                        'OK'                  // buttonName
                );
        $("#terceiro").show();
        } else {
            $("#terceiro").remove();
             $("#quarto").show();
        }
    }
});
        
        //Quarto Clique - Geração
        
$("#finally").click(function(){
    var text = 'Fiscal: ' +  localStorage.fiscal  +
		'\nArea: ' + localStorage.area + '\n\nOs quesitos abaixos estao conformes? :'
                + '\n\nLimpeza: ' +  localStorage.resposta1  +
		'\nHidrantes: ' + localStorage.resposta2
                + '\nAgua Acumulada: ' +  localStorage.resposta3  +
		'\nPavimentacao: ' + localStorage.resposta4
                + '\nTransito: ' +  localStorage.resposta5  +
		'\nSinalizacao: ' + localStorage.resposta6
                + '\nGeracao de Particulados: ' +  localStorage.resposta7  +
		'\nEPI: ' + localStorage.resposta8 
                  + '\nEstacionamento: ' +  localStorage.resposta9  +
		'\nAcumulo/Fuga de Residuos: ' + localStorage.resposta10
                  + '\nEstrutura: ' +  localStorage.resposta11  +
		'\nIluminacao: ' + localStorage.resposta12
                  + '\nCarga Perigosa: ' +  localStorage.resposta13  +
		'\nDescarte de Residuo: ' + localStorage.resposta14
                  + '\nGeracao de efluentes liquidos: ' +  localStorage.resposta15  +
		'\nArmazenamento de Carga: ' + localStorage.resposta16
                  + '\nCondicoes de Maquinas e Equipamentos: ' +  localStorage.resposta17  +
		'\nProcedimento Operacional: ' + localStorage.resposta18 
               + '\nOperador Portuario: ' +  localStorage.resposta19;
    
        
                $("#quarto").remove();
                $("#fifth").show();
                
 
    
});
        
        //Quinto Clique - Impressão
$("#fifth").click(function(){
    var page = text;
        
        cordova.plugins.printer.print(page, 'Relatório Checklist.pdf');
            
   
    
    console.log('Received Event: ' + id);
    

        });
}};

app.initialize();


    


