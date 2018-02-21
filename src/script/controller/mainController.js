"use strict";
angular.module("app").controller("mainCtrl",["$scope",function ($scope) {
    $scope.abc = 1;
    $scope.list = [{
        id:1,
        img:"image/focus.png",
        title:"销售",
        city:"上海",
        company:"千度",
        industry:"互联网",
        time:"2016-11-21 11:20"
    },{
        id:2,
        img:"image/focus.png",
        title:"WEB前端",
        city:"北京",
        company:"腾讯",
        industry:"互联网",
        time:"2016-11-22 11:20"
    }];
}])