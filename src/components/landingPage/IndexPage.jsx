import React from "react"
import colors from "../Colors";
import { GridItem, Grid } from "@chakra-ui/react"
import { Box, Text, Button, Stack, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react"
function IndexPage() {
  const [isLargerThanLg] = useMediaQuery("(min-width: 1350px)")
  return (
    <div className="parentDiv">
      <div
        className="columns"
        style={{ marginLeft: "10%", marginRight: "10%", marginTop: "2%" }}
      >
        {isLargerThanLg ? (
          <Box>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(1, 1fr)",
                lg: "repeat(2, 1fr)"
              }}
              gap={4}
            >
              <GridItem style={{ marginTop: "11%" }}>
                <Stack mt="6" spacing="3">
                  <Text
                    fontSize="60"
                    style={{
                      textAlign: "left",
                      fontWeight: "bolder",
                      marginTop: "0",
                      fontSize: "42",
                      color: colors.secondary
                    }}
                  >
                    The most
                  </Text>
                  <Text
                    fontSize="53"
                    style={{
                      textAlign: "left",
                      fontWeight: "bolder",
                      marginTop: "0",
                      color: colors.secondary
                    }}
                  >
                    mental health platfo
                  </Text>

                  <p
                    color={colors.secondary}
                    style={{ fontSize: "6 ", textAlign: "center" }}
                  >
                    For people looking to proactively care for their mental
                    wellbeing, Mind Care takes the guesswork out with our mental
                    health platform. Speak with licensed therapists or take on
                    self-guided programs, entirely within a single platform.
                  </p>
                </Stack>
                <div
                  className="buttons"
                  style={{
                    marginTop: "2%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end"
                  }}
                >
                  <Button
                    backgroundColor="EDF2F7"
                    borderColor={"white"}
                    width={"25%"}
                  >
                    <Stack>
                      <Text fontSize={"17"} style={{ textAlign: "left" }}>
                        How It Works
                      </Text>
                    </Stack>
                  </Button>
                  <Link to='/dashboard'>
                  <Button
                backgroundColor={colors.secondary}
                    color={"white"}
                    width={"100%"}
                    variant="unstyled"
                    _hover={{
                      bg: colors.primary
                    }}
                    style={{ marginLeft: "10px" }}
                  >
                    Get Started
                  </Button>
                  </Link>
                </div>
              </GridItem>
              <GridItem order={{ sm: 1, md: 1 }}>
                <Box position="relative" maxW="lg">
                  <Image
                    src="src\assets\Images\Mental health-bro (1).png"
                    alt="Image"
                    opacity="0.9"
                    borderRadius="md"
                    marginLeft={"5%"}
                    height="auto"
                    width={"auto"}
                  />
                  <Text
                    position="absolute"
                    top="31%"
                    left="20%"
                    transform="translate(-100%, -100%)"
                    fontWeight="bold"
                    fontSize="53"
                  >
                    <span color={colors.primary}>comprehensive </span>
                  </Text>
                  <Text
                    position="absolute"
                    top="47%"
                    left="6%"
                    transform="translate(-100%, -100%)"
                    fontWeight="bold"
                    fontSize="53"
                  >
                    <span color={colors.secondary}>rm</span>
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        ) : (
          <Box>
            <Grid templateColumns="repeat(1, 1fr)" gap={4}>
              <GridItem>
                <Stack mt="6" spacing="3">
                  <strong>
                    <Text
                      fontSize="49"
                      style={{
                        textAlign: "center",
                        marginLeft: "1%",
                        marginRight: "1%"
                      }}
                    >
                      <span color={colors.secondary}>The most </span>
                      <span color={colors.primary}>comprehensive </span>
                      <span color ={colors.secondary}>
                        mental health platform
                      </span>
                    </Text>
                  </strong>
                  <p
                    style={{
                      textAlign: "center",
                      marginLeft: "10%",
                      marginRight: "10%"
                    }}
                  >
                    For people looking to proactively care for their mental
                    wellbeing, Mind Care takes the guesswork out with our mental
                    health platform. Speak with licensed therapists or take on
                    self-guided programs, entirely within a single platform.
                  </p>

                  <div
                    className="buttons"
                    style={{
                      marginTop: "2%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
                    <Button
                      backgroundColor="white"
                      borderColor={"white"}
                      width={"25%"}
                    >
                      <Stack>
                        <Text fontSize={"17"} style={{ textAlign: "left" }}>
                          How It Works
                        </Text>
                      </Stack>
                    </Button>
                    <Button
                  backgroundColor={colors.secondary}
                      borderColor={colors.secondary}
                      width={"25%"}
                      style={{ marginLeft: "10px" }}
                    >
                      <Stack>
                        <Text
                          fontSize={"17"}
                          style={{ textAlign: "left", color: "white" }}
                        >
                          Get Started
                        </Text>
                      </Stack>
                    </Button>
                  </div>
                </Stack>
              </GridItem>
            </Grid>
          </Box>
        )}
      </div>
    </div>
  )
}
export default IndexPage
