import React from 'react';
import Experience from '../Components/Experience';

const AboutPage = () => {
    return <div>
        <Experience
         title="Software Development Intern" 
         company ="Ventoscity"
         date = "Summer 2024"
         description="Developed food recognition software using GPT4o for app users to record daily fiber intake"
        />
        <Experience
         title="Frontend Software Engineering Intern" 
         company ="Keep.id"
         date = "Spring 2024"
         description="Developed several web applicat a 30% increase in user engagement."
        />
        <Experience
         title="Research Intern" 
         company ="National Science Foundation REU"
         date = "Summer 2023"
         description="Developed several web applicat a 30% increase in user engagement."
        />
        <Experience
         title="Cashier" 
         company ="Cinnabon"
         date = "Summer 2022"
         description="Developed several web applicat a 30% increase in user engagement."
        />




    </div>
    ;
}

export default AboutPage;