import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Marilia Messias</Text>
            <Text color="gray.300" fontSize="small">
              marilia_messias@outlook.com
            </Text>
          </Box>
          <Avatar size="md" name="Marilia Messias" src="https://github.com/mariliamessias.png"/>
        </Flex>
    );
}