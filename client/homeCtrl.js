(function () {
	angular.module('rechouchios').controller('HomeCtrl', homeCtrl);

	function homeCtrl() {
		
        var vm = this;
        vm.authenticate = makeCorsRequest;
        
        // Create the XHR object.
        function createCORSRequest(method, url) {
          var xhr = new XMLHttpRequest();
          if ("withCredentials" in xhr) {
            // XHR for Chrome/Firefox/Opera/Safari.
            xhr.open(method, url, true);
          } else if (typeof XDomainRequest != "undefined") {
            // XDomainRequest for IE.
            xhr = new XDomainRequest();
            xhr.open(method, url);
          } else {
            // CORS not supported.
            xhr = null;
          }
          return xhr;
        }
        
        // Make the actual CORS request.
        function makeCorsRequest() {
            
          var url = 'https://api.twitter.com/oauth2/token';

          var xhr = createCORSRequest('POST', url);
          if (!xhr) {
            alert('CORS not supported');
            return;
          }
          xhr.setRequestHeader(
            'Authorization', 'Basic b0E4Q215REZZVzVueHUweHlKc25zbXRuajpneVlLZFZJTnBhTGRzTVljTFAybXFneG80UmxHMkhKcDd6YkVvT3BTdFVJRnhmYlFCTg==Content-Type: application/x-www-form-urlencoded;charset=UTF-8');
          xhr.setRequestHeader('Host', 'api.twitter.com');
          xhr.setRequestHeader('User-Agent', 'rechouchios v0.1');
          xhr.setRequestHeader('Accept-Encoding', 'gzip');
          xhr.setRequestHeader('Content-Length', '29');
            xhr.

          // Response handlers.
          xhr.onload = function() {
            var text = xhr.responseText;
            alert('Response from CORS request to ' + url + ': ' + text);
          };

          xhr.onerror = function() {
            alert('Woops, there was an error making the request.');
          };
            
          var requestBody = 'grant_type=client_credentials';

          xhr.send(requestBody);
        }
        
	};

}());