import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);

        // console.log("Parent Component");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    };

    render() {
        // console.log("Parent Render");
        return (
            <div>
                <h1> About class component </h1>
                <div>
                    LoggedIn User :
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2> This is Nameste React Web Series </h2>
                <User name={"Abhishek-function"} location={"Patna-function"} />
                <UserClass name={"Abhishek class"} location={"Patna"}
                /> </div>
        );
    }
};

// const About = () => {

//     return (
//         <div>

//             <h1>About</h1>
//             <h2>This is Nameste React Web Series</h2>
//             <User name={"Abhishek-function"} location={"Patna-function"} />
//             <UserClass name={"Kumar-class"} location={"Patna-class"} />
//         </div>
//     );
// };

export default About;