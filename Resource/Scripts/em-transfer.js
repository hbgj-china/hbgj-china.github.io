!function(e){function t(s){if(a[s])return a[s].exports;var n=a[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){a(1),e.exports=a(4)},function(e,t,a){function s(e){var t=null,a=e.msg,s=a.data,r=a.useObject,o=a.api,u=a.timespan;s&&s.headers&&(t=s.headers,delete s.headers),n({url:e.url,headers:t,data:e.excludeData?null:s,type:e.type,isFileUpload:e.isFileUpload,success:function(e,t){try{e=JSON.parse(e)}catch(a){}i.send({call:o,timespan:u,status:0,data:e,statusCode:t.status,useObject:r})},error:function(e,t){try{e=JSON.parse(e)}catch(a){}i.send({call:o,timespan:u,status:1,data:e,statusCode:t.status,useObject:r})}})}var n=a(2),r=a(3),i=new r(null,"api");i.listen(function(e){var t,a=e.api,n=e.data||{},r=n.tenantId,o=n.orgName+"%23"+n.appName+"%23"+n.imServiceNumber;switch(i.targetOrigin=e.origin,a){case"getRelevanceList":s({url:"/v1/webimplugin/targetChannels",type:"GET",msg:e});break;case"getDutyStatus":s({url:"/v1/webimplugin/showMessage",type:"GET",msg:e});break;case"getWechatVisitor":s({url:"/v1/webimplugin/visitors/wechat/"+n.openid+"?tenantId="+r,msg:e,type:"POST"});break;case"createVisitor":s({url:"/v1/webimplugin/visitors?tenantId="+r,msg:e,type:"POST"});break;case"getSession":s({url:"/v1/webimplugin/visitors/"+n.id+"/schedule-data?techChannelInfo="+o+"&tenantId="+r,msg:e,type:"GET",excludeData:!0});break;case"getExSession":s({url:"/v1/webimplugin/visitors/"+n.id+"/schedule-data-ex?techChannelInfo="+o+"&tenantId="+r,msg:e,type:"GET",excludeData:!0});break;case"getPassword":s({url:"/v1/webimplugin/visitors/password",type:"GET",msg:e});break;case"getGroup":s({url:"/v1/webimplugin/visitors/"+n.id+"/ChatGroupId?techChannelInfo="+o+"&tenantId="+r,msg:e,type:"GET",excludeData:!0});break;case"getGroupNew":s({url:"/v1/webimplugin/tenant/"+r+"/visitors/"+n.id+"/ChatGroupId?techChannelInfo="+o+"&tenantId="+r,msg:e,type:"GET",excludeData:!0});break;case"getHistory":s({url:"/v1/webimplugin/visitors/msgHistory",type:"GET",msg:e});break;case"getSlogan":s({url:"/v1/webimplugin/notice/options",type:"GET",msg:e});break;case"getTheme":s({url:"/v1/webimplugin/theme/options",type:"GET",msg:e});break;case"getSystemGreeting":s({url:"/v1/webimplugin/welcome",type:"GET",msg:e});break;case"getRobertGreeting":s({url:"/v1/Tenants/"+r+"/robots/visitor/greetings/"+n.originType+"?tenantId="+r,msg:e,type:"GET",excludeData:!0});break;case"sendVisitorInfo":s({url:"/v1/webimplugin/tenants/"+r+"/visitors/"+n.visitorId+"/attributes?tenantId="+r,msg:e,type:"POST"});break;case"getProject":s({url:"/tenants/"+r+"/projects",type:"GET",msg:e});break;case"createTicket":s({url:"/tenants/"+r+"/projects/"+n.projectId+"/tickets?tenantId="+r+"&easemob-target-username="+n["easemob-target-username"]+"&easemob-appkey="+n["easemob-appkey"]+"&easemob-username="+n["easemob-username"],msg:e,type:"POST"});break;case"getNoteCategories":s({url:"/tenants/"+r+"/projects/"+n.projectId+"/categories?tenantId="+r+"&easemob-target-username="+n["easemob-target-username"]+"&easemob-appkey="+n["easemob-appkey"]+"&easemob-username="+n["easemob-username"],msg:e,type:"GET",excludeData:!0});break;case"receiveMsgChannel":s({url:"/v1/imgateway/messages",type:"GET",msg:e});break;case"sendMsgChannel":s({url:"/v1/imgateway/messages?tenantId="+r,msg:e,type:"POST"});break;case"getAgentStatus":if(!n.token)return void console.error("token does not exist.");s({url:"/v1/tenants/"+r+"/agents/"+n.agentUserId+"/agentstate",type:"GET",msg:e});break;case"getNickNameOption":s({url:"/v1/webimplugin/agentnicename/options?tenantId="+r,msg:e,type:"GET",excludeData:!0});break;case"reportEvent":s({url:"/v1/event_collector/events",msg:e,type:"POST"});break;case"deleteEvent":s({url:"/v1/event_collector/event/"+encodeURIComponent(n.userId),msg:e,type:"DELETE",excludeData:!0});break;case"mediaStreamUpdateStatus":t="/v1/rtcmedia/media_streams/"+n.streamId,delete n.streamId,s({url:t,msg:e,type:"PUT"});break;case"graylist":s({url:"/management/graylist",msg:e,type:"GET",excludeData:!0});break;case"getCurrentServiceSession":s({url:"/v1/webimplugin/tenant/"+r+"/visitors/"+n.id+"/CurrentServiceSession?techChannelInfo="+o+"&tenantId="+r,msg:e,type:"GET",excludeData:!0});break;case"messagePredict":t="/v1/webimplugin/agents/"+n.agentId+"/messagePredict?tenantId="+n.tenantId,delete n.tenantId,delete n.agentId,s({url:t,msg:e,type:"POST"});break;case"getSessionQueueId":t="/v1/visitors/"+n.visitorUsername+"/waitings/sessions",delete n.visitorUsername,s({url:t,msg:e,type:"GET"});break;case"getWaitListNumber":s({url:"/v1/visitors/waitings/data",msg:e,type:"GET"});break;case"getDutyStatus_2":s({url:"/v1/webimplugin/tenants/show-message",type:"GET",msg:e});break;case"getRobertGreeting_2":s({url:"/v1/webimplugin/tenants/robots/welcome",type:"GET",msg:e});break;case"getSkillgroupMenu":s({url:"/v1/webimplugin/tenants/"+r+"/skillgroup-menu",type:"GET",msg:e,excludeData:!0});break;case"getAgentInputState":s({url:"/v1/webimplugin/sessions/"+n.serviceSessionId+"/agent-input-state?tenantId="+r+"&orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.username+"&token="+n.token,msg:e,type:"GET",excludeData:!0});break;case"closeServiceSession":t="/webimplugin/tenants/"+r+"/visitors/"+n.userName+"/servicesessions/"+n.serviceSessionId+"/stop-wait-session?tenantId="+r,delete n.serviceSessionId,s({url:t,msg:e,type:"POST"});break;case"uploadImgMsgChannel":s({url:"/v1/Tenant/"+r+"/"+n.orgName+"/"+n.appName+"/"+n.userName+"/MediaFiles",msg:e,isFileUpload:!0,type:"POST"});break;case"getVisitorInfo":s({url:"/v1/webimplugin/tenants/"+r+"/visitors?orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token+"&techChannelInfo="+o,msg:e,type:"GET",excludeData:!0});break;case"getOfficalAccounts":s({url:"/v1/webimplugin/tenants/"+r+"/visitors/"+n.visitorId+"/official-accounts?page=0&size=100&orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token,msg:e,type:"GET",excludeData:!0});break;case"getOfficalAccountMessage":s({url:"/v1/webimplugin/tenants/"+r+"/visitors/"+n.visitorId+"/official-accounts/"+n.officialAccountId+"/messages?size="+n.size+(n.startId?"&startId="+n.startId:"")+"&direction="+n.direction+"&orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token,msg:e,type:"GET",excludeData:!0});break;case"getConfig":s({url:"/v1/webimplugin/settings/visitors/configs/"+n.configId,msg:e,type:"GET",excludeData:!0});break;case"getRobertIsOpen":s({url:"/v1/webimplugin/tenants/robot-ready",type:"GET",msg:e});break;case"getExSession_2":s({url:"/v1/webimplugin/visitors/"+n.username+"/schedule-data-ex2?techChannelInfo="+o+"&channelType="+n.channelType+"&originType="+n.originType+"&channelId="+n.channelId+"&queueName="+n.queueName+"&agentUsername="+n.agentUsername+"&tenantId="+r,msg:e,type:"GET",excludeData:!0});break;case"getLastSession":s({url:"/v1/webimplugin/tenants/"+r+"/visitors/"+n.visitorId+"/official-accounts/"+n.officialAccountId+"/latest-session?orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token+"&techChannelInfo="+o,msg:e,type:"GET",excludeData:!0});break;case"reportVisitorAttributes":t="/v1/webimplugin/tenants/"+r+"/sessions/"+n.sessionId+"/attributes?orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token+"&techChannelInfo="+o,delete n.tenantId,delete n.sessionId,delete n.orgName,delete n.appName,delete n.userName,delete n.token,delete n.imServiceNumber,s({url:t,msg:e,type:"POST"});break;case"messagePredict_2":t="/v1/webimplugin/servicesessions/"+n.sessionId+"/messagePredict?orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token+"&techChannelInfo="+o,delete n.sessionId,delete n.orgName,delete n.appName,delete n.userName,delete n.token,delete n.imServiceNumber,s({url:t,msg:e,type:"POST"});break;case"reportMarketingTaskDelivered":t="/v1/webimplugin/tenants/"+r+"/marketing-tasks/"+n.marketingTaskId+"/delivered?orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token,delete n.tenantId,delete n.marketingTaskId,delete n.orgName,delete n.appName,delete n.userName,delete n.token,s({url:t,msg:e,type:"PUT"});break;case"reportMarketingTaskOpened":t="/v1/webimplugin/tenants/"+r+"/marketing-tasks/"+n.marketingTaskId+"/opened?orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token,delete n.tenantId,delete n.marketingTaskId,delete n.orgName,delete n.appName,delete n.userName,delete n.token,s({url:t,msg:e,type:"PUT"});break;case"reportMarketingTaskReplied":t="/v1/webimplugin/tenants/"+r+"/marketing-tasks/"+n.marketingTaskId+"/replied?orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token,delete n.tenantId,delete n.marketingTaskId,delete n.orgName,delete n.appName,delete n.userName,delete n.token,s({url:t,msg:e,type:"PUT"});break;case"getLatestMarketingTask":s({url:"/v1/webimplugin/tenants/"+r+"/official-accounts/"+n.officialAccountId+"/marketing-tasks?orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token,msg:e,type:"GET",excludeData:!0});break;case"getEvaluationDegrees":s({url:"/v1/webimplugin/tenants/"+r+"/evaluationdegrees?orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token,msg:e,type:"GET",excludeData:!0});break;case"getAppraiseTags":s({url:"/v1/webimplugin/tenants/"+r+"/evaluationdegrees/"+n.evaluateId+"/appraisetags?orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token,msg:e,type:"GET",excludeData:!0});break;case"grayScale":s({url:"/v1/grayscale/tenants/"+r,msg:e,type:"GET",excludeData:!0});break;case"getCustomEmojiPackages":s({url:"/v1/webimplugin/emoj/tenants/"+r+"/packages",msg:e,type:"GET",excludeData:!0});break;case"getCustomEmojiFiles":s({url:"/v1/webimplugin/emoj/tenants/"+r+"/files",msg:e,type:"GET",excludeData:!0});break;case"getSatisfactionTipWord":s({url:"/v1/webimplugin/tenants/"+r+"/options/GreetingMsgEnquiryInvite",type:"GET",msg:e,excludeData:!0});break;case"getPassword2":s({url:"/v1/webimplugin/visitors/password2?userId="+n.userId+"&orgName="+n.orgName+"&appName="+n.appName+"&imServiceNumber="+n.imServiceNumber,type:"GET",msg:e,excludeData:!0});break;case"updateCustomerInfo":t="/v1/tenants/"+r+"/visitors/"+n.visitorId+"/customer-info?orgName="+n.orgName+"&appName="+n.appName+"&userName="+n.userName+"&token="+n.token,delete n.tenantId,delete n.visitorId,delete n.orgName,delete n.appName,delete n.userName,delete n.token,s({url:t,msg:e,type:"put"});break;case"getArticleJson":s({url:"/v1/webimplugin/tenants/"+r+"/robot/news/"+n.media_id,type:"GET",msg:e});break;case"getGuessList":t="/v1/webimplugin/tenants/"+n.tenantId+"/servicesessions/"+n.sessionId+"/standard_suggestion/questions?input="+n.inputValue+"&robotId="+n.robotId,delete n.tenantId,delete n.sessionId,delete n.inputValue,delete n.robotId,s({url:t,type:"GET",msg:e});break;case"getSatisfactionCommentTags":s({url:"/v1/webimplugin/tenants/"+r+"/robot-agents/"+n.robotAgentId+"/satisfaction-comment/tags",msg:e,type:"GET",excludeData:!0});break;case"getFaqList":s({url:"/v1/webimplugin/settings/tenants/"+r+"/configs/"+n.configId+"/information/issues?page=0&size=1000",msg:e,type:"GET"});break;case"getSelfServiceList":s({url:"/v1/webimplugin/settings/tenants/"+r+"/configs/"+n.configId+"/information/self-service?page=0&size=8",msg:e,type:"GET"});break;case"getFaqOrSelfServiceStatus":s({url:"/v1/webimplugin/settings/tenants/"+r+"/configs/"+n.configId+"/visitors/options/"+n.type+"/status",msg:e,type:"GET"});break;default:console.error("unexpect api name: "+a)}},["data"])},function(e,t){var a=function(){},s=function(){try{return new window.XMLHttpRequest}catch(e){return!1}},n=function(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){return!1}};e.exports=function(e){function t(){var e;if(4===l.readyState){if(200===l.status){if("text"===u)return void m(l.responseText,l);if("json"===u){try{e=JSON.parse(l.responseText),m(e,l)}catch(t){}return}return void m(l.response||l.responseText,l)}if("json"==u){try{e=JSON.parse(l.responseText),p(e,l,"error response.")}catch(t){p(l.responseText,l,"JSON parse error.")}return}p(l.responseText,l,"error response.")}else 0===l.readyState&&p(l.responseText,l,"unexpected server error.")}var r,i,o,u=e.dataType||"text",m=e.success||a,p=e.error||a,g=e.useXDomainRequestInIE,l=s()||n(),c=e.type||"GET",d=e.data||{},b="",v=e.headers||{},k=e.isFileUpload,N=e.disableTimeStampInGet;if(g&&window.XDomainRequest)return l=new XDomainRequest,l.onload=function(){var e={};try{e=JSON.parse(l.responseText)}catch(t){}m(e,l)},l.ontimeout=function(){p(l.responseText,l,"XDomainRequest timeout.")},l.onerror=function(){p(l.responseText,l,"XDomainRequest error.")},l.open("POST",e.url),l.send(JSON.stringify(d)),l;if(l.onreadystatechange=t,"get"===c.toLowerCase()){for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(b+=o+"="+d[o]+"&");b=b?b.slice(0,-1):b,e.url+=(e.url.indexOf("?")>0?"&":"?")+(b?b+"&":b)+(N?"":"_v="+(new Date).getTime())}else{if(k)return i=new FormData,i.append("file",d.file),l.open("POST",e.url),l.setRequestHeader("Authorization",d.auth),l.send(i),l;d=JSON.stringify(d)}if(l.open(c,e.url),l.setRequestHeader){v["Content-Type"]=v["Content-Type"]||"application/json";for(r in v)Object.prototype.hasOwnProperty.call(v,r)&&l.setRequestHeader(r,v[r])}return l.send(d),l}},function(e,t){function a(e,t,a){var s,n,r,i=!1,o=e.data;if("object"==typeof o)s=o;else if("string"==typeof o){try{s=JSON.parse(o)}catch(u){}if("object"!=typeof s)return}if(a&&a.length)for(n=0,r=a.length;n<r;n++)s.key===a[n]&&(i=!0,"function"==typeof t&&t(s));else"function"==typeof t&&t(s);if(!i&&a)for(n=0,r=a.length;n<r;n++)if("data"===a[n]){"function"==typeof t&&t(s);break}}var s=function(){var e=!0;try{window.postMessage({toString:function(){e=!1}},"*")}catch(t){}return e}(),n=function(e,t,a){return this instanceof n?(this.key=t,this.iframe=document.getElementById(e),this.origin=location.protocol+"//"+location.host,void(this.useObject=a)):new n(e)};n.prototype.send=function(e,t){return e.origin=this.origin,e.key=this.key,this.to?e.to=this.to:t&&(e.to=t),s&&(this.useObject||e.useObject)||(e=JSON.stringify(e)),this.iframe?this.iframe.contentWindow.postMessage(e,"*"):window.parent.postMessage(e,"*"),this},n.prototype.listen=function(e,t){var s=this;return window.addEventListener?window.addEventListener("message",function(n){a.call(s,n,e,t)},!1):window.attachEvent&&window.attachEvent("onmessage",function(n){a.call(s,n,e,t)}),this},e.exports=n},function(e,t){e.exports='module.exports = __webpack_public_path__ + "../../transfer.html";'}]);