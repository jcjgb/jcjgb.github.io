Jcap.plugin.module("upload",{option:{action:"",width:null,height:null,callback:null},"protected":{resize:function(){var t=this,e=t.opts,i=t.D,o=Jcap.dom(t.owner),n=e.width||o.outerWidth(),a=e.height||o.outerHeight();return i.form.css({width:n,height:a,left:0,top:0}),i.file.css({width:n,height:a,left:0,top:0}),t},initElements:function(){var t=this,e=t.opts,i=t.D={},o=Jcap.dom(t.owner),n="uploadIframe"+Date.time();return i.form=newDom("form").attr({method:"post",enctype:"multipart/form-data",action:e.action,target:n}).css("position","absolute").append([i.iframe=newDom("iframe").attr({name:n,width:0,height:0,position:"absolute"}),i.file=new Jcap.dom("input[type='file'][name='file']").css({position:"absolute",opacity:0,zIndex:o.attr("zIndex")+1})]).appendTo(o),o.css("position","static","relative"),t},initEvents:function(){var t=this,e=t.opts,i=t.D,o=0;return i.file.on("change",function(){o=1,i.form.submit(),t.emit("change")}),i.iframe.on("load",function(){if(1==o){var n=Jcap.dom(i.iframe.dom.contentWindow.document.body).text();(n=n.toObject())&&isFunction(e.callback)&&e.callback.call(t,n),t.emit("load",n)}o=0}).hide(),t.owner.on("resize",t._resize=function(){t.resize()}),t}},"public":{remove:function(){this.owner.off("resize",this._resize)}},main:function(t){t.initElements(),t.initEvents(),t.resize()}});