$(function () 
  {	
  	$("body").on("click",".modalButton", function()
  		{
  			$("#myModal").modal();
  			return false;
  		});	
    $('[data-toggle="tooltip"]').tooltip();
  });

var app= angular.module('app',[]);

app.controller('showCommentsController',['$scope','$http', function($scope,$http)
  {
    $http.get("json/comentarios.json").
      success(function(data, status) 
      {
        $scope.opiniones = data;
        $scope.status = status; 
      })
  }]);
app.controller('showBebidasFriasController',['$scope','$http', function($scope,$http)
  {
    $http.get("json/frias.json").
    success(function(data, status) 
        {
          $scope.bebidas = data;
          $scope.status = status; 
        })

    $scope.elegirTipo = function(event)
      {
        event.preventDefault();
        $scope.opcion = $(event.currentTarget).attr("value");
        if($scope.opcion == 1){
            $http.get("json/frias.json").
            success(function(data, status) 
          {
            $scope.bebidas = data;
            $scope.status = status; 
          })
        }
        else if($scope.opcion == 2){
             $http.get("json/calientes.json").
            success(function(data, status) 
          {
            $scope.bebidas = data;
            $scope.status = status; 
          })
        }
        else if ($scope.opcion == 3) {
             $http.get("json/comida.json").
            success(function(data, status) 
          {
            $scope.bebidas = data;
            $scope.status = status; 
          })
        }
         
      };

    $scope.IsVisible = true;
    $scope.IsVisible2= false;
    /*
   	$scope.showTipos = function (e) 
  		{
        
  			$scope.select="tipos";
  			$scope.tipos = $(e.currentTarget).attr("value"); 
  			$http.post($scope.url, {"val":$scope.tipos, "select":$scope.select}).
  		    success(function(data, status) 
  		    {
            if(data == "")
              {
                alert("No hay valores en data");
                $scope.select="items";
                $http.post($scope.url, {"empresa":$scope.empresa,"select":$scope.select, "opc":$scope.opcion}).
                success(function(data, status) 
                  {
                    $scope.bebidas = data;
                    $scope.status = status; 
                  })
              }
            else
              {
                $scope.IsVisible = false;
                $scope.IsVisible2= true;
                $scope.tipos = data;
                $scope.leaveMouse= function ()
                  {
                    $scope.select="items";
                    $http.post($scope.url, {"empresa":$scope.empresa,"select":$scope.select, "opc":$scope.opcion}).
                    success(function(data, status) 
                      {
                        $scope.bebidas = data;
                        $scope.status = status;
                        $scope.IsVisible = true;
                        $scope.IsVisible2= false;
                      })
                  }  
              }
  		      $scope.status = status;  
  		    });
  		};*/
  }]);


