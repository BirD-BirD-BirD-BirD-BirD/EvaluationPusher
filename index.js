const { evaluationPusher } = require('./pusher');
require('dotenv').config();

async function completeTask(taskCode, taskLineID) {
    
    // Trigger the Pusher event for task evaluation
    await evaluationPusher.trigger('taskEvaluation', 'task-complete', {
        taskCode: taskCode,
        taskLineID: taskLineID
    });
    
    console.log(`Published task completion for evaluation: Task ${taskCode}, User ${taskLineID}`);
}

//updateShippingStatus("inv1","1","U6d93d2cdbdd8639c53e0d72d51207df3")
completeTask("XX2504002","U6d93d2cdbdd8639c53e0d72d51207df3")