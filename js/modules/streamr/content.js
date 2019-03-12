console.log("modules/Streamr/content.js");
import {Streamr} from './manifest.js';
Streamr.content_matches = ["*://*.streamr.com/*"];
Streamr.content = [
    {
        name: "Errors",
        description: "",
        title: "Errors",
        is_enabled: true,
        events: [
            {
                selector: "",   // window
                event_name: "error"
            }
        ],
        objects: [
            {
                selector:"", //Event.CurrentTarget
                property: "location",
                name: "url",
				type: "url"
            },
            {
                selector:".", //Event.CurrentTarget
                property: "colno",
                name: "columnNumber",
				type: "text"
            },
            {
                selector:".", //Event.CurrentTarget
                property: "filename",
                name: "filename",
				type: "url"
            },
            {
                selector:".", //Event.CurrentTarget
                property: "lineno",
                name: "lineNumber",
				type: "text"
            },
            {
                selector:".", //Event.CurrentTarget
                property: "message",
                name: "MessageError",
				type: "text"
            }			
        ]
    }
];