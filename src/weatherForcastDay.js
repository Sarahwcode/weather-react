import React from "react";

export default function WeatherForecastDay (props){
    return (
        <div>
<div>
{props.data.time}
</div>
<div>
{props.data.time}
</div>
<div>
    <span>{props.data.temperature.maximum}</span><span>{props.data.temperature.minimum}</span>
</div>

</div>

    );
}