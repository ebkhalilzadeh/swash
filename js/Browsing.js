var Browsing = (function() {
    'use strict';
    
    var callbacks = {};
    
    function inspectReferrer(moduleName,requestDetails) {
        //console.log(`inspectRequest: ${config.name} `, requestDetails);
        if(requestDetails.type != "main_frame" || !requestDetails.originUrl)
            return;
        console.log(requestDetails.url, requestDetails.originUrl);

        return { 
            url: requestDetails.url,
            originUrl: requestDetails.originUrl		
        };
    }

    function inspectVisit(moduleName,requestDetails) {
        //console.log(`inspectRequest: ${config.name} `, requestDetails);
        console.log(requestDetails.url)
        if(requestDetails.type != "main_frame" || !requestDetails.originUrl)
            return;		
        return { 
            url: requestDetails.url
        };
    }
    
    function inspectRequest_Data(moduleName, data, requestDetails) {
        console.log("inspectRequest_Data", requestDetails.url, data.name);
        if(requestDetails.method != data.method){
            return;
        }
        if(data.pattern_type === "exact"){
            if(requestDetails.url == data.url_pattern){
                var retval = {};
                data.param.forEach(p => {
                    var val = null;
                    if(p.type === "form"){
                        val = requestDetails.requestBody.formData[data.key]
                    }
                    if(p.type === "query"){
                        val = (new URL(requestDetails.url)).searchParams.get(data.key)
                    }
                    retval[data.name] = val?val:data.default
                });
                return retval;
            }
        }
        if(data.pattern_type === "regex"){
            var res = requestDetails.url.match(data.url_pattern);
            if(res!= null) {
                var retval = {};
                data.param.forEach(p => {
                    var val = null;
                    if(p.type === "regex"){
                        val = res[data.group]
                    }
                    if(p.type === "form"){
                        val = requestDetails.requestBody.formData[data.key]
                    }
                    if(p.type === "query"){
                        val = (new URL(requestDetails.url)).searchParams.get(data.key)
                    }
                    if(val){
                        retval[data.name] = val
                    }else{
                        if(data.default){
                            retval[data.name] = data.default
                        }
                    }
                    
                });
                return retval;
            }
        }
        return;
    }
    
    function getModules(){
        // read storage
        return registered_modules;
    }
    
    function pushModule(module){
        // save in storage
    }
    
    function popModule(module){
        // remove in storage
    }
    
    
    function unload(){        
        getModules().forEach(row => {
            unload_module(row);
        });
    }

    function load(){
        getModules().forEach(row => {
            load_module(row);
        });
    }
    
    function unload_module(module){
        module.browsing.forEach(data=>{
            if(browser.webRequest.onBeforeRequest.hasListener(callbacks[module.name+ "_" + data.name])){
                browser.webRequest.onBeforeRequest.removeListener(callbacks[module.name+ "_" + data.name]);
            }
        }
    }

    function load_module(module){
        module.browsing.forEach(data=>{
            callbacks[module.name + "_" + data.name] = function(x){
                if(!module.target_listener || module.target_listener == "inspectRequest")
                    inspectRequest_data(module.name, data, x)
                if(module.target_listener == "inspectReferrer")
                    inspectReferrer(module.name,x)
                if(module.target_listener == "inspectVisit")
                    inspectVisit(module.name,x)
            };
            if(!browser.webRequest.onBeforeRequest.hasListener(callbacks[module.name+ "_" + data.name])){
                browser.webRequest.onBeforeRequest.addListener(callbacks[module.name+ "_" + data.name],module.filter, module.extraInfoSpec);
            }
        }
    }
        
    function unregister(module){
        popModule(module);
        unload_module(module);
    }

    function register(module){
        pushModule(module);
        load_module(module);
    }
    
    return {
        inspectRequest_Data: inspectRequest_Data,
        load: load,
        unload: unload,
        register: register,
        unregister: unregister,
        getModules: getModules
    };
}());