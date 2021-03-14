import React from 'react'

function Member(){
    return(
        <>
            <div className='container'>
                <h2>Member Access Settings</h2>
                <div className='bg-whight'>
                    <h6>This feature will let your members access the app, view and update their own profiles & their family profiles, recieve notifications messages and also see the public events on the calendar. </h6>
                </div>
                <br/>
                <div className='bg-whight'>
                    <h6>To control the permissions of member access:<br/>
                    Update the <a href='#'>Member role settings</a> </h6>
                </div>
                <br/>
                <div className='bg-whight'>
                    <h6> To invite the members:<br/>
                        Select the member(s) you want to invite from the <a href="#">People page</a><br/>
                        Choose 'Invite to Member Access' from the bulk actions.</h6>
                </div>
            </div>
            
        </>
    )
}
export default Member