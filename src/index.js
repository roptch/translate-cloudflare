export default {
	async fetch(request) {
	  if (request.headers.has("weglot-language")) {
			return fetch(request);
	  }
  
	  const renderRequest = new Request(`https://render.weglot.io/${request.url}`, request);
	  renderRequest.headers.append("weglot-render", "true");
	  return fetch(renderRequest);
	},
};
