'use strict';

app.controller('PostsCtrl', function($scope, $location, Post, Auth){
	$scope.post = {url: 'http://', title: '', msg: ''};
	$scope.posts = Post.all;
	$scope.user = Auth.user;
	/*
	$scope.submitPost = function(){
		Post.create($scope.post).then(function(ref){
			//$scope.post = {url: 'http://', title: ''};
			$location.path('/posts/' + ref.name());
		});
		
	}*/
	$scope.deletePost = function(post){
		Post.delete(post);
	}
});