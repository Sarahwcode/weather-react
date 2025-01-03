import React from "react";



export default function DateFormat(props)
{ 
    let days = ["Sunday","Monday", "Tuesday","Wednesday", "Thursday" , "Friday" , "Saturday" ];
let day = days[props.date.getDay()];
let months = ["January","Febuary", "March","April", "May" , "June" , "July", "August", "September", "October", "November", "December" ];
let month = months[props.date.getMonth()];
let hour = props.date.getHours();
if (hour < 10) {
    hour = `0${hour}`;
}
let minute = props.date.getMinutes();

if (minute < 10) {
    minute = `0${minute}`;
}
    return <div>{day} {month} {hour}:{minute}</div>;
}