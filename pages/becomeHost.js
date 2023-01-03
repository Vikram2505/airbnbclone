import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import data from "../utility/homes.json";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { registerHome } from "../store/slices/homeSlice.js";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function becomeHost() {
  const [thisPlaceOffers, setThisPlaceOffers] = useState([]);
  const [homeImages, setHomeImages] = useState([]);
  const [ownerImage, setOwnerImage] = useState([]);
  const router = useRouter();
  // const [imageArray, setImageArray] = useState({image: []});

  const { error, loading, success } = useSelector((state) => ({
    ...state.AllHomes,
  }));

  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  // const RegisterHomeSchema = Yup.object().shape({
  //   home_name: Yup.string().required("*This field is required"),
  //   owner_name: Yup.string().required("*This field is required"),
  //   owner_email: Yup.string()
  //     .email("Please enter a valid email")
  //     .required("*This field is required"),
  //   owner_phoneNo: Yup.number()
  //     .min(10, "Please enter a valid phone no.")
  //     .required("*This field is required"),
  //   home_desc: Yup.string().required("*This field is required"),
  //   // home_image: Yup.string().required(),
  //   // owner_image: Yup.string().required(),
  //   price: Yup.number().required("*This field is required"),
  //   // location: Yup.string().required("*This field is required"),
  //   // home_city: Yup.string().required("*This field is required"),
  //   // home_state: Yup.string().required("*This field is required"),
  //   // home_zipCode: Yup.number().required("*This field is required"),
  //   // latitude: Yup.number().required("*This field is required"),
  //   // longitude: Yup.number().required("*This field is required"),
  //   // total_guests: Yup.number().required("*This field is required"),
  //   // total_beds: Yup.number().required("*This field is required"),
  //   // total_bedroom: Yup.number().required("*This field is required"),
  //   // total_bathroom: Yup.number().required("*This field is required"),
  //   // rating: Yup.number().required("*This field is required"),
  //   // this_place_offers: Yup.array().required("*This field is required"),
  //   // property_type: Yup.string().required("*This field is required"),
  //   // type_of_place: Yup.string().required("*This field is required"),
  // });

  // This place offers checkbox store value
  const checkboxValue = (event) => {
    let placeOffer = [...thisPlaceOffers, event.target.name];
    if (thisPlaceOffers.includes(event.target.name)) {
      placeOffer = placeOffer.filter((item) => item !== event.target.name);
    }
    setThisPlaceOffers(placeOffer);
    RegisterHomeFormik.setFieldValue("this_place_offers", placeOffer);
  };

  const RegisterHomeFormik = useFormik({
    initialValues: {
      home_name: "",
      owner_name: "",
      owner_email: "",
      owner_phoneNo: "",
      home_desc: "",
      home_image: "",
      owner_image: "",
      location: "",
      price: "",
      home_city: "",
      home_state: "",
      home_zipCode: "",
      latitude: "",
      longitude: "",
      total_guests: "",
      total_beds: "",
      total_bedroom: "",
      total_bathroom: "",
      rating: "",
      this_place_offers: "",
      property_type: "",
      type_of_place: "",
    },
    // validationSchema: RegisterHomeSchema,
    onSubmit: (values) => {
      dispatch(registerHome(values));

      setToggle((e) => !e);
    },
  });

  // multiple image upload function
  const uploadImageHome = (event, type) => {
    if (type === "Home Image") {
      let selectedFiles = event.target.files;
      let selectedFilesArray = Array.from(selectedFiles);
      // console.log(selectedFilesArray, "selected file array");
      let imagesArray = selectedFilesArray.map((files) => {
        return URL.createObjectURL(files);
      });
      setHomeImages((previousImages) => previousImages.concat(imagesArray));
      RegisterHomeFormik.setFieldValue("home_image", selectedFilesArray);
    } else if (type === "Owner Image") {
      let selectedFiles = event.target.files;
      const selectedFilesArray = Array.from(selectedFiles);
      let imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
      setOwnerImage(imagesArray);
      RegisterHomeFormik.setFieldValue("owner_image", selectedFiles[0]);
    }
  };

  // Delete image uploaded
  function deleteHandler(image) {
    setHomeImages(homeImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position) {
    RegisterHomeFormik.setFieldValue("latitude", position.coords.latitude);
    RegisterHomeFormik.setFieldValue("longitude", position.coords.longitude);
  }
  console.log(thisPlaceOffers);

  useEffect(() => {
    getLocation();
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
      router.push("/");
      RegisterHomeFormik.handleReset();
      homeImages.length = 0;
      ownerImage.length = 0;
      while (thisPlaceOffers.length > 0) {
        thisPlaceOffers.pop();
      }
    }
  }, [error, success, toggle]);

  return (
    <React.Fragment>
      <Head>
        <title>Airbnb clone</title>
        <link
          rel="icon"
          href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
        />
      </Head>
      <Header />
      <div className="relative mt-28">
        <div className="md:grid">
          <div className="mt-5 px-6 md:px-14 lg:px-35 col-span-2">
            <h1 className="text-lg lg:text-4xl font-semibold mb-5">
              Register your Residance
            </h1>
            <form onSubmit={RegisterHomeFormik.handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="homeName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Home Name
                      </label>
                      <input
                        type="text"
                        name="home_name"
                        id="homeName"
                        placeholder="Home Name"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.home_name}
                        autoComplete="given-name"
                        className="mt-1 py-2 px-3 block w-full rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                      />
                      {RegisterHomeFormik.errors.home_name &&
                      RegisterHomeFormik.touched.home_name ? (
                        <div className="text-red-500">
                          {RegisterHomeFormik.errors.home_name}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="ownerName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Owner Name
                      </label>
                      <input
                        type="text"
                        name="owner_name"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.owner_name}
                        id="ownerName"
                        placeholder="Home Name"
                        autoComplete="given-name"
                        className="mt-1 py-2 px-3 block w-full rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                      />
                      {RegisterHomeFormik.errors.owner_name &&
                      RegisterHomeFormik.touched.owner_name ? (
                        <div className="text-red-500">
                          {RegisterHomeFormik.errors.owner_name}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="ownerEmail"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Owner Email
                      </label>
                      <input
                        type="email"
                        name="owner_email"
                        id="ownerEmail"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.owner_email}
                        placeholder="Owner email address"
                        autoComplete="given-name"
                        className="mt-1 py-2 px-3 block w-full rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                      />
                      {RegisterHomeFormik.errors.owner_email &&
                      RegisterHomeFormik.touched.owner_email ? (
                        <div className="text-red-500">
                          {RegisterHomeFormik.errors.owner_email}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phoneNo"
                        className="block mb-1 text-sm font-medium text-gray-700"
                      >
                        Owner Phone No.
                      </label>
                      <input
                        type="text"
                        name="owner_phoneNo"
                        id="phoneNo"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.owner_phoneNo}
                        placeholder="Enter the home owner phoneNo"
                        autoComplete="given-name"
                        className="mt-1 py-2 px-3 block w-full rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                      />
                      {RegisterHomeFormik.errors.owner_phoneNo &&
                      RegisterHomeFormik.touched.owner_phoneNo ? (
                        <div className="text-red-500">
                          {RegisterHomeFormik.errors.owner_phoneNo}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="homeDescription"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Home Description
                      </label>
                      <textarea
                        type="text"
                        name="home_desc"
                        id="homeDescription"
                        placeholder="Home Description"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.home_desc}
                        autoComplete="family-name"
                        className="mt-1 py-2 px-3 block w-full resize-none rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                      />
                      {RegisterHomeFormik.errors.home_desc &&
                      RegisterHomeFormik.touched.home_desc ? (
                        <div className="text-red-500">
                          {RegisterHomeFormik.errors.home_desc}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Location of house/Address
                      </label>
                      <input
                        type="text"
                        name="location"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.location}
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 py-2 px-3 block w-full resize-none rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                      />
                      {RegisterHomeFormik.errors.location &&
                      RegisterHomeFormik.touched.location ? (
                        <div className="text-red-500">
                          {RegisterHomeFormik.errors.location}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="home_city"
                        id="city"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.home_city}
                        autoComplete="address-level2"
                        className="mt-1 py-2 px-3 block w-full rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                      />
                      {RegisterHomeFormik.errors.location &&
                      RegisterHomeFormik.touched.location ? (
                        <div className="text-red-500">
                          {RegisterHomeFormik.errors.location}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="homeState"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        name="home_state"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.home_state}
                        id="homeState"
                        autoComplete="address-level1"
                        className="mt-1 py-2 px-3 block w-full resize-none rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                      />
                      {RegisterHomeFormik.errors.home_state &&
                      RegisterHomeFormik.touched.home_state ? (
                        <div className="text-red-500">
                          {RegisterHomeFormik.errors.home_state}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="home_zipCode"
                        id="postal-code"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.home_zipCode}
                        autoComplete="postal-code"
                        className="mt-1 py-2 px-3 block w-full resize-none rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                      />
                      {RegisterHomeFormik.errors.home_zipCode &&
                      RegisterHomeFormik.touched.home_zipCode ? (
                        <div className="text-red-500">
                          {RegisterHomeFormik.errors.home_zipCode}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="priceHome"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price of home
                      </label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        defaultValue={RegisterHomeFormik.values.price}
                        placeholder="Enter the price of home per day"
                        className="mt-1 py-2 px-3 block w-full resize-none rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                      />
                      {RegisterHomeFormik.errors.price &&
                      RegisterHomeFormik.touched.price ? (
                        <div className="text-red-500">
                          {RegisterHomeFormik.errors.price}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="totalBeds"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Total beds
                      </label>
                      <select
                        id="totalBeds"
                        name="total_beds"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.total_beds}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value={"Please select"}>Please select</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="totalBedroom"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Total bedroom
                      </label>
                      <select
                        id="totalBedroom"
                        name="total_bedroom"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.total_bedroom}
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value={"Please select"}>Please select</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="totalBathroom"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Total bathroom
                      </label>
                      <select
                        id="totalBathroom"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.total_bathroom}
                        name="total_bathroom"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value={"Please select"}>Please select</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="propertyType"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Property type
                      </label>
                      <select
                        id="propertyType"
                        name="property_type"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.property_type}
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value={"Please select"}>Please select</option>
                        <option>House</option>
                        <option>Flat</option>
                        <option>Guest house</option>
                        <option>Hotel</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="typeOfPlace"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Type of place will guest have
                      </label>
                      <select
                        id="typeOfPlace"
                        name="type_of_place"
                        autoComplete="country-name"
                        onChange={RegisterHomeFormik.handleChange}
                        onBlur={RegisterHomeFormik.handleBlur}
                        value={RegisterHomeFormik.values.type_of_place}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value={"Please select"}>Please select</option>
                        <option value="Entire place">Entire place</option>
                        <option value={"Private room"}>Private room</option>
                        <option value={"Shared room"}>Shared room</option>
                        <option value={"Farm stay"}>Farm stay</option>
                        <option value={"Hotel room"}>Hotel room</option>
                        <option value={"Flat"}>Flat</option>
                        <option value={"Holiday home"}>Holiday home</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="placeOffers"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        Tell your guests what your place has to offer
                      </label>
                      <div className="grid grid-cols-3 md:grid-cols-4">
                        {data?.data?.facilityOffers.map((item, index) => {
                          return (
                            <div key={index} className="flex">
                              <div className="col-span-2 md:col-span-4 h-5 items-center">
                                <input
                                  id={item.service}
                                  name={item.service}
                                  type="checkbox"
                                  onClick={(event) => checkboxValue(event)}
                                  className="h-4 w-4 ml-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none cursor-pointer"
                                />
                              </div>
                              <div className="ml-1 text-sm">
                                <label
                                  htmlFor={item.service}
                                  className="font-medium cursor-pointer text-gray-700"
                                >
                                  {item.service}
                                </label>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Home images
                      </label>
                      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                          <div className=" text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400 focus:outline-none"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                onChange={(event) =>
                                  uploadImageHome(event, "Home Image")
                                }
                                multiple
                                accept="image/*"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">
                              Upload a file or drag and drop
                            </p>
                          </div>
                          {/* <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 1MB
                          </p> */}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-2">
                        {homeImages.map((item, index) => (
                          <div
                            key={index}
                            className="col-span-2 sm:col-span-2 relative"
                          >
                            <img src={item} className="w-96 mb-2" alt="" />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              onClick={() => deleteHandler(item)}
                              className="absolute right-3 cursor-pointer top-3 w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Owner image
                      </label>
                      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                          <div className="text-sm text-gray-600">
                            <label
                              htmlFor="ownerImage"
                              className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <input
                                id="ownerImage"
                                name="ownerImage"
                                type="file"
                                onChange={(event) =>
                                  uploadImageHome(event, "Owner Image")
                                }
                                className="sr-only"
                              />
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </label>
                            <p className="pl-1">
                              Upload a file or drag and drop
                            </p>
                          </div>
                          {/* <p className="text-xs text-gray-500">
                            Upload minimum 5 pho up to 1MB
                          </p> */}
                        </div>
                      </div>
                      <div className="grid">
                        {ownerImage.length > 0 && (
                          <div className="col-span-4 relative">
                            <img
                              src={ownerImage}
                              className=" w-96 mb-2"
                              alt=""
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-center sm:px-6 mb-2">
                  {loading && (
                    <div className="lds-ellipsis">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  )}
                  {!loading && (
                    <button
                      style={{ height: "38px" }}
                      type="submit"
                      className="inline-flex justify-center w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save your Home
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// export async function getServerSideProps() {

//   const exploreData = await fetch("http://localhost:3000/home/create-home", {
//     method: "POST",
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "multipart/form-data",
//     },
//     body: JSON.stringify(),
//   })
//     .then((res) => {
//       console.log(res, 'response');
//       if (!res.ok) {
//         throw new Error(`This is an HTTP error: The status is ${res.status} `);
//       }
//       return res.json();
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });

//   return {
//     becomeHost: {
//       exploreData,
//     },
//   };
// }
