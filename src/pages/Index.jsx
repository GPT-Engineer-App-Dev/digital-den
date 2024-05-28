import { Box, Container, VStack, HStack, Text, Image, Button, Flex, Link, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: "$699",
    image: "/images/smartphone.jpg",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Laptop ABC",
    price: "$999",
    image: "/images/laptop.jpg",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: "$199",
    image: "/images/headphones.jpg",
    category: "Accessories",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["All", ...new Set(sampleProducts.map(product => product.category))];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "All" || product.category === selectedCategory)
  );

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="gray.800" color="white" p={4}>
        <Flex justify="space-between" align="center">
          <Text fontSize="2xl" fontWeight="bold">ElectroShop</Text>
          <HStack spacing={8}>
            <Link href="#">Home</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Contact</Link>
          </HStack>
        </Flex>
      </Box>

      <Container maxW="container.lg" py={8}>
        <VStack spacing={8}>
          <Box w="100%">
            <Input
              placeholder="Search for products..."
              value={searchTerm}
              onChange={handleSearchChange}
              mb={4}
            />
            <Select placeholder="Select category" value={selectedCategory} onChange={handleCategoryChange} mb={4}>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </Select>
          </Box>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
                <Text>{product.price}</Text>
                <Button colorScheme="teal" mt={4}>Add to Cart</Button>
              </Box>
            </Box>
          ))}
        </VStack>
      </Container>

      <Box bg="gray.800" color="white" p={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;