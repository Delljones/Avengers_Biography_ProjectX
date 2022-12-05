import './App.css';

function App() {
    return (
        <div className="App">

            {/*Introduction for MEDI product - Classname "Introduction" for purposes of CSS*/}

            <div className="Introduction">
                <h1>Medi</h1>
                <h2>A Chatbot System for Remote Health Monitoring</h2>
                <p> At Gopher industries we have created a chat-bot system called MEDI that works as a personal assistant
                    for
                    our intended demographic population to interact with the Gopher Suit and act as a frontage that is
                    the
                    introduction to the products that Gopher houses. <br/>
                    MEDI allows users to chat to it as if it was a human interaction helping them with anything from
                    pain
                    assessments to water consumption, nutritional advice and log in with their patient ID. <br/>
                    MEDI is designed for its users being easy to use, interacts in a friendly human way and will
                    eventually be
                    able to be interacted with via both text and voice – making the product accessible for whoever needs
                    to use it. <br/>
                    With future implementations and testing of GUI environments that suits our users, it is an exciting
                    time for MEDI with graphical implementations and unlimited additions available – MEDI is proud to be
                    the face of the Gopher Range!
                </p>
            </div>

            {/*Features for MEDI product - Classname "Features" for CSS purposes*/}

            <div className="Features">
                <h1>Features Within Our Application Will Include</h1>

                <h2>Pain Assessment Questionnaire</h2>
                <p>Ability for our users to log and rate their pain assessment to share with authorised health care
                    providers</p>

                <h2>Diet Plan and Tracking</h2>
                <p>Users are able to plan, monitor and share their diet plan with their authorised health care
                    providers. It will be a space where they can keep track of their nutrition and diet plans and
                    with a quick reference on a day to day basis of their nutritional intake
                </p>

                <h2>Water Consumption and Tracking</h2>
                <p>For anyone but in particular, the demographic that is using our app, tracking water consumption daily
                    is important. Our MEDI will be able to
                    log a daily water goal, graphically retrieve how much their consumption and motivate them along the
                    way to reach their goal!
                </p>

                <h2>DataExtraction and Read Write Functionality to our Database</h2>
                <p> Exciting plans are in the works for medi to be able to hve read and write function to our
                    centralised database, meaning that the information
                    that is entered into MEDI can be logged to the other Gopher logs and vice versa. Meaning that MEDI
                    is the centralised product that users can interact with for all of their health needs.
                </p>
            </div>
        </div>
    );
}

export default App;
