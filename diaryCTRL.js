angular.module('diary')
	.controller('diaryCTRL', function($scope, $http){
		$scope.title = 'MyDiary';
		
		$http.get("https://localhost/diary_api/")
		.then(function(response){
			$scope.data = response.data.result;
		});
		
		$scope.diary = {
			judul:'',
			waktu:'',
			isi:''
		};
		
		$scope.diary = {};
		
		$scope.tambahData = function(){
			$http({
				method:'post',
				url:'https://localhost/diary_api/',
				data: $scope.diary
			})
			.then(function(diary){
				$scope.diary = {}
			})
		};
		
		
	})
