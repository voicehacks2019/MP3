// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
var animalCurr = '';
//0
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        
        const speechText = 'Welcome to KidsGame. You will guess the sound I play. What makes this sound?'; //sound 
        const attributes = handlerInput.attributesManager.getSessionAttributes();
        attributes.state = 'Cat';
        animalCurr = 'cat';
        handlerInput.attributesManager.setSessionAttributes(attributes);
        return handlerInput.responseBuilder
            .speak('<audio src="soundbank://soundlibrary/animals/amzn_sfx_cat_meow_1x_01"/> What is it?')
            .reprompt(speechText)
            .withShouldEndSession(false)
            .getResponse();
    }
};

// const HelloWorldIntentHandler = {
//     canHandle(handlerInput) {
//         return handlerInput.requestEnvelope.request.type === 'IntentRequest'
//             && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
//     },
//     handle(handlerInput) {
//         const speechText = 'Yes!';
//         return handlerInput.responseBuilder
//             .speak('<speak>Identify this animal <break time="3s"> <audio src="http://foo.com/elephant.mp3"></speak>')
//             //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
//             .getResponse();
//     }
// };

// const startQuizMessage = `Let's begin the sound game.`;

// const YesLaunchIntentHandler = {
//     canHandle(handlerInput) {
//         return handlerInput.requestEnvelope.request.type === 'IntentRequest'
//             && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent'
//             && handlerInput.attributesManager.getSessionAttributes().state = 'Launch';
//     }, 
//     handle(handlerInput) {
//         const speechText = 'Welcome to KidsGame, you will guess the sound I play. Are you ready?'; //add more breaths
//         const attributes = handlerInput.attributesManager.getSessionAttributes();
//         attributes.State = 'TestNoun';
//         handlerInput.attributesManager.setAttributes(attributes);
//         return handlerInput.responseBuilder.speak(speechText).reprompt(speechText).getResponse();
//     }
// };


//
const NounLaunchIntentHandler0 = {
    canHandle(handlerInput){
       return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AnimalIntent' //change this later if need be
            && handlerInput.attributesManager.getSessionAttributes().state === 'Cat';
    },
    handle(handlerInput){
        const attributes = handlerInput.attributesManager.getSessionAttributes();
        const response = handlerInput.responseBuilder;
        attributes.state = 'Dog';
        askQuestion(handlerInput);
        handlerInput.attributesManager.setSessionAttributes(attributes);
        const item = attributes.quizItem;
        const property = attributes.quizProperty;

        const resAnswer = checkIt(handlerInput.requestEnvelope.request.intent.slots.Animal.value,'cat' );
        console.log(resAnswer);
        console.log(resAnswer + '<audio src="soundbank://soundlibrary/animals/amzn_sfx_dog_med_bark_2x_01"/> What is it?');
        return response.speak(resAnswer + '<audio src="soundbank://soundlibrary/animals/amzn_sfx_dog_med_bark_2x_01"/> What is it?').withShouldEndSession(false).getResponse();
    }
};

const NounLaunchIntentHandler1 = {
    canHandle(handlerInput){
       return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AnimalIntent' //change this later if need be 
            && handlerInput.attributesManager.getSessionAttributes().state === 'Dog';
    }, 
    handle(handlerInput){
        const attributes = handlerInput.attributesManager.getSessionAttributes();
        const response = handlerInput.responseBuilder;
        attributes.state = 'Chicken';
        askQuestion(handlerInput);
        handlerInput.attributesManager.setSessionAttributes(attributes);
        const item = attributes.quizItem;
        const property = attributes.quizProperty;

        const resAnswer = checkIt(handlerInput.requestEnvelope.request.intent.slots.Animal.value,'dog' );
    
        return handlerInput.responseBuilder
            .speak(resAnswer + '<audio src=“soundbank://soundlibrary/animals/amzn_sfx_chicken_cluck_01”/> What is it?')
            .withShouldEndSession(false)
            .getResponse();     
    }
};


            
// const NounLaunchIntentHandler2 = {
//     canHandle(handlerInput){
//       return handlerInput.requestEnvelope.request.type === 'IntentRequest'
//             && handlerInput.requestEnvelope.request.intent.name === 'AnimalIntent' //change this later if need be 
//             && handlerInput.attributesManager.getSessionAttributes().state === 'Horse';
//     }, 
//     handle(handlerInput){
//         const attributes = handlerInput.attributesManager.getSessionAttributes();
//         const response = handlerInput.responseBuilder;
//         attributes.state = 'Chicken';
//         askQuestion(handlerInput);
//         handlerInput.attributesManager.setSessionAttributes(attributes);
//         const item = attributes.quizItem;
//         const property = attributes.quizProperty;
        
