Jcap.source.response("JcapWeb", function() {
	function stylesheet(name) {
		return "css/" + name +'/'+name + ".css";
	}

	function script(name) {
		return "js/" + name+'/'+name + ".js";
	}

	function mix(name) {
		return [stylesheet(name), script(name)];
	}

	return {
		"jctree": mix("jctree"),
		"jBox": {
			basics: "jctree",
			files: mix("jbox")
		},
		"datepicker": {
			files: ["css/datepicker/default.css", "css/datepicker/datepicker.css", "js/datepicker/datepicker.js"]
		},
		"plugin.upload": "plugin/upload.js",
		"plugin.smoothWheel": "plugin/smoothWheel.js",
		"io.websocket": "io/websocket.js",
		'jccss':stylesheet('app')
	};
});
