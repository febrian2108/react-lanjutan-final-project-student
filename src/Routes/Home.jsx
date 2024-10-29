import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/student">
                <Button data-testid="student-btn" colorScheme="green" size='sm'>All Students</Button>
            </Link>
        </div>
    );
};

export default Home;
