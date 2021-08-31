var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': '6b84e14bdcmsh6643a65dd6140ddp1cb27cjsndbbc18dcf579'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});