//         const resAnswer = checkIt(handlerInput.requestEnvelope.request.intent.slots.Animal.value,'dog' );
//         return handlerInput.responseBuilder
//             .speak(resAnswer + '<audio src=“soundbank://soundlibrary/animals/amzn_sfx_horse_huff_whinny_01”/> What is it?')
//             .reprompt('<audio src=“soundbank://soundlibrary/animals/amzn_sfx_horse_huff_whinny_01”/> What is it?')
//             .withShouldEndSession(false)
//             .getResponse();        
//     }
// }

const NounLaunchIntentHandler2 = {
    canHandle(handlerInput){
       return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AnimalIntent' //change this later if need be 
            && handlerInput.attributesManager.getSessionAttributes().state === 'Chicken';
    }, 
    handle(handlerInput){
        const attributes = handlerInput.attributesManager.getSessionAttributes();
        const response = handlerInput.responseBuilder;
        attributes.state = 'End';
        askQuestion(handlerInput);
        handlerInput.attributesManager.setSessionAttributes(attributes);
        const item = attributes.quizItem;
        const property = attributes.quizProperty;
        const resAnswer = checkIt(handlerInput.requestEnvelope.request.intent.slots.Animal.value,'chicken');
        return handlerInput.responseBuilder
            .speak(resAnswer + '<audio src=“soundbank://soundlibrary/animals/amzn_sfx_sheep_bleat_02”/> What is it?')
            .reprompt('<audio src=“soundbank://soundlibrary/animals/amzn_sfx_sheep_bleat_02”/> What is it?')
            .withShouldEndSession(false)
            .getResponse();         
    }
}


// const NounLaunchIntentHandler5 = {
//     canHandle(handlerInput){
//       return handlerInput.requestEnvelope.request.type === 'IntentRequest'
//             && handlerInput.requestEnvelope.request.intent.name === 'AnimalIntent' //change this later if need be 
//             && handlerInput.attributesManager.getSessionAttributes().state === 'Sheep';
//     }, 
//     handle(handlerInput){
//         const attributes = handlerInput.attributesManager.getSessionAttributes();
//         const response = handlerInput.responseBuilder;
//         attributes.state = 'End';
//         askQuestion(handlerInput);
//         handlerInput.attributesManager.setSessionAttributes(attributes);
//         const item = attributes.quizItem;
//         const property = attributes.quizProperty;
//         const resAnswer = checkIt(handlerInput.requestEnvelope.request.intent.slots.Animal.value,'chicken' );
//         return handlerInput.responseBuilder
//             .speak(resAnswer + '<audio src=“soundbank://soundlibrary/animals/amzn_sfx_sheep_bleat_02”/> What is it?')
//             .reprompt('<audio src=“soundbank://soundlibrary/animals/amzn_sfx_sheep_bleat_02”/> What is it?')
//             .withShouldEndSession(false)
//             .getResponse();      
//     }
// }


const NounLaunchIntentHandler6 = {
    canHandle(handlerInput){
       return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AnimalIntent' //change this later if need be 
            && handlerInput.attributesManager.getSessionAttributes().state === 'End';
    }, 
    handle(handlerInput){
        const attributes = handlerInput.attributesManager.getSessionAttributes();
        const response = handlerInput.responseBuilder;
        askQuestion(handlerInput);
        handlerInput.attributesManager.setSessionAttributes(attributes);
        const item = attributes.quizItem;
        const property = attributes.quizProperty;
        const resAnswer = checkIt(handlerInput.requestEnvelope.request.intent.slots.Animal.value,'sheep' );
        return handlerInput.responseBuilder
            .speak(resAnswer)
            .withShouldEndSession(true)
            .getResponse();      
    }
}




function checkIt(input, output){
    if(input === output){
        return "That's correct. Good job.";
    }
    else{
        return "Almost there." + "a " + animalCurr + " makes that sound.";
    }
}






// const YesGameIntentHandler = {
//     canHandle(handlerInput) {
//         return handlerInput.requestEnvelope.request.type === 'IntentRequest'
//             && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent'
//             && handlerInput.attributesManager.getSessionAttributes().State = 'InGame';
//     }
// };
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can say help! How can I help?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Sorry, I couldn't understand what you said. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const data = [{'Statename': 'What sound does this make. Listen', 'Sound': 'meow', 'Answer': 'cat'}];

function askQuestion(handlerInput){
    console.log("asking question");
    const item = data[0];
    const propertyArray = Object.getOwnPropertyNames(item);
    const property = propertyArray[2];
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    attributes.quizItem = item;
    attributes.quizProperty = property;
    handlerInput.attributesManager.setSessionAttributes(attributes);
    const question = getQuestion(property, item);
    return question;
}

function getQuestion(property, item){
    return '${item.Statename}';
}

function getAnswer(property, item){
    return 'The answer is ${item[property]}.';
}

// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        NounLaunchIntentHandler0,
        NounLaunchIntentHandler1,
        NounLaunchIntentHandler2,
        NounLaunchIntentHandler6,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();