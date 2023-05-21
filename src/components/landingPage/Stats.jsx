import React from "react";
import { css } from "@emotion/react";
import colors from "../Colors";
import { SimpleGrid, GridItem, Grid } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Center,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  IconButton,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  StackDivider,
  Stack,
  Collapse,
  Icon,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Img,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

function Stats() {
  return (
    <div>
      <div className="parentDiv">
        <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "2%" }}>
          <strong>
            <Text fontSize="49" style={{ textAlign: "center" }}>
              <span style={{ color: "black" }}>Better </span>
              <span color={colors.primary}>mental health benefits</span>
              <span style={{ color: "black" }}>,better</span>
            </Text>
            <h1 style={{ textAlign: "center", marginTop: "0" }}>outcomes</h1>
          </strong>
          <p
            style={{
              textAlign: "center",
              marginRight: "15%",
              marginLeft: "15%",
              marginTop: "2%",
            }}
          >
            Clinical data that showcases substantial improvements in the
            wellbeing, stress,and anxiety levels of members who utilise our
            programs.
          </p>
        </div>
        <div
          className="columns"
          style={{ marginLeft: "10%", marginRight: "10%", marginTop: "2%" }}
        >
          <Box>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={4}
            >
              <GridItem>
              <Card maxW="100%" backgroundColor={"white"} color={colors.secondary}  _hover={{
              bg: colors.secondary,
              color:'white'              
            }}
            boxShadow='lg'>
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Center>
                        <Image
                          src="src\assets\Images\growth.png"
                          alt="Depression Image"
                          height="100px"
                          width="100px"
                        />
                      </Center>
                      <Text
                        fontSize="40"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                          marginTop: "0",
                          marginBottom: "0",
                        }}
                      >
                        35%
                      </Text>
                      <p
                        color="blue.600"
                        style={{ fontSize: "13", textAlign: "center" }}
                      >
                        of all people signed up for the Mind Care app within the
                        first year
                      </p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
              <Card maxW="100%" backgroundColor={"white"} color={colors.secondary}  _hover={{
              bg: colors.secondary,
              color:'white'              
            }}
            boxShadow='lg'>
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Center>
                        <Image
                          src="src\assets\Images\column.png"
                          alt="Nervous Image"
                          height="100px"
                          width="100px"
                        />
                      </Center>
                      <Text
                        fontSize="40"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                          marginTop: "0",
                          marginBottom: "0",
                        }}
                      >
                        81%
                      </Text>

                      <p
                        color="blue.600"
                        style={{ fontSize: "13", textAlign: "center" }}
                      >
                        of employees reported improved ability to regulate their
                        emotions
                      </p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
              <Card maxW="100%" backgroundColor={"white"} color={colors.secondary}  _hover={{
              bg: colors.secondary,
              color:'white'              
            }}
            boxShadow='lg'>
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Center>
                        <Image
                          src="src\assets\Images\line-graph.png"
                          alt="Speed Image"
                          height="100px"
                          width="100px"
                        />
                      </Center>
                      <Text
                        fontSize="40"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                          marginTop: "0",
                          marginBottom: "0",
                        }}
                      >
                        93%
                      </Text>
                      <p
                        color="blue.600"
                        style={{ fontSize: "14", textAlign: "center" }}
                      >
                        clients experienced a decrease in anxiety levels after
                        4-6 weeks of utilisation
                      </p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
                <Card maxW="100%" backgroundColor={"white"} color={colors.secondary}  _hover={{
              bg: colors.secondary,
              color:'white'              
            }}
            boxShadow='lg'>
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Center>
                        <Image
                          src="src\assets\Images\rating.png"
                          alt="Depression Image"
                          height="100px"
                          width="100px"
                        />
                      </Center>
                      <Text
                        fontSize="40"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                          marginTop: "0",
                          marginBottom: "0",
                        }}
                      >
                        4.5/5
                      </Text>
                      <p
                        color="blue.600"
                        style={{ fontSize: "14", textAlign: "center" }}
                      >
                        user satisfaction rating across
                      </p>
                      <p
                        color="blue.600"
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",
                        }}
                      >
                        3 million registered users on our app
                      </p>
                      <p
                        color={colors.secondary}
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",
                        }}
                      ></p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </Box>
          <Center>
            <Button
              bg={colors.primary}
              variant="outline"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Book Appointment
            </Button>
          </Center>
        </div>
      </div>
    </div>
  );
}

export default Stats;
