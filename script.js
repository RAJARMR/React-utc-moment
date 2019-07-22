import React from 'react';
class Demo extends React.Component
{
    constructor()
    {
        super()
            var today=new Date();
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var date=today.getFullYear() + '-' +  
            (today.getMonth() +1) + '-' + 
            today.getDate() + "-" +
            days[today.getDay()] + "-" +
            today.getHours() + "-" + 
            today.getMinutes() + "-" +
             today.getSeconds ();
            this.state={
                data:date
            }
            console.log("date",this.state.data);
    } 
    render()
    {
        return(
            <div>
                 {this.state.data} 
            </div>
        )
    }
}
export default Demo;