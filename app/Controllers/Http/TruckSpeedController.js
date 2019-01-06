'use strict'
const database = use('database');

class TruckSpeedController {

    async truckSpeedTest()
    {
    const truckData = database.raw('SELECT truckspeed,truckid FROM truck ');
    const roadCondition = getHighWayCondition();
    
    try{
    if (truckData.truckSpeed > speedLimit)
    (
        sendNotification(truckSpeed)
    )
    }catch(error)
    {
        sendNotification(error)
    }
}


}

module.exports = TruckSpeedController
