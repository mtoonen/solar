#!/bin/bash

source ../config/system.conf
#echo $API_KEY

wget "https://api.enphaseenergy.com/api/v2/systems/$SYSTEM_ID/energy_lifetime?start_date=2021-10-10&key=$API_KEY&user_id=$USER_ID"