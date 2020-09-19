<?php
/**
 * Created by PhpStorm.
 * User: khan
 * Date: 9/4/2017
 * Time: 7:17 PM
 */

namespace app\Utils;


class Constants
{
    public static $FCM_API_KEY = 'key=AIzaSyDY_xxGbnTB4sVh3zLOe57WaNCPp6ZtJng';
    public static $FCM_API_URL = 'https://fcm.googleapis.com/fcm/send';


    public static $BINARY_STATUS = [1 => "Yes", 2 => "No"];
    public static $STATUS_LIST = [1 => "Active", 2 => "Inactive"];
    public static $SCORE_CARD_STATUS = [0 => "Inactive" ,1 => "Start", 2 => "End"];

    public static $TOURNAMENT_STATUS = [1 => 'Start Game', 2 => 'Pause Game', 3 => 'Inactive Game'];

    public static $TYPES = [1 => 'All', 2 => 'Country'];

    public static $USER_TYPES = [1 => 'Admin', 2 => 'User'];

    public static $PACKAGE_TYPES = [1 => 'Player', 2 => 'Country'];

    public static $REFERRELCOIN = 10;

    //Status
    public static $OK = 1;
    public static $INACTIVE = 2;
    public static $DELETE = 10;
}
