'use strict'

const Mail = use('Mail')

class Notification {
    checkTruckTemp()
    {   
        const truckData = database.raw('SELECT truckspeed,truckid FROM truck ');
        const roadCondition = getHighWayCondition();
        
        try{
        if (truckData.truckSpeed > speedLimit)
        (
            sendNotification(truckSpeed,truckid);
        )
        }catch(error)
        {
            sendNotification(error)
        }

    }
    
    
    checkDriverSpeed()
    {
        
    }
      checkRoadConditions()
      {

        }
    }
}

module.exports = FakeDataGenerator
