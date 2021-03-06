console.log("modules/facebook/apis.js");
import {facebook} from './manifest.js';


facebook.apiCall = [
	{
		name: "userInfo",
        title: "User Info",
		viewGroup: "API",
        is_enabled: false,
		description: "User Information",
		method: "GET",
		URI: "/me",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["email"],
		params:{
			fields: "id,name,email,about,address,age_range,birthday,education,favorite_athletes,favorite_teams,first_name,gender,hometown,interested_in,languages,last_name,location,meeting_for,middle_name,quotes,relationship_status,religion,sports"
		},
		response_type: "json",
		schems: [
			{jpath:"$.id",type:"userInfo"},
			{jpath:"$.name",type:"userInfo"},
			{jpath:"$.email",type:"userInfo"},
			{jpath:"$.about",type:"text"},
			{jpath:"$.address",type:"userInfo"},
			{jpath:"$.age_range",type:"userAttr"},
			{jpath:"$.birthday",type:"userInfo"},
			{jpath:"$.education",type:"userAttr"},
			{jpath:"$.favorite_athletes",type:"text"},
			{jpath:"$.favorite_teams",type:"text"},
			{jpath:"$.first_name",type:"userInfo"},
			{jpath:"$.gender",type:"userAttr"},
			{jpath:"$.hometown",type:"userInfo"},
			{jpath:"$.interested_in",type:"text"},
			{jpath:"$.languages",type:"text"},
			{jpath:"$.last_name",type:"userInfo"},
			{jpath:"$.location",type:"userInfo"},
			{jpath:"$.meeting_for",type:"text"},
			{jpath:"$.middle_name",type:"userInfo"},
			{jpath:"$.quotes",type:"text"},
			{jpath:"$.relationship_status",type:"userAttr"},
			{jpath:"$.religion",type:"userAttr"},
			{jpath:"$.sports",type:"text"}
		]
	},
	{
		name: "userLikes",
        title: "Likes",
		viewGroup: "API",
        is_enabled: false,        
		description: "All the Pages this person has liked",
		method: "GET",
		URI: "/me/likes",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["user_likes"],
		params:{			
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].id",type:"id"},
			{jpath:"$.data[*].name",type:"text"},
			{jpath:"$.data[*].created_time",type:"timeString"}
		]
	},
	{
		name: "UserAccounts",
        title: "Accounts",
		viewGroup: "API",
        is_enabled: false,        
		description: "Pages the User has a role on",
		method: "GET",
		URI: "/me/accounts",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["pages_show_list"],
		params:{
		},
		schems: [
			{jpath:"$.data[*].category",type:"text"},
			{jpath:"$.data[*].category_list[*].id",type:"id"},
			{jpath:"$.data[*].category_list[*].name",type:"text"},
			{jpath:"$.data[*].name",type:"userInfo"}
		]
		
	},
	{
		name: "UserAdStudies",
		description: "Ad studies that this User's can view.",
        title: "AD studies",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/ad_studies",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["ads_read"],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].category",type:"text"},
			{jpath:"$.data[*].category_list[*].id",type:"id"},
			{jpath:"$.data[*].category_list[*].name",type:"text"},
			{jpath:"$.data[*].name",type:"userInfo"}
		]

	},
	{
		name: "UserAdaccounts",
		description: "The advertising accounts to which this person has access",
        title: "AD accounts",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/adaccounts",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["ads_management"],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].account_id",type:"userInfo"},
			{jpath:"$.data[*].id",type:"id"}
		]
	},
	{
		name: "UserAdcontracts",
		description: "The User's ad contracts.",
        title: "AD contracts",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/adcontracts",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["ads_read"],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].account_id",type:"userifo"},
			{jpath:"$.data[*].id",type:"id"}
		]
	},
	{
		name: "UserBooks",
		description: "Books listed in someone's Facebook profile.",
        title: "Books",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/books",
		content_type: "application/x-www-form-urlencoded",
		permissions: [],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].account_id",type:"userInfo"},
			{jpath:"$.data[*].id",type:"id"}
		]
	},
	{
		name: "business_management",
		description: "GET business activities related to the user.",
        title: "Business activities",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/business_activities",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["business_management"],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].account_id",type:"userInfo"},
			{jpath:"$.data[*].id",type:"id"}
		]
	},
	{
		name: "UserBusinessUsers",
		description: "Get business users that a personal user has.",
        title: "Business users",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/business_users",
		content_type: "application/x-www-form-urlencoded",
		permissions: [],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].account_id",type:"userInfo"},
			{jpath:"$.data[*].id",type:"id"}
		]
	},
	{
		name: "UserBusinesses",
		description: "Businesses associated with the user",
        title: "Businesses",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/businesses",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["business_management"],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].account_id",type:"userInfo"},
			{jpath:"$.data[*].id",type:"id"}
		]
	},
	{
		name: "UserCustomLabels",
		description: "",
        title: "Custom labels",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/custom_labels",
		content_type: "application/x-www-form-urlencoded",
		permissions: [],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].account_id",type:"userInfo"},
			{jpath:"$.data[*].id",type:"id"}
		]
	},
	{
		name: "UserDomains",
		description: "The domains the user admins",
        title: "Domains",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/domains",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["email"],
		params:{			
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].account_id",type:"userInfo"},
			{jpath:"$.data[*].id",type:"id"}
		]
	},
	{
		name: "UserFamily",
		description: "A person's family relationships.",
        title: "Family",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/family",
		content_type: "application/x-www-form-urlencoded",
		permissions: [],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].account_id",type:"userInfo"},
			{jpath:"$.data[*].id",type:"id"}
		]
	},
	{
		name: "UserFavoriteRequests",
		description: "Developers' favorite requests to the Graph API.",
        title: "Favorite requests",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/favorite_requests",
		content_type: "application/x-www-form-urlencoded",
		permissions: [],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].account_id",type:"userInfo"},
			{jpath:"$.data[*].id",type:"id"}
		]
	},
	{
		name: "UserPublishedPosts",
		description: "Shows only the posts that were published by this person.",
        title: "Published posts",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/posts",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["user_posts"],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data.created_time",type:"timeString"},
			{jpath:"$.data.id",type:"id"}
		]
	},
	{
		name: "UserTaggedPosts",
		description: "Shows only the posts that this person was tagged in.",
        title: "Tagged posts",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/tagged",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["user_posts"],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data.created_time",type:"timeString"},
			{jpath:"$.data.id",type:"id"}
		]
	},
	{
		name: "UserFriends",
		description: "Get the User's friends who have installed the app making the query",
        title: "Friends",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/friends",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["friends"],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].created_time",type:"timeString"},
			{jpath:"$.data[*].id",type:"id"},
			{jpath:"$.data[*].name",type:"text"}
		]
	},
	{
		name: "UserGames",
		description: "Games a person likes.",
        title: "Games",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/games",
		content_type: "application/x-www-form-urlencoded",
		permissions: [],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].created_time",type:"timeString"},
			{jpath:"$.data[*].id",type:"id"},
			{jpath:"$.data[*].name",type:"text"}
		]
	},
	{
		name: "UserMovies",
		description: "Movies this person likes",
        title: "Movies",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/movies",
		content_type: "application/x-www-form-urlencoded",
		permissions: [],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].created_time",type:"timeString"},
			{jpath:"$.data[*].id",type:"id"},
			{jpath:"$.data[*].name",type:"text"}
		]
	},
	{
		name: "UserMusics",
		description: "Music this person likes.",
        title: "Music",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/music",
		content_type: "application/x-www-form-urlencoded",
		permissions: [],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].created_time",type:"timeString"},
			{jpath:"$.data[*].id",type:"id"},
			{jpath:"$.data[*].name",type:"text"}
		]
	},
	{
		name: "UserPhotos",
		description: "Photos the person is tagged in or has uploaded",
        title: "Photos",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/photos/uploaded",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["user_photos"],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].created_time",type:"timeString"},
			{jpath:"$.data[*].id",type:"id"},
			{jpath:"$.data[*].name",type:"text"}
		]
	},
	{
		name: "UserTaggedPlaces",
		description: "Tagged Places for a Facebook User.",
        title: "Tagged places",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/tagged_places",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["tagged_places"],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].created_time",type:"timeString"},
			{jpath:"$.data[*].id",type:"id"},
			{jpath:"$.data[*].name",type:"text"}
		]
	},
	{
		name: "UserTelevision",
		description: "TV shows this person likes",
        title: "Television",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/television",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["email"],
		params:{
			fields: "id,name,email,about,address,age_range,birthday,education,favorite_athletes,favorite_teams,first_name,gender,hometown,interested_in,languages,last_name,location,meeting_for,middle_name,quotes,relationship_status,religion,sports"
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].created_time",type:"timeString"},
			{jpath:"$.data[*].id",type:"id"},
			{jpath:"$.data[*].name",type:"text"}
		]
	},
	{
		name: "UserVideos",
		description: "Videos the person is tagged in or uploaded",
        title: "Videos",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/me/videos",
		content_type: "application/x-www-form-urlencoded",
		permissions: ["user_videos"],
		params:{
		},
		response_type: "json",
		schems: [
			{jpath:"$.data[*].updated_time",type:"timeString"},
			{jpath:"$.data[*].id",type:"id"},
			{jpath:"$.data[*].description",type:"text"}
		]
	}
]
