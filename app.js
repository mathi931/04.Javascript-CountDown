//some data
const DatesToSelect = [
    {
        id: 0,
        name: 'Tomorrowland',
        date: '16 Jul 2021'
    },
    {
        id: 1,
        name: 'Christmas',
        date: '25 Dec 2021'
    },
    {
        id: 2,
        name: 'New year`s eve',
        date: '01 Jan 2022'
    },
    {
        id: 3,
        name: 'Birthday',
        date: '26 March 2021'
    },
]

//dropdown element
const dropDown = document.getElementById('selector');

//index array
let iarr = [];

//dropdownd change event
dropDown.addEventListener('change', function (e){
    //save the current index
    iarr.push(e.target.value);
    //clear the last index to stop the loop
    clearInterval(iarr[iarr.length-1]);
    //start the loop
    setInterval(function(){LoadValues(DatesToSelect[e.target.value].date)} ,1000);
    //load the elements
    LoadElements()
});

//Load values and elements
function LoadValues(date){
    document.getElementById('days').innerHTML = GetDifferenceInDays(GetTotalDifferenceSec(date));
    document.getElementById('hours').innerHTML = GetDifferenceInHours(GetTotalDifferenceSec(date));
    document.getElementById('minutes').innerHTML = GetDifferenceInMinutes(GetTotalDifferenceSec(date));
    document.getElementById('seconds').innerHTML = GetDifferenceInSeconds(GetTotalDifferenceSec(date));
    }
function LoadElements(){
        const spans = document.querySelectorAll('span');
        document.getElementById("countdownCont").className = "countdown-container-border";
        spans[0].innerHTML = 'days';
        spans[1].innerHTML = 'hours';
        spans[2].innerHTML = 'minutes';
        spans[3].innerHTML = 'seconds';
        
    }

//Get the values
function GetTotalDifferenceSec(date){
    const currentDate = new Date().getTime();
    const countDownDate =new Date(date);
    return (countDownDate - currentDate) / 1000;
    }
function GetDifferenceInDays(dif){
    return Math.floor(dif / 3600 /24);
    
}
function GetDifferenceInHours(dif){
    return Math.floor(dif / 3600) % 24;
    
}
function GetDifferenceInMinutes(dif){
    return Math.floor(dif / 60) % 60;
    
}
function GetDifferenceInSeconds(dif){
    return Math.floor(dif) %60;
   
}
