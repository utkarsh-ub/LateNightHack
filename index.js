function nirva()
{
    window.open("melody.html");
}

function hands()
{
    window.open("asmr.html");
}

function talks()
{
    window.open("chat/uttu.html");
}

function news()
{
    window.open("news/index.html");
}

function yup()
{
    window.open("yoga/index.html");
}  

function don()
{
    window.open("doctor/doc.html"); 
}

function sleep()
{
    window.open("story/index.html"); 
}

function bot()
{
    window.open("https://t.me/+NwLQ6F8IJFcwYmE1"); 
}

//header animation
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
