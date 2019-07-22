import React from 'react';
class Demo extends React.Component
{
    constructor()
    {
        super()
            var today=Date.now();
            this.state=
            {
                data:today
            }
            console.log("date",this.state.data)
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