import { Link as ReachLink } from "react-router-dom"
import { Flex, Spacer, Heading, Link } from '@chakra-ui/react'

function NavBar() {
    return (
        <nav>
            <Flex p={4}>
                <Heading as='h3' size='lg'>
                    <Link as={ReachLink} to="/" data-testid="home-page">Student Portal</Link>
                </Heading>
                <Spacer />
                <ul>
                    <li>
                        <Link as={ReachLink} to="/student" data-testid="student-page">All Student</Link>
                    </li>
                    <li>
                        <Link as={ReachLink} to="/add" data-testid="add-page">Add Student</Link>
                    </li>
                </ul>
            </Flex>
        </nav>
    );
}

export default NavBar;
