var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");
var cont = document.getElementById("chat-container");
var icon = document.getElementById("icon-container");
var count = 0;

setTimeout(function(){

    if(count <= 0){
      cont.classList.remove('d-none');
      count++
    }

},10000)

icon.addEventListener('click',function(e){
    
    cont.classList.remove('d-none');
    count++;
});


var user= {message:"",counter:0};



var arrayOfPosibleMessage = [

    {"message":"how are you?","response":"I'm fine And you?."},
    {"message":"who are you?","response":"I am your assitence"},
    {"message":"how are you doing?","response":"I'm fine, thanks, and you."},
    {"message":"how are you going?","response":"I'm doing well!."},
    {"message":"what's up","response":"Not much. What's up with you? ."},
    {"message":"good morning","response":"Good morning, how can i help you today?."},
    {"message":"good evening","response":"Good evening to you, can i help you with your serching?."},
    {"message":"good afternoon","response":"Thanks - you too!, what are you looking for?."},
    {"message":"good night","response":"Good night to you too !."},
    {"message":"tell me somthing","response":"Thank you."},
    {"message":"i am fine too","response":"That's great, so how can i help you?."},
    {"message":"i am doing fine and you","response":"I am great !."},
    {"message":"i am doing great and you","response":"That good! Me too."},
    {"message":"what are you","response":"I am a chat bot."},
    {"message":"why are you?","response":"I am here to assist you."},
    {"message":"in what way","response":"Anyway i possibily can."},
    {"message":"what is your name","response":"I am a chatbot."},
    {"message":"what's your name","response":"I am a chatbot."},
    {"message":"how old are you?","response":"I am ageless."},
    {"message":"do you have any kids","response":"No i don't have."},
    {"message":"do you sleep","response":"No i don't sleep."},
    {"message":"do you sleep early","response":"No i don't sleep."},
    {"message":"do you have car","response":"I travell through space."},
    {"message":"can you dance","response":"Yes,tango."},
    {"message":"what's your fav food","response":"Data."},
    {"message":"what is your fav food","response":"Data."},
    {"message":"what's your favourite food","response":"Data."},
    {"message":"what is your favourite food","response":"Data."},
    {"message":"do you have a job","response":"Yes."},
    {"message":"where do you live","response":"Inside the web."},
    {"message":"where were you born","response":"Mumbai."},


];





var questionsToask = [

    {"question":"How can i help you?<br><a href='https://legislative.gov.in/sites/default/files/Savidhan.pdf'>1.Constitution</a><br><a href='https://www.constitutionofindia.net/historical_constitutions'>2.History of constitution</a><br><a href='events'>3.Event</a><br><a href='gallery'>4.gallery</a><br><a href='quiz'>5.quiz</a>","answer":""},
    // {"question":"Hello. what are you looking for?","answer":""},
    // {"question":"<a href='https://:www.goggle.com'>click here</a>","answer":""},
    {"question":"","answer":""},
    {"question":"","answer":""},
    {"question":"","answer":""},
    {"question":"","answer":""},
    {"question":"","answer":""},
    {"question":"","answer":""},
    {"question":"","answer":""},
    {"question":"","answer":""},
    {"question":"","answer":""},
    {"question":"","answer":""}
];

askQuestion();

function askQuestion() {

    if(questionsToask.length > user.counter){
    setTimeout(function(){
        chatBoxSendMessage(questionsToask[user.counter].question);
        user.counter++;
    },1000);

    console.log(questionsToask[user.counter-1]);
    }
}


function chatBoxSendMessage(messageText){

    var messageElement = document.createElement('div');

    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span> Alex:</span>"+
    "<span style='margin-top:10px; padding:10px;'>"+messageText+"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})

    chatContainer.appendChild(messageElement);

    chatContainer.scrollTop = chatContainer.scrollHeight;

}


function sendMessage(messageText){

    var messageElement = document.createElement('div');

    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span> You:</span>"+
    "<span style='margin-top:10px; padding:10px;'>"+messageText+"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})

    chatContainer.appendChild(messageElement);

    chatContainer.scrollTop = chatContainer.scrollHeight;

}

sendBtn.addEventListener('click',function(e){

    let messageText = textbox.value;
    if(messageText == ""){
        alert("you need to write something before sending the message");
    }
    else{
        sendMessage(messageText);
        user.message = messageText;
        textbox.value = "";

        questionsToask[user.counter-1].answer = user.message;

        askQuestion();
        //processMangement()
    }
});


    function processMangement(){
        
        var result = arrayOfPosibleMessage.filter(val=> val.message.includes(user.message.toLowerCase()));

        if(user.message.length > 5){

        if(result.length > 0){
            var response = result[0].response;

            setTimeout(function(){

                chatBoxSendMessage(response);

            },1000);
        }else {
            setTimeout(function(){

                chatBoxSendMessage("I don't understand");

            },1000);
        }
    }
    else if(user.message == "hi" || user.message == "hey"){
            
        setTimeout(function(){
        chatBoxSendMessage("Hey");
        },1000);
    }else if(user.message == "who" || user.message == "why" || user.message == "how" || user.message == "whom" || user.message == "what" )
    {

        setTimeout(function(){

            chatBoxSendMessage("?");

        },1000);

    }else if(user.message == "fine"){
        setTimeout(function(){

            chatBoxSendMessage("Great !");

        },1000);
    }
    else{

        setTimeout(function(){

            chatBoxSendMessage("Please send me a complete sentence");

        },1000);

    }
    }

    $("#textbox").keypress(function (e) {
        if (e.which == 13) {
            let messageText = textbox.value;
            if(messageText == ""){
                alert("you need to write something before sending the message");
            }
            else{
                sendMessage(messageText);
                user.message = messageText;
                textbox.value = "";

                questionsToask[user.counter-1].answer = user.message;
        
                askQuestion();
                //processMangement()


            }
        }
    });