import { Box, Flex, Text, Stat, StatLabel, StatNumber, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="var(--deep-blue)" minHeight="100vh" p={8}>
      {/* Header */}
      <Flex justify="space-between" align="center" mb={8}>
        <Text fontSize="3xl" fontWeight="bold" color="white">
          RV Dealership CRM
        </Text>
        <Button colorScheme="orange" bg="var(--burnt-orange)">
          Settings
        </Button>
      </Flex>

      {/* Key Stats */}
      <Flex justify="space-around" mb={12}>
        <Stat bg="gray.700" borderRadius="md" p={4} boxShadow="md">
          <StatLabel fontSize="lg" color="var(--aluminum)">
            New Leads
          </StatLabel>
          <StatNumber fontSize="4xl" color="white">
            250
          </StatNumber>
        </Stat>
        <Stat bg="gray.700" borderRadius="md" p={4} boxShadow="md">
          <StatLabel fontSize="lg" color="var(--aluminum)">
            Conversion Rate
          </StatLabel>
          <StatNumber fontSize="4xl" color="white">
            8.5%
          </StatNumber>
        </Stat>
      </Flex>

      {/* Leads Section */}
      <Box bg="var(--carbon-fiber-simulated)" borderRadius="md" p={8} boxShadow="md">
        <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
          Leads
        </Text>
        {/* Placeholder for Leads table */}
        <Box bg="gray.800" borderRadius="md" p={4} minHeight="200px">
          <Text color="var(--aluminum)">Leads table will be integrated here.</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
