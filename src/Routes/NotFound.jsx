import { Link as ReachLink} from "react-router-dom";
import { Flex, Button, Link } from "@chakra-ui/react";

const NotFound = () => {

    return <Flex w='100%' direction={"column"} alignItems='center'>
            <h2> 404 Not Found </h2>
            <Link as={ReachLink} to={"/"} marginTop={8}>
                <Button colorScheme="gray">Kembali Ke Home</Button>
            </Link>
        </Flex>
};

export default NotFound;
