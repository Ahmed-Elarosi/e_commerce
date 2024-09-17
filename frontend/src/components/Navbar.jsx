import { Container, Flex, Text, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          textTransform={"uppercase"}
          textAlign={"center"}
          bgClip="text"
          fontWeight="bold"
        >
          <Link to={"/"}>Product Store</Link>
        </Text>
      </Flex>
    </Container>
  );
};

export default Navbar;
