import React from 'react';
import { Link} from 'react-router-dom'


const Main = () => {
    return (
        <>
            <div className="main_page">
                <div className="container-main">
                    <div className="col-md-12 display-flex justify-content-center bgimage">

                 <Link to="/dashboard"><img src="https://mailverse.io/images/btn_google_signin_dark_normal_web.png" alt='logo section' width="150" height="60" /></Link>
                        
                    </div>
                </div>
                <p className='text_section'> We are the next email client, we give super powers to your current Gmail, Outlook and Yahoo account. After you connect your inbox with us, we process your emails and then you will be able to perform advanced actions without leaving your email and convert them into a fully immersive an interactive experience.</p>

            </div>
        </>
    )
}

export default Main