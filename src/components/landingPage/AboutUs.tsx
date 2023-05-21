import React from "react";
import colors from "../Colors";
import { SimpleGrid, GridItem, Grid } from "@chakra-ui/react";
import {
  FaGooglePlay,
  FaApple,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
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
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

function AboutUs() {
  const showImage = useBreakpointValue({ base: false, md: false, lg: true });
  const showMarginTop = useBreakpointValue({ sm: false, md: true, lg: true });
  return (
    <div>
      <div className="parentDiv">
        <div
          className="columns"
          style={{ marginLeft: "10%", marginRight: "10%", marginTop: "2%" }}
        >
          <Box>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(1, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={4}
            >
              <GridItem
                style={{
                  marginTop: showMarginTop ? "25%" : "5%",
                  marginBottom: "5%",
                }}
              >
                <Stack mt="6" spacing="3">
                  <Text
                    fontSize="50"
                    style={{
                      textAlign: "left",
                      fontWeight: "bolder",
                      marginTop: "0",
                      marginBottom: "0",
                     
                    }}
                    color={colors.secondary}
                  >
                    Redefining mental healthcare for people
                  </Text>
                  <p
                    color="blue.600"
                    style={{ fontSize: "7", textAlign: "center" }}
                  >
                    Our mission is to make mental health supportradically more
                    accessible, preventative, and stigma-free
                  </p>
                </Stack>

                <div
                  className="buttons"
                  style={{
                    marginTop: "2%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    leftIcon={<Icon as={FaGooglePlay} boxSize={7} />}
                    backgroundColor="white"
                    borderColor={"black"}
                    width={"25%"}
                    padding={"4%"}
                  >
                    <Stack>
                      <Text fontSize={"12"} style={{ textAlign: "left" }}>
                        Get it on
                      </Text>
                      <h5 style={{ marginTop: "0px" }}>Play Store</h5>
                    </Stack>
                  </Button>
                  <Button
                    leftIcon={<Icon as={FaApple} boxSize={7} />}
                    backgroundColor="white"
                    borderColor={"black"}
                    width={"28%"}
                    padding={'4%'}
                    style={{ marginLeft: "10px" }}
                  >
                    <Stack>
                      <Text fontSize={"12"} style={{ textAlign: "left" }}>
                        Download on the
                      </Text>
                      <h5 style={{ marginTop: "0px", textAlign: "left" }}>
                        App Store
                      </h5>
                    </Stack>
                  </Button>
                </div>
              </GridItem>
              <GridItem order={{ sm: 1, md: 1 }}>
                {showImage && (
                  <Image
                    src="src\assets\Images\Psychologist-amico (1).png"
                    alt="Depression Image"
                    height="100%"
                    width="100%"
                    // display={{ sm: 'none', lg: 'block' }}
                  />
                )}
              </GridItem>
            </Grid>
          </Box>

          <Box>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={4}
              style={{ marginTop: "2%", marginBottom: "6%" }}
            >
              <GridItem order={{ sm: 1, md: 1 }}>
                <Stack>
                  <h2>
                    <strong>Information</strong>
                  </h2>
                  <Link>FAQ</Link>
                  <Link>Support</Link>
                </Stack>
                <div className="Links">
                  <IconButton
                    aria-label="LinkedIn"
                    icon={<Icon as={FaLinkedin} />}
                    isRound={true}
                    size="sm"
                    mr={2}
                    mt={10}
                    borderColor="black"
                  />
                  <IconButton
                    aria-label="Facebook"
                    icon={<Icon as={FaFacebook} />}
                    isRound={true}
                    size="sm"
                    mr={2}
                    mt={10}
                    borderColor="black"
                  />
                  <IconButton
                    aria-label="Twitter"
                    icon={<Icon as={FaTwitter} />}
                    isRound={true}
                    size="sm"
                    mt={10}
                    borderColor="black"
                  />
                </div>
              </GridItem>
              <GridItem order={{ sm: 1, md: 1 }}>
                <Stack>
                  <h2>
                    <strong>Company</strong>
                  </h2>
                  <Link>About Us</Link>
                  <Link>Contact Us</Link>
                </Stack>
                <Flex
                  className="terms"
                  style={{ flexDirection: "row", marginTop: "13%" }}
                >
                  <Link mr={4}>Terms</Link>
                  <Link mr={4}>Privacy</Link>
                  <Link>Cookies</Link>
                </Flex>
              </GridItem>
              <GridItem order={{ sm: 1, md: 1 }}>
                <Stack>
                  <h2>
                    <strong>Subscribe</strong>
                  </h2>
                  <InputGroup style={{ width: "63%" }}>
                    <Input placeholder="Email Address" />
                    <InputRightElement
                      borderTopEndRadius={"5px"}
                      borderBottomEndRadius={"5px"}
                    />
                  </InputGroup>
                  <p>
                    Hello, we are Mind Care. Our goal is to translate the
                    positive effects from revolutionizing digital therapy
                  </p>
                </Stack>
              </GridItem>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
