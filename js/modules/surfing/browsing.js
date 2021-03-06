console.log("modules/surfing/browsing.js");
import {surfing} from './manifest.js';
surfing.browsing_filter = {urls: ["<all_urls>"]};
surfing.browsing_extraInfoSpec= [];
surfing.browsing = [
    {
        name: "Page Visit",
        title: "Visited pages",
		description: "This item collects all pages that a user has visited",
		viewGroup: "UX",
        is_enabled: true,                
        target_listener: "inspectVisit"
    },
    {
        name: "Visiting Graph",
        title: "Visiting Graph",
		description: "This item collects all navigation that a user does in all web pages",
		viewGroup: "UX",
        is_enabled: true,       
        target_listener: "inspectReferrer"
    },
    {
        name: "New Bookmark",
        title: "Create Bookmark",
		description: "This item collects all bookmarks that created by a user",
		viewGroup: "UX",
        is_enabled: true,        
        hook: "bookmarks"
    }
]