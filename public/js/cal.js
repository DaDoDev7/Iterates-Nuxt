

function loadCalendarScript() {
	(function (C, A, L) {
		let p = function (a, ar) {
			a.q.push(ar);
		};
		let d = C.document;
		C.Cal =
			C.Cal ||
			function () {
				let cal = C.Cal;
				let ar = arguments;
				if (!cal.loaded) {
					cal.ns = {};
					cal.q = cal.q || [];
					d.head.appendChild(d.createElement("script")).src = A;
					cal.loaded = true;
				}
				if (ar[0] === L) {
					const api = function () {
						p(api, arguments);
					};
					const namespace = ar[1];
					api.q = api.q || [];
					typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
					return;
				}
				p(cal, ar);
			};
	});

	var calendarId = "rodolphebalay/it-project-meeting-iterates";

	// Set up the calendar embed URL
	var embedUrl = "https://cal.com/" + calendarId + "/meetings";

	// Create an iframe element
	var iframe = document.createElement("iframe");
	iframe.src = embedUrl;
	iframe.width = "100%";
	iframe.height = "600vh";
	if (window.matchMedia("(max-width: 415px)").matches) {
		iframe.height = "1100vh";
	} else {
		if (window.matchMedia("(max-width: 991px)").matches) {
			iframe.height = "800vh";
		}
	}
	iframe.frameborder = "0";
	iframe.scrolling = "no";

	// Add the iframe to the div
	var calendarDiv = document.getElementById("calendar");
	calendarDiv.appendChild(iframe);
}
