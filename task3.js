<!DOCTYPE html>
<html lang="en">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>


<script>
var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    
    $scope.gap = 10;
    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 10;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
	
	

	
	
	$scope.items = [
	{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cheque"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cheque"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cheque"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cash"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cheque"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cash"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cheque"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cheque"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"digital payment"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cheque"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cash"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cash"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cheque"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"cash"},
{"trsactiondoneby":"piyush","moneysendto":"kapil","trsactiontime":"none","trsactionstatus":"success","trsactiontype":"digital payment"}
	];




	$scope.transactionType = ["cash", "cheque", "digital payment]"];
    $scope.reset = function() {
        alert("hiii");
    };
	
	$scope.range = function (size,start, end) {
    var ret = [];        
    console.log(size,start, end);

       if (size < end) {
        end = size;
        if(size<$scope.gap){
             start = 0;
        }else{
             start = size-$scope.gap;
        }

    }
    for (var i = start; i < end; i++) {
        ret.push(i);
    }        
     console.log(ret);        
    return ret;
};
	
	
});


</script>
<body>

<div ng-app="myApp" ng-controller="formCtrl">
  <form novalidate>
    Sender name:<br>
    <input type="text" ng-model="user.senderName"><br>
    receiver name:<br>
    <input type="text" ng-model="user.receiverName"><br>
	Amount:<br>
    <input type="text" ng-model="user.amount"><br>
	Transaction Type:<br>
	<select ng-model="selectedName" ng-options="x for x in transactionType">
</select><br>
	<br>
    <button ng-click="reset()">RESET</button>
  </form>

<table border="1px solid black">
                <thead>
                    <tr>
                        <th class="trsactiondoneby">trsaction done by&nbsp;<a ng-click="sort_by('trsactiondoneby')"><i class="icon-sort"></i></a></th>
                        <th class="moneysendto">money send to&nbsp;<a ng-click="sort_by('moneysendto')"><i class="icon-sort"></i></a></th>
                        <th class="trsactiontime">trsaction time&nbsp;<a ng-click="sort_by('trsactiontime')"><i class="icon-sort"></i></a></th>
                        <th class="trsactionstatus">trsaction status&nbsp;<a ng-click="sort_by('trsactionstatus')"><i class="icon-sort"></i></a></th>
                        <th class="trsactiontype">trsaction type&nbsp;<a ng-click="sort_by('trsactiontype')"><i class="icon-sort"></i></a></th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in items">
                        <td>{{item.trsactiondoneby}}</td>
                        <td>{{item.moneysendto}}</td>
                        <td>{{item.trsactiontime}}</td>
                        <td>{{item.trsactionstatus}}</td>
                        <td>{{item.trsactiontype}}</td>
                    </tr>
                </tbody>
				<tfoot>
                    <td colspan="6">
                        <div class="pagination pull-right">
                            <ul>
                                <li ng-class="{disabled: currentPage == 0}">
                                    <a href ng-click="prevPage()">« Prev</a>
                                </li>
                                <li ng-repeat="n in range(pagedItems.length)"
                                    ng-class="{active: n == currentPage}"
                                ng-click="setPage()">
                                    <a href ng-bind="n + 1">1</a>
                                </li>
                                <li ng-class="{disabled: currentPage == pagedItems.length - 1}">
                                    <a href ng-click="nextPage()">Next »</a>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tfoot>
            </table> 

</div>


</body>
</html>
