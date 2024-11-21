// const userActivities = [
//     { "userId": 1, "activity": "login", "timestamp": "2024-11-21T08:30:00Z" },
//     { "userId": 2, "activity": "purchase", "timestamp": "2024-11-21T09:45:00Z" },
//     { "userId": 1, "activity": "logout", "timestamp": "2024-11-21T10:00:00Z" }
//   ]

  const logData = [
      { "userId": 1, "activity": "login", "timestamp": "2024-11-21T08:30:00Z" },
      { "userId": 2, "activity": "purchase", "timestamp": "2024-12-21T09:45:00Z" },
      { "userId": 1, "activity": "logout", "timestamp": "2024-11-21T10:00:00Z" },
      { "userId": 2, "activity": "login", "timestamp": "2024-12-21T10:15:00Z" },
      { "userId": 2, "activity": "logout", "timestamp": "2024-12-21T11:00:00Z" },
      { "userId": 3, "activity": "login", "timestamp": "2024-03-21T11:30:00Z" },
      { "userId": 3, "activity": "logout", "timestamp": "2024-03-21T12:00:00Z" }
    ];

    // expected output
    // User Activities: {
    //     "1": [
    //       { "userId": 1, "activity": "login", "timestamp": "2024-11-21T08:30:00Z" },
    //       { "userId": 1, "activity": "logout", "timestamp": "2024-11-21T10:00:00Z" },
    //       { "userId": 1, "activity": "login", "timestamp": "2024-11-21T11:30:00Z" },
    //       { "userId": 1, "activity": "logout", "timestamp": "2024-11-21T12:00:00Z" }
    //     ],
    //     "2": [
    //       { "userId": 2, "activity": "purchase", "timestamp": "2024-11-21T09:45:00Z" },
    //       { "userId": 2, "activity": "login", "timestamp": "2024-11-21T10:15:00Z" },
    //       { "userId": 2, "activity": "logout", "timestamp": "2024-11-21T11:00:00Z" }
    //     ]
    //   }
    //   Session Durations (in seconds): {
    //     "1": 1800,  // User 1's total session time in seconds (30 minutes)
    //     "2": 2700   // User 2's total session time in seconds (45 minutes)
    //   }
    
type activityType = {
    userId: number,
    activity: string, 
    timestamp: string 
}
type userActivityType = {
    activity: string, 
    parsedTimeStamp: Date 
}

function activitiesByUser(userActivities : Array<activityType>) {

    let userActivitiesLog = {};
    let activityDuration = {};
    userActivities.map((activityLog)=>{
        const {userId, activity, timestamp} = activityLog;
        const parsedTimeStamp = new Date(timestamp)
        if(!userActivitiesLog[userId]){
            userActivitiesLog[userId]= [];
        }
        userActivitiesLog[userId].push({activity, parsedTimeStamp});
    })
    
    Object.keys(userActivitiesLog).forEach(element => {
        let duration : Array<Date> = [];
        userActivitiesLog[element].map((log : userActivityType)=>{
            const {activity, parsedTimeStamp} = log;
            if(activity==='login'){
                duration.push(parsedTimeStamp);
            } else if(activity==='logout') {
                duration.push(parsedTimeStamp);
                activityDuration[element]= (duration[1].getTime() - duration[0].getTime())/1000
            }
        })
    });

    return {userActivitiesLog, activityDuration};
}


//ANSWER
const {userActivitiesLog, activityDuration} = activitiesByUser(logData)
console.log('groupedUserActivities', userActivitiesLog, 'activitiesDuration', activityDuration)