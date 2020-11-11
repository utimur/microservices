import React, {useEffect} from 'react';
import {Container} from "@material-ui/core";
import user from "../store/user";
import {observer} from "mobx-react-lite";

const Users = observer(() => {

    useEffect(() => {
        user.getAllUsers().then(data => console.log(data))
    }, [])

    return (
        <Container>
            asfasf
        </Container>
    );
});

export default Users;
