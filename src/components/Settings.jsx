import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import Modals from "./settingsModals/Modals";
import * as Yup from "yup";
import {
  Box,
  Flex,
  Alert,
  AlertIcon,
  Text,
  Select,
  Button,
  Stack,
  FormErrorMessage,
  Image,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  Checkbox,
} from "@chakra-ui/react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "../utils/firebase";
import { v4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Settings() {
  //for image upload
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrl] = useState([]);
  //picture uploading code
  const imagesListRef = ref(storage, "Therapist/picture/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(
      storage,
      `Therapist/picture/${imageUpload.name + v4()}`
    );
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        // setFieldValue('picture',url)
        console.log("Image upload success!");
      });
    });
  };

  // code to download image url
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      const latestItem = response.items[response.items.length - 1]; // Get the latest item
      getDownloadURL(latestItem).then((url) => {
        setImageUrl([url]); // Set the image URL of the latest item
      });
    });
  }, []);
  //validation schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    picture: Yup.array().required("Required"),
    Dateofbirth: Yup.date().required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required"),
    specialization: Yup.string().required("Specialization Field is required"),
    experience: Yup.string().required("Experience is required"),
    SessionCharges: Yup.string().required("Session Charges is required"),
    Start_DateTime: Yup.date()
      .required("Date and time is required")
      .nullable()
      .typeError("Invalid date and time format"),
    End_DateTime: Yup.date()
      .required("Date and time is required")
      .nullable()
      .typeError("Invalid date and time format"),
  });

  const handlesubmit = (values) => {
    console.log(values);
  };

  return (
    <div
      className="parentDiv"
      style={{
        backgroundColor: "gray.100",
        marginTop: "1%",
        marginBottom: "1%",
      }}
    >
      <div className="columns">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            Dateofbirth: new Date(),
            gender: "",
            picture: "",
            specialization: "",
            experience: "",
            SessionCharges: "",
            Start_DateTime: "",
            End_DateTime: "",
            downloadURL: [],
          }}
          validationSchema={validationSchema}
          onSubmit={handlesubmit}
        >
          {({ setFieldValue, handleChange, errors, touched, values }) => (
            <Form >
              <Box
                bg="white"
                p={6}
                rounded="md"
                w={"auto"}
                height={"auto"}
                align="center"                >
                <VStack spacing={2} width={"100%"}>
                  <Grid
                    templateColumns={{
                      sm: "repeat(1, 1fr)",
                      md: "repeat(2, 1fr)",
                      lg: "repeat(3, 1fr)",
                    }}
                    gap={4}
                  >
                    <GridItem>
                      <Stack ml="3" spacing="3">
                        <Text
                          fontSize="30"
                          style={{
                            textAlign: "left",
                            fontWeight: "bolder",
                            marginTop: "0",
                            color: "#2D3748",
                          }}
                        >
                          Edit Profile
                        </Text>{" "}
                        <Flex
                          direction={{ base: "column", md: "row" }}
                          align="center"
                          justify="center"
                        >
                          <Image
                            src={imageUrls}
                            width={"230px"}
                            height={"150px"}
                            borderRadius={"50%"}
                            border={"1px solid black"}
                          />
                          <FormControl>
                            <Box>
                              <input
                                type="file"
                                accept="image/jpeg,image/jpg,image/png"
                                onChange={(event) => {
                                  setImageUpload(event.target.files[0]);
                                  values.picture = imageUrls;
                                }}
                              />
                            </Box>
                            <Button
                              mt={2}
                              width={{ base: "100%", md: "200px" }}
                              onClick={uploadFile}
                            >
                              Upload Image
                            </Button>
                          </FormControl>
                        </Flex>
                        <Flex width="100%">
                          <FormControl width="50%" mr={2}>
                            <FormLabel>First Name</FormLabel>
                            <Input
                              name="firstName"
                              value={values.firstName}
                              type="text"
                              onChange={handleChange}
                            />
                          </FormControl>
                          <FormControl width="50%">
                            <FormLabel>Last Name</FormLabel>
                            <Input
                              name="lastName"
                              type="text"
                              value={values.lastName}
                              onChange={handleChange}
                            />
                          </FormControl>
                        </Flex>
                        <Flex width="100%">
                          <FormControl width="50%" mr={2}>
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Field
                              as={Input}
                              id="email"
                              name="email"
                              type="email"
                              variant="outline"
                            />
                          </FormControl>
                          <FormControl width="50%">
                            <FormLabel>Experience</FormLabel>
                            <Input
                              type="text"
                              name="experience"
                              value={values.experience}
                              onChange={handleChange}
                              min={"1"}
                              max={"10"}
                            />
                          </FormControl>
                        </Flex>
                        <Flex width="100%">
                          <FormControl width="50%" mr={2}>
                            <FormLabel>Specialization </FormLabel>
                            <Field name="specialization">
                              {({ field }) => (
                                <Select {...field}>
                                  <option value="none">
                                    Select Specialization Field
                                  </option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                </Select>
                              )}
                            </Field>
                          </FormControl>
                          <FormControl width={"50%"}>
                            <FormLabel>Gender</FormLabel>
                            <Field name="gender">
                              {({ field }) => (
                                <Select {...field}>
                                  <option value="none">Select a Gender</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Female">Other</option>
                                </Select>
                              )}
                            </Field>
                          </FormControl>
                        </Flex>
                        <FormControl>
                          <FormLabel>Date of Birth</FormLabel>
                          <DatePicker
                          selected={values.Dateofbirth}
                          dateFormat="MMMM d, yyyy"
                          className="form-control"
                          name="Dateofbirth"
                          onChange={(date) =>
                            setFieldValue(
                              "Dateofbirth",
                              date
                            )
                          }
                        />
                        </FormControl>
                      </Stack>
                    </GridItem>
                    <GridItem marginLeft={"1%"}>
                      <Box maxW="lg">
                        <Stack ml="3" spacing="3">
                          <Text
                            fontSize="20"
                            style={{
                              textAlign: "left",
                              fontWeight: "600",
                              marginTop: "55%",
                              color: "#2D3748",
                            }}
                          >
                            Working Sechedule
                          </Text>

                          <FormControl style={{ marginTop: "7%" }}>
                            <FormLabel>Start Time</FormLabel>
                            <Input
                              placeholder="Select Date and Time"
                              size="md"
                              type="datetime-local"
                              name="Start_DateTime"
                              onChange={handleChange}
                              value={values.Start_DateTime}
                            />
                          </FormControl>
                          <FormControl>
                            <FormLabel>Close Time</FormLabel>
                            <Input
                              placeholder="Select Date and Time"
                              size="md"
                              type="datetime-local"
                              name="End_DateTime"
                              onChange={handleChange}
                              value={values.End_DateTime}
                            />
                          </FormControl>
                          <FormControl
                            isInvalid={
                              errors.SessionCharges && touched.SessionCharges
                            }
                          >
                            <FormLabel htmlFor="age">Session Charges</FormLabel>
                            <Input
                              type="text"
                              name="SessionCharges"
                              value={values.SessionCharges}
                              onChange={handleChange}
                              min={"1"}
                              max={"10"}
                            />
                            <FormErrorMessage>
                              {errors.SessionCharges}
                            </FormErrorMessage>
                          </FormControl>
                          <Button
                            type="submit"
                            backgroundColor="#2D3748"
                            color="white"
                            style={{ marginTop: "10%" }}
                            width="full"
                            borderRadius="10px"
                          >
                            Save
                          </Button>
                        </Stack>
                      </Box>
                    </GridItem>
                    <GridItem>
                      <Stack ml="3" spacing="5" justifyContent="space-between">
                        <Text
                          fontSize="30"
                          style={{
                            textAlign: "left",
                            fontWeight: "bolder",
                            color: "#2D3748",
                            marginTop: "55%",
                          }}
                        >
                          Account Settings
                        </Text>
                        <Modals/>
                      </Stack>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Settings;
