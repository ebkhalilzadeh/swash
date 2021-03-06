console.log("modules/youtube/apis.js");
import {youtube} from './manifest.js';
youtube.apiCall = [
	{
		name: "recentActivities",
		description: "This item collect recent activities of a user in Youtube",
        title: "User recent activities",
		viewGroup: "API",
        is_enabled: false,
		method: "GET",
		URI: "/activities/",
        bearer: true,
		content_type: "application/x-www-form-urlencoded",
        permissions: [],
		params:{
			mine: true,
            maxResults: 50,
            part: "snippet,contentDetails"
		},
        schems: [
            {jpath:"$.items[*].kind",type:"text"},
            {jpath:"$.items[*].id",type:"id"},
            {jpath:"$.items[*].snippet.publishedAt",type:"timeString"},
            {jpath:"$.items[*].snippet.channelId",type:"id"},
            {jpath:"$.items[*].snippet.channelTitle",type:"text"},
            {jpath:"$.items[*].snippet.type",type:"text"},
            {jpath:"$.items[*].contentDetails.subscription.resourceId.kind",type:"text"},
            {jpath:"$.items[*].contentDetails.subscription.resourceId.channelId",type:"id"}
        ],
		response_type: "json"
	},
    {
		name: "myChannels",
		description: "This item collects list of a user's channels in Youtube",
        title: "User channels",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/channels/",
        bearer: true,
		content_type: "application/x-www-form-urlencoded",
        permissions: ["https://www.googleapis.com/auth/youtubepartner-channel-audit"],
		params:{
			mine: true,
            part: "snippet,contentDetails,statistics"
		},
        schems: [
            {jpath:"$.items[*].kind",type:"text"},
            {jpath:"$.items[*].id",type:"id"},
            {jpath:"$.items[*].snippet.title",type:"text"},
            {jpath:"$.items[*].snippet.description",type:"text"},
            {jpath:"$.items[*].snippet.publishedAt",type:"timeString"},
            {jpath:"$.items[*].snippet.localized.title",type:"text"},
            {jpath:"$.items[*].snippet.localized.description",type:"text"},            
            {jpath:"$.items[*].contentDetails.relatedPlaylists.likes",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.favorites",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.uploads",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.watchHistory",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.watchLater",type:"text"},
            {jpath:"$.items[*].statistics.viewCount",type:"text"},
            {jpath:"$.items[*].statistics.commentCount",type:"text"},
            {jpath:"$.items[*].statistics.subscriberCount",type:"text"},
            {jpath:"$.items[*].statistics.hiddenSubscriberCount",type:"text"},
            {jpath:"$.items[*].statistics.videoCount",type:"text"}
        ],        
		response_type: "json"
	},
    {
		name: "channelsManagedByMe",
		description: "This item collects list of channels that managed by a user in Youtube",
        title: "Managed Channels",
        viewGroup: "API",
		is_enabled: false,        
		method: "GET",
		URI: "/channels/",
        bearer: true,
		content_type: "application/x-www-form-urlencoded",
        permissions: ["https://www.googleapis.com/auth/youtubepartner-channel-audit"],
		params:{
			managedByMe: true,
            part: "snippet,contentDetails,statistics"
		},
        schems: [
            {jpath:"$.items[*].kind",type:"text"},
            {jpath:"$.items[*].id",type:"id"},
            {jpath:"$.items[*].snippet.title",type:"text"},
            {jpath:"$.items[*].snippet.description",type:"text"},
            {jpath:"$.items[*].snippet.publishedAt",type:"timeString"},
            {jpath:"$.items[*].snippet.localized.title",type:"text"},
            {jpath:"$.items[*].snippet.localized.description",type:"text"},            
            {jpath:"$.items[*].contentDetails.relatedPlaylists.likes",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.favorites",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.uploads",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.watchHistory",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.watchLater",type:"text"},
            {jpath:"$.items[*].statistics.viewCount",type:"text"},
            {jpath:"$.items[*].statistics.commentCount",type:"text"},
            {jpath:"$.items[*].statistics.subscriberCount",type:"text"},
            {jpath:"$.items[*].statistics.hiddenSubscriberCount",type:"text"},
            {jpath:"$.items[*].statistics.videoCount",type:"text"}
        ],                
		response_type: "json"
	},
    {
		name: "channelSections",
		description: "This item collects all sections of channels in Youtube",
		method: "GET",
        title: "Channel sections",
		viewGroup: "API",
        is_enabled: false,        
		URI: "/channelSections/",
        bearer: true,
		content_type: "application/x-www-form-urlencoded",
        permissions: [],
		params:{
			mine: true,
            part: "snippet,contentDetails"
		},
        schems: [
            {jpath:"$.items[*].kind",type:"text"},
            {jpath:"$.items[*].id",type:"id"},
            {jpath:"$.items[*].snippet.title",type:"text"},
            {jpath:"$.items[*].snippet.description",type:"text"},
            {jpath:"$.items[*].snippet.publishedAt",type:"timeString"},
            {jpath:"$.items[*].snippet.localized.title",type:"text"},
            {jpath:"$.items[*].snippet.localized.description",type:"text"},            
            {jpath:"$.items[*].contentDetails.relatedPlaylists.likes",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.favorites",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.uploads",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.watchHistory",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.watchLater",type:"text"},
            {jpath:"$.items[*].statistics.viewCount",type:"text"},
            {jpath:"$.items[*].statistics.commentCount",type:"text"},
            {jpath:"$.items[*].statistics.subscriberCount",type:"text"},
            {jpath:"$.items[*].statistics.hiddenSubscriberCount",type:"text"},
            {jpath:"$.items[*].statistics.videoCount",type:"text"}
        ],                
		response_type: "json",
	},
    {
		name: "myPlaylists",
		description: "This item collects playlist of a user in Youtube",
        title: "User playlist",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/playlists/",
        bearer: true,
		content_type: "application/x-www-form-urlencoded",
        permissions: [],
		params:{
			mine: true,
            part: "snippet,contentDetails"
		},
        schems: [
            {jpath:"$.items[*].kind",type:"text"},
            {jpath:"$.items[*].id",type:"id"},
            {jpath:"$.items[*].snippet.title",type:"text"},
            {jpath:"$.items[*].snippet.description",type:"text"},
            {jpath:"$.items[*].snippet.publishedAt",type:"timeString"},
            {jpath:"$.items[*].snippet.localized.title",type:"text"},
            {jpath:"$.items[*].snippet.localized.description",type:"text"},            
            {jpath:"$.items[*].contentDetails.relatedPlaylists.likes",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.favorites",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.uploads",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.watchHistory",type:"text"},
            {jpath:"$.items[*].contentDetails.relatedPlaylists.watchLater",type:"text"},
            {jpath:"$.items[*].statistics.viewCount",type:"text"},
            {jpath:"$.items[*].statistics.commentCount",type:"text"},
            {jpath:"$.items[*].statistics.subscriberCount",type:"text"},
            {jpath:"$.items[*].statistics.hiddenSubscriberCount",type:"text"},
            {jpath:"$.items[*].statistics.videoCount",type:"text"}
        ],                        
		response_type: "json",
	},
    {
		name: "mySubscriptions",
		description: "This item collects list of all subscriptions of a user",
        title: "User subscriptions",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/subscriptions/",
        bearer: true,
		content_type: "application/x-www-form-urlencoded",
        permissions: [],
		params:{
			mine: true,
            part: "snippet,contentDetails"
		},
        schems: [
            {jpath:"$.items[*].kind",type:"text"},
            {jpath:"$.items[*].id",type:"id"},
            {jpath:"$.items[*].snippet.title",type:"text"},
            {jpath:"$.items[*].snippet.description",type:"text"},
            {jpath:"$.items[*].snippet.publishedAt",type:"timeString"},
            {jpath:"$.items[*].snippet.resourceId.kind",type:"text"},
            {jpath:"$.items[*].snippet.resourceId.channelId",type:"id"},            
            {jpath:"$.items[*].snippet.channelId",type:"id"},            
            {jpath:"$.items[*].contentDetails.totalItemCount",type:"text"},
            {jpath:"$.items[*].contentDetails.newItemCount",type:"text"},
            {jpath:"$.items[*].contentDetails.activityType",type:"text"}
        ],                        
		response_type: "json",
	},
    {
		name: "myLikedVideos",
		description: "This item collects all videos liked by a user",
        title: "User linked videos",
		viewGroup: "API",
        is_enabled: false,        
		method: "GET",
		URI: "/videos/",
        bearer: true,
		content_type: "application/x-www-form-urlencoded",
        permissions: [],
		params:{
			myRating: "like",
            part: "snippet,contentDetails,statistics"
		},
        schems: [
            {jpath:"$.items[*].kind",type:"text"},
            {jpath:"$.items[*].id",type:"id"},
            {jpath:"$.items[*].snippet.title",type:"text"},
            {jpath:"$.items[*].snippet.description",type:"text"},
            {jpath:"$.items[*].snippet.publishedAt",type:"timeString"},
            {jpath:"$.items[*].snippet.channelId",type:"id"},
            
            {jpath:"$.items[*].snippet.channelTitle",type:"text"},
            
            {jpath:"$.items[*].snippet.tags",type:"text"},            
            
            {jpath:"$.items[*].snippet.categoryId",type:"id"},            
            {jpath:"$.items[*].snippet.liveBroadcastContent",type:"text"},
            {jpath:"$.items[*].snippet.localized.title",type:"text"},
            {jpath:"$.items[*].snippet.localized.description",type:"text"},           
            {jpath:"$.items[*].snippet.defaultAudioLanguage",type:"text"},
            
            
            
            {jpath:"$.items[*].contentDetails.duration",type:"text"},
            {jpath:"$.items[*].contentDetails.dimension",type:"text"},
            {jpath:"$.items[*].contentDetails.definition",type:"text"},
            {jpath:"$.items[*].contentDetails.caption",type:"text"},
            {jpath:"$.items[*].contentDetails.licensedContent",type:"text"},
            {jpath:"$.items[*].contentDetails.projection",type:"text"},
            
            {jpath:"$.items[*].statistics.viewCount",type:"text"},
            {jpath:"$.items[*].statistics.likeCount",type:"text"},
            {jpath:"$.items[*].statistics.dislikeCount",type:"text"},
            {jpath:"$.items[*].statistics.favoriteCount",type:"text"},
            {jpath:"$.items[*].statistics.commentCount",type:"text"}
        ],
		response_type: "json",
	}
];

/*

function gBatchCall(apiInfoList)
{
	let gettingItem = retrieveData(config.name);
	gettingItem.then(item => {
		access_token = item[config.name].tokenInfo.token;
		endpoint = config.apiConfig.api_endpoint;
		var batch = [];
		for(apiInfo of apiInfoList)
		{
			switch(apiInfo.method)
			{
				case "GET":
					item = {
						method: apiInfo.method,
						relative_url: apiInfo.URI.concat("?", serialize(apiInfo.params))			
					}	
					break;
				case "POST":    
					item = {
						method: apiInfo.method,
						relative_url: apiInfo.URI,
						body: serialize(apiInfo.params)
					}
					break;
				default:
			}
			batch.push(item);			
		}
		aInfo = {
			method: "POST",
			URI: "/",
			content_type: "application/x-www-form-urlencoded",
			params: {
				batch: JSON.stringify(batch)
			}
		}
		apiCall(endpoint, aInfo, access_token).then(verifyBatchResponse);
	})	
}

function verifyBatchResponse(response) {
	return new Promise((resolve, reject) => {
		if (response.status != 200) {
			reject("Token validation error");
		}
		response.json().then((json) => {				
			resolve(json);
		});
	});	
}
*/