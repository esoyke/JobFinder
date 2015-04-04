angular.module('app', []);
angular.module('app').controller('testCtrl', function($scope){
    $scope.jobs = [{
        title: 'Salesperson',
        description: 'Sell stuff'
    }, {
        title: 'Accountant',
        description: 'Count stuff'
    }];
    
    })