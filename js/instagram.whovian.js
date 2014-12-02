// JavaScript Document


//Use this url below to get your access token
//https://instagram.com/oauth/authorize/?display=touch&client_id=7feb1d08dcd1447e9863e627c7987a0c&redirect_uri=http://averyethomas.com/j586/final&response_type=token 

//if you need a user id for yourself or someone else use:
//http://jelled.com/instagram/lookup-user-id
	
						
$(function() {
	
	var apiurl = "https://api.instagram.com/v1/tags/whovian/media/recent?access_token=42820715.7feb1d0.8a57e945bdb34e27bf32049af6346b33&callback=?"
	var access_token = location.hash.split('=')[1];
	var html = ""
	
		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});
				
		
		function parseData(json){
			console.log(json);
			
			$.each(json.data,function(i,data){
				html += '<a href="'+ data.link+'"><img class="instagram" src ="' + data.images.low_resolution.url + '"></a>'
			});
			
			console.log(html);
			$("#results-whovian").append(html);
			
		}
		
		
                
               
 });
		
		
		
		
	

		
