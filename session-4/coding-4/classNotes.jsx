// If we write this it gives error Jsx has only one parent and one root
//by using this it will create a new div and not inside our root div.

//const jsx = (
//  <h1>jsx</h1>
//  <h1>second jsx</h1>
//)

// Inside div it gets work
//const jsx = (
// <div>
//  <h1>jsx</h1>
//  <h1>second jsx</h1>
// </div>
//)

//Inside React.Fragment it gets work & put inside our root it nt render inside a separate div.

//React.Fragment
//const jsx = (
// <React.Fragment> *** insted ** <>
//  <h1>jsx</h1>
//  <h1>second jsx</h1>
// </React.Fragment> *** insted ** </>
//)

// config Driven Ui

/*
# part-1

const kfc = {
  name: "kfc",
  image:
    "https:res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
  cusines: ["Burgers", "Americans"],
  ratings: "4.0",
};

const Body = () => {
  retrun (
    <div>
    <Kfc/>
    </div>
    )
}

*/

/*
# part -2

const kfc = {
  name: "kfc",
  image:"https:res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
  cusines: ["Burgers", "Americans"],
  ratings: "4.0",
};

/ In real world application is like this.⬇️

const RestarauntList = [{
  name: "",
  image:"https:res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
  cusines: ["Burgers", "Americans"],
  ratings: "4.0",
},
{
  name: "",
  image:"https:res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
  cusines: ["Burgers", "Americans"],
  ratings: "4.0",
},
];


const RestaurantCard = () => {
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

const Body = () => {
  retrun ( 
    <div>
    <RestaurantCard/> // it will print the same card multiple times but we want it in Dynamic.
    <RestaurantCard/>
    <RestaurantCard/>
    </div>
    )
}
**/

/*
 # part -3 

/ config Driven UI

* carousel
* restaurant list
* if there is no offer directlty show  restaurant list

 const config = [
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

  const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+  restaurant.data?.cloudinaryImageId } />
      <h2>{restarurantList[0].data?.name}</h2>
      To Have , between in cusiens
      <h3>{restarurantList[0].data?.cusines.join(",")}</h3>
      <h4>{restarurantList[0].data?.ratings}stars</h4>
    </div>
  );
};
 

const Body = () => {
  retrun ( 
    <div>
    <RestaurantCard/> // it will print the same card multiple times but we want it in Dynamic.
    <RestaurantCard/>
    <RestaurantCard/>
    </div>
    )

    
    
}


*/
// by doing this the same data gets prints
/*
  part -4

const RestaurantCard = ({ restaurant }) => {
   destructuring props.
  const RestaurantCard = (props) => {
  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +  restaurant.data?.cloudinaryImageId 
        }
      />
      <h2>{restaurant.data?.name}</h2>
      <h3>{restaurant.data?.cuisines.join(",")}</h3>
      <h4>{restaurant.data?.avgRating}stars</h4>
    </div>
  );
};


*/
