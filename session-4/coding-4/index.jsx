import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./icons/Chef in theHat (3).png";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - restaurants List
                    - restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// JSX? React.createElement => Object =>Html(DOM) //react element /

const Title = () => (
  <div className="brand">
    <a href="/">
      <img className="logo" src={Logo} alt="logo" />
    </a>
  </div>
);

// Functional Component

const HeaderComponent = function () {
  // Normal function
  return (
    <div className="header">
      <Title />
      <div className="Nav-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// config Driven Ui

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "11479",
      name: "Burger King",
      uuid: "9db0490b-c551-496a-a354-bce98bf246e9",
      city: "8",
      area: "Thousand Lights",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "zggqzcw1muhht6tkwuba",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 56,
      minDeliveryTime: 55,
      maxDeliveryTime: 65,
      slaString: "55-65 MINS",
      lastMileTravel: 4,
      slugs: {
        restaurant: "burger-king-express-avenue-royapettah",
        city: "chennai",
      },
      cityState: "8",
      address:
        "Express Avenue, Gate 2 (or) 6, 3rd floor - food court, Club House Road, Royapettah, Chennai",
      locality: "Express Avenue",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "11479",
        deliveryTime: 56,
        minDeliveryTime: 55,
        maxDeliveryTime: 65,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "23742",
      name: "McDonald's",
      uuid: "8cc604e4-1838-4911-b16e-186d52c7281f",
      city: "8",
      area: "Kilpauk",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "0e8f93a56b93e43d7627c2c21bc1106c",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 4.400000095367432,
      slugs: {
        restaurant: "mc-donalds-kilpauk-kilpauk",
        city: "chennai",
      },
      cityState: "8",
      address:
        "Hard castle Restaurants Pvt Ltd., Kilpauk-Chennai, Om Sakthi plaza, 226, Kilpauk Garden Road, Kilpauk, Chennai- 600 010.",
      locality: "Chennai Kilpauk",
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "23742",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 4.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "32920",
      name: "Ratna Cafe (Estd.1948)",
      uuid: "e67cecaf-9b65-409c-bc3c-7255f303552c",
      city: "8",
      area: "Mylapore",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "haprwgqwwkmt7igybczb",
      cuisines: ["South Indian", "Indian", "North Indian"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 58,
      minDeliveryTime: 55,
      maxDeliveryTime: 65,
      slaString: "55-65 MINS",
      lastMileTravel: 7.199999809265137,
      slugs: {
        restaurant: "ratna-cafe-south-mada-street-mylapore",
        city: "chennai",
      },
      cityState: "8",
      address: "17th,South Mada Street,Chennai",
      locality: "South Mada Street",
      parentId: 167537,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5876901~p=1~eid=00000186-176f-b807-031d-8cfe004e0123",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "32920",
        deliveryTime: 58,
        minDeliveryTime: 55,
        maxDeliveryTime: 65,
        lastMileTravel: 7.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.4",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "240435",
      name: "Hungsters",
      uuid: "1012176c-d29e-4931-8d78-c292c229b0d0",
      city: "8",
      area: "Kilpauk",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "umbclg5lqcgosy3uxkew",
      cuisines: ["Jain", "North Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 4,
      slugs: {
        restaurant: "hungsters-annanagar-annanagar",
        city: "chennai",
      },
      cityState: "8",
      address:
        "Old no- 11, Landons road, Kilpauk, Opposite to Landon's tower appartment, Kilpauk Chennai",
      locality: "Landons road",
      parentId: 17154,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "240435",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "594211",
      name: "KFC",
      uuid: "a1405f33-e92f-4fb4-af3e-ac73535b2a05",
      city: "8",
      area: "Chennai Central",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: "kfc-chennai-central-purasawalkam",
        city: "chennai",
      },
      cityState: "8",
      address:
        "Sapphire Foods India Ltd. , Chennai Central Railway Station, EVR Periyar Salai, Park Town, Chennai 600003 Tamil Nadu",
      locality: "EVR Periyar Salai",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "594211",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "14096",
      name: "Sangeetha Veg Restaurant",
      uuid: "b4007e33-4927-4ec6-b6dd-6ddb76a14df4",
      city: "8",
      area: "Egmore",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "oodghmivnc6bxnbrvzzw",
      cuisines: ["North Indian", "Chinese", "South Indian"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 2,
      slugs: {
        restaurant: "sangeetha-veg-restaurant-egmore-egmore",
        city: "chennai",
      },
      cityState: "8",
      address:
        "Shop No: 21, Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu 600008",
      locality: "Gandhi Irwin Rd",
      parentId: 1260,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "14096",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "37629",
      name: "Shree Mithai",
      uuid: "5f2df2a0-c074-4419-8e13-99ca142b266a",
      city: "8",
      area: "Chetpet",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "cxmaeqlyleysefcdx9nk",
      cuisines: ["Desserts", "Street Food", "Chaat"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 3.9000000953674316,
      slugs: {
        restaurant: "shree-mithai-chetpet-egmore",
        city: "chennai",
      },
      cityState: "8",
      address: "18, Dr T.V Road, Chetpet, Chennai - 600031",
      locality: "Dr Tv Road",
      parentId: 6988,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "37629",
        deliveryTime: 39,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 3.9000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 1000,
      new: false,
    },

    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "421198",
      name: "KAKADA RAMPRASAD",
      uuid: "890da58b-20d3-4b8f-ae37-459d45dd2838",
      city: "8",
      area: "Sowcarpet",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "eyfung1qwm35weq4uapt",
      cuisines: ["North Indian", "Mexican", "Tandoor"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 2.700000047683716,
      slugs: {
        restaurant: "kakada-ramprasad-george-town-george-town",
        city: "chennai",
      },
      cityState: "8",
      address:
        "348, 343, Mint St, Sowcarpet, George Town, Chennai, Tamil Nadu 600001",
      locality: "George Town",
      parentId: 17824,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5828603~p=25~eid=00000186-176f-b807-031d-8d06004e190d",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "421198",
        deliveryTime: 38,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 2.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.4",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "34335",
      name: "Pizza Hut",
      uuid: "b79cf619-684e-44fd-a177-b7eda35ca178",
      city: "8",
      area: "Thousand Lights",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "fl9oeg5vuhjyb0jcxq8o",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 50,
      minDeliveryTime: 45,
      maxDeliveryTime: 55,
      slaString: "45-55 MINS",
      lastMileTravel: 3.9000000953674316,
      slugs: {
        restaurant: "pizza-hut-royapettah-royapettah",
        city: "chennai",
      },
      cityState: "8",
      address:
        "49 & 50L, 3rd Flr, Express Avenue, Whites Rd, Royapettah, Chennai, Tamil Nadu 600014",
      locality: "Royapettah",
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "34335",
        deliveryTime: 50,
        minDeliveryTime: 45,
        maxDeliveryTime: 55,
        lastMileTravel: 3.9000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "49823",
      name: "Hot Breads",
      uuid: "c0e7a85c-0c7d-4ddd-872f-d7f36e90bc92",
      city: "8",
      area: "Garden Road",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "vvhlzqi99mo6otsldim4",
      cuisines: ["Bakery"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 4.300000190734863,
      slugs: {
        restaurant: "hot-breads-kilpauk-kilpauk",
        city: "chennai",
      },
      cityState: "8",
      address: "475, Kilpauk Garden Road, Kilpauk, Chennai",
      locality: "Garden Road",
      parentId: 470,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5891911~p=16~eid=00000186-176f-b807-031d-8d03004e1013",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "49823",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 4.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.6",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "54852",
      name: "SS Hyderabad Briyani",
      uuid: "b7c975f8-95f3-4f95-921e-c85464c55d20",
      city: "8",
      area: "George Town",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "bwkfac2r3bpphgfm7rh9",
      cuisines: ["Biryani", "North Indian", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "ss-hyderabad-biryani-parrys-george-town",
        city: "chennai",
      },
      cityState: "8",
      address:
        "154/319, Linghi Chetty Street, Next To Andhra Bank Zonal Office, Parrys, Chennai",
      locality: "Parrys Corner",
      parentId: 4824,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5845575~p=13~eid=00000186-176f-b807-031d-8d02004e0d2a",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "54852",
        deliveryTime: 37,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.4",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "36018",
      name: "Zaitoon",
      uuid: "c14410f6-257b-445a-8c16-daa952cad60e",
      city: "8",
      area: "Thousand Lights",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "ac1staxtetolkvynv2ot",
      cuisines: [
        "Biryani",
        "Juices",
        "North Indian",
        "Chinese",
        "Arabian",
        "Mughlai",
        "Kebabs",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 47,
      minDeliveryTime: 45,
      maxDeliveryTime: 55,
      slaString: "45-55 MINS",
      lastMileTravel: 4.300000190734863,
      slugs: {
        restaurant: "zaitoon-nungambakkam-nungambakkam",
        city: "chennai",
      },
      cityState: "8",
      address:
        "13/33, Shafee Mohammed Road, Opposite to Apollo Children's Hospital, Thousand Lights, Nungabakkam, Chennai, Tamil Nadu 600034, India",
      locality: "Nungambakkam",
      parentId: 4555,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "36018",
        deliveryTime: 47,
        minDeliveryTime: 45,
        maxDeliveryTime: 55,
        lastMileTravel: 4.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "239924",
      name: "Anburaj Resturant Briyani & Fast Food",
      uuid: "f5222279-a135-4cba-b623-4e8218b343e2",
      city: "8",
      area: "C B Ramasamy Road",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "hdatwmjnajz1htglkw7o",
      cuisines: ["Biryani", "North Indian"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 47,
      minDeliveryTime: 45,
      maxDeliveryTime: 55,
      slaString: "45-55 MINS",
      lastMileTravel: 7.599999904632568,
      slugs: {
        restaurant: "anburaj-resturant-briyani-&-fast-food-t-nagar-t-nagar",
        city: "chennai",
      },
      cityState: "8",
      address:
        "D. NO. 77/8, C. B. RAMASAMY ROAD, ALWARPET, District - Chennai, STATE - Tamil Nadu-600018",
      locality: "T Nagar",
      parentId: 33059,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "239924",
        deliveryTime: 47,
        minDeliveryTime: 45,
        maxDeliveryTime: 55,
        lastMileTravel: 7.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "16543",
      name: "A2B - Adyar Ananda Bhavan",
      uuid: "fd6288de-f85a-487e-b792-499d038505af",
      city: "8",
      area: "Purasaiwakkam",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "dsliyhlbtgtnnuxyrpsf",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 2.4000000953674316,
      slugs: {
        restaurant: "a2b-veg-purasawalkam-purasawalkam",
        city: "chennai",
      },
      cityState: "8",
      address: "50, 51 & 52, Purasai High Road, Purasavakkam, Chennai",
      locality: "Purasai High Road",
      parentId: 22,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹199",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹199 | Use code FLAT125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYWEEKENDS",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹199 | Use code FLAT125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5851583~p=22~eid=00000186-176f-b807-031d-8d05004e166a",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "16543",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 2.4000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.5",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "144698",
      name: "Halal Kattu Biryani",
      uuid: "31d61f5b-ebc8-4094-9adc-a553901ae5a7",
      city: "8",
      area: "Arumbakkam",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "p6w2bhhag5nym91k1wn8",
      cuisines: ["Biryani", "Indian", "Chinese"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 48,
      minDeliveryTime: 48,
      maxDeliveryTime: 48,
      slaString: "48 MINS",
      lastMileTravel: 7,
      slugs: {
        restaurant: "halal-kattu-biryani-arumbakkam-arumbakkam",
        city: "chennai",
      },
      cityState: "8",
      address: "516, NSK Nagar, 3rd Avenue, Arumbakkam, Chennai",
      locality: "Nsk Nagar",
      parentId: 17364,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "144698",
        deliveryTime: 48,
        minDeliveryTime: 48,
        maxDeliveryTime: 48,
        lastMileTravel: 7,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "30103",
      name: "Writer's Cafe",
      uuid: "f46daac4-e3b5-4a54-b14c-6ffdc0bed1c8",
      city: "8",
      area: "Peter'S Road",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "nw8e3culpw4dthobtebm",
      cuisines: ["Desserts", "Italian", "Bakery", "Pizzas"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 48,
      minDeliveryTime: 45,
      maxDeliveryTime: 55,
      slaString: "45-55 MINS",
      lastMileTravel: 5.599999904632568,
      slugs: {
        restaurant: "writers-cafe-gopalapuram-royapettah",
        city: "chennai",
      },
      cityState: "8",
      address:
        "98, Peter's Road, Behind Philip's Service Centre, Gopalapuram, Chennai",
      locality: "Peter'S Road",
      parentId: 5989,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5891884~p=28~eid=00000186-176f-b807-031d-8d07004e1c26",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "30103",
        deliveryTime: 48,
        minDeliveryTime: 45,
        maxDeliveryTime: 55,
        lastMileTravel: 5.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.4",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2 style={{ fontSize: "15px" }}>{name}</h2>
      <h3 className="cuisines-text">{cuisines.join(",")}</h3>
      <span>{avgRating} ★</span>
      <span>||</span>
      <span>{lastMileTravelString}</span>
    </div>
  );
};

const Body = () => {
  return (
    <div className="rest-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h3>Footer</h3>;
};

const Applayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

// passing a ReactElement inside root
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing  a Functional component inside root
//root.render(<PrintElements />);
root.render(<Applayout />);

/***

 * If we writ this it gives error Jsx has only one parent and one root
 * by using this it will create a new div and not inside our root div.
//const jsx = (
//  <h1>jsx</h1>
//  <h1>second jsx</h1>
//)
* Inside div it gets work
const jsx = (
// <div>
//  <h1>jsx</h1>
//  <h1>second jsx</h1>
// </div>
//)

* Inside React.Fragment it gets work & put inside our root div not a separate div.

//React.Fragment 
const jsx = (
// <React.Fragment> *** insted ** <>
//  <h1>jsx</h1>
//  <h1>second jsx</h1>
// </React.Fragment> *** insted ** </>
//)
*

 */

// config Driven Ui

/*
const RestaurantCard = ({ restaurant }) => {
   destructuring props.
  const RestaurantCard = (props) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          restaurant.data?.cloudinaryImageId
        }
      />
      <h2>{restaurant.data?.name}</h2>
      <h3>{restaurant.data?.cuisines.join(",")}</h3>
      <h4>{restaurant.data?.avgRating}stars</h4>
    </div>
  );
};
*/

/*
**const config = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "No delivery charge",
      },
    ],
    cards:[] // if no offers backend not send data to us kept it empty.
  },
  {
    type: "restarants",
    cards: [
      {
        name: "kfc",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
        cusines: ["Burgers", "Americans"],
        ratings: "4.0",
      },
      {
        name: "Burger King",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qnfkbrlvqqyfvygbfihj",
        cusines: ["Burgers", "Americans"],
        ratings: "4.2",
      },
    ],
  },
];
***/

/*
const kfc = {
  name: "kfc",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
  cusines: ["Burgers", "Americans"],
  ratings: "4.0",
};

const restaurantCard = () => {
  return (
    <div className="card">
      <img src={kfc.image} />
      <h2>{kfc.name}</h2>
      To Have , between in cusiens
      <h3>{kfc.cusines.join(",")}</h3>
      <h4>{kfc.ratings}stars</h4>
    </div>
  );
};
**/
