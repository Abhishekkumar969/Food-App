import React from "react";



class UserClass extends React.Component {
    constructor(props) {
        super(props);

        // State hook in class based component
        this.state = {
            userInfo: {
                name: "Dummy",
                id: "Default",
                avatar_url: ""
            },
        };
        // console.log("child component");
    };

    async componentDidMount() {
        // console.log(this.props.name + "Child Component Did Mount");
        // Api call
        const data = await fetch("https://api.github.com/users/Abhishekkumar969");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        // console.log(json);
    }

    componentDidUpdate() {
        //console.log("cOMPONENT DID UPDATE");
    }

    componentWillUnmount() {
        //console.log("cOMPONENT DID UNMOUNT");
    }

    render() {
        // console.log("child render");
        const { name, id, avatar_url } = this.state.userInfo;
        return (

            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h2>Name: {name}</h2>
                <h3>id: {id}</h3>
                <h4>Contact: @imabhishekdubey_</h4>
            </div>
        )
    }

};
export default UserClass;