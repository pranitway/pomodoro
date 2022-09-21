import React, { useEffect, useState } from "react";
import { Box, Button, Stack } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const Pomodoro = () => {
    const [time, setTime] = useState();
    useEffect(() => {
        setInterval(() => {}, 5000);
    });
    return (
        <React.Fragment>
            <Box
                maxW="100%"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
            >
                <Stack
                    direction={["column", "row"]}
                    spacing="24px"
                    justify="center"
                >
                    <Button colorScheme="teal" size="sm">
                        Start
                    </Button>
                    <Button colorScheme="teal" size="sm">
                        Pause
                    </Button>
                    <Button colorScheme="teal" size="sm">
                        Reset
                    </Button>
                </Stack>
                <Stack>
                    <h3>{}</h3>
                </Stack>
            </Box>
        </React.Fragment>
    );
};

export default Pomodoro;
