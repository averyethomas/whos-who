<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "257278598-Q1DStLrhMnMJUR9UP0ER6yAjoam07ZTjjSza9qMr",
    'oauth_access_token_secret' => "nPVBtdNbbeUTBM777wFW9MS1qTwbVElhBOqp9Tp1zuY2f",
    'consumer_key' => "CyUF381WtEoTqtyJ1AUm5Ji3F",
    'consumer_secret' => "UDUN77PKCUSMmTwd5o0Zhple2Hzl8cgut5ENQvvfXADcqCVc4r"
);

$url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
$requestMethod = "GET";
if (isset($_GET['user'])) {$user = $_GET['user'];} else {$user = "bbcdoctorwho";}
if (isset($_GET['count'])) {$user = $_GET['count'];} else {$count = 10;}
$getfield = "?screen_name=$user&count=$count";
$twitter = new TwitterAPIExchange($settings);
$string = json_decode($twitter->setGetfield($getfield)
->buildOauth($url, $requestMethod)
->performRequest(),$assoc = TRUE);


if($string["errors"][0]["message"] != "") {echo "<h3>Sorry, there was a problem.</h3><p>Twitter returned the following error message:</p><p><em>".$string[errors][0]["message"]."</em></p>";exit();}

foreach($string as $items)
    {
        echo "<p style='color:#ffffff;'>" .$items['text']."</p><hr />";
    }
?>
