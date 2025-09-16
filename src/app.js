import React from "react";
import ReactDOM from "react-dom/client"


const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}



const RestaurantCard=(props)=>{
  const{resData}=props;
  const{name,cuisines,cloudinaryImageId,avgRating,costForTwo,deliveryTime}=resData?.info
  return(
    <div className="res-card">
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{costForTwo}</h3>
      <h3>⭐{avgRating} stars</h3>
    </div>
  )
}

const resList=[  {
                    "info": {
                      "id": "50314",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/2d8c9493-12f6-42fa-84ff-635c0e66094f_50314.JPG",
                      "locality": "DB Road",
                      "areaName": "RS Puram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.4,
                      "parentId": "721",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "15K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-40 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹98"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-ebb67694-af45-452e-ab64-fb44ac290b04"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/pizza-hut-db-road-rs-puram-rest50314",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "604273",
                      "name": "Chinese Wok",
                      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                      "locality": "Gowtham Complex",
                      "areaName": "Sivanadha Colony",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Asian",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "61955",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.2K+",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 4.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "4.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 02:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-ebb67694-af45-452e-ab64-fb44ac290b04"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/chinese-wok-gowtham-complex-sivanadha-colony-rest604273",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "737927",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/41c8f4e8-8579-4742-a5dd-37a224347a7c_737927.JPG",
                      "locality": "Cross cut Road",
                      "areaName": "Gandhipuram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "3.8K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-ebb67694-af45-452e-ab64-fb44ac290b04"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/kfc-cross-cut-road-gandhipuram-rest737927",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "50456",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f73fffdc-9c14-42ed-8477-9a17eccb400a_50456.jpg",
                      "locality": "RS Puram",
                      "areaName": "Ram Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.4,
                      "parentId": "166",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "33K+",
                      "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "2.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-ebb67694-af45-452e-ab64-fb44ac290b04"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/burger-king-rs-puram-ram-nagar-rest50456",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "181141",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/1969e45c-18e8-42fc-b724-9e59741be2d9_181141.JPG",
                      "locality": "Brookefields Mall",
                      "areaName": "RS Puram",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "2233",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "2.6K+",
                      "sla": {
                        "deliveryTime": 57,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-65 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-16 22:45:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-ebb67694-af45-452e-ab64-fb44ac290b04"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/the-belgian-waffle-co-brookefields-mall-rs-puram-rest181141",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "844594",
                      "name": "Starbucks Coffee",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/dc50f4d4-c71b-472e-95c0-31bb37e86a42_844594.JPG",
                      "locality": "Anupperpalayam",
                      "areaName": "Avinashi Road",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Bakery",
                        "Ice Cream"
                      ],
                      "avgRating": 4.4,
                      "parentId": "195515",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "634",
                      "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-16 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-ebb67694-af45-452e-ab64-fb44ac290b04"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/starbucks-coffee-anupperpalayam-avinashi-road-rest844594",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "53543",
                      "name": "Ibaco",
                      "cloudinaryImageId": "sjpkz59jvfdvxzbmjtit",
                      "locality": "Brookefields Mall",
                      "areaName": "RS Puram",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "3481",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.2K+",
                      "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-16 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-ebb67694-af45-452e-ab64-fb44ac290b04"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/ibaco-brookefields-mall-rs-puram-rest53543",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "756256",
                      "name": "Olio - The Wood Fired Pizzeria",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/d9ebedce-b4ed-4d28-a1a5-07efe42693da_756256.JPG",
                      "locality": "Peelamedu",
                      "areaName": "PPS Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Fast Food",
                        "Snacks",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "11633",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "806",
                      "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 6.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "6.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-ebb67694-af45-452e-ab64-fb44ac290b04"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/olio-the-wood-fired-pizzeria-peelamedu-pps-colony-rest756256",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "53332",
                      "name": "Sree Aksshayam",
                      "cloudinaryImageId": "bc2eb057b8474efce6932bb4335d950e",
                      "locality": "Peelamedu",
                      "areaName": "Peelamedu",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "South Indian",
                        "Chinese"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "671577",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "97K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-16 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "12K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-ebb67694-af45-452e-ab64-fb44ac290b04"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/sree-aksshayam-peelamedu-rest53332",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "63464",
                      "name": "HMR - Hotel Muthu Rowther",
                      "cloudinaryImageId": "cddf4b783435fedc281d1262ae9b92c3",
                      "locality": "Ukkadam",
                      "areaName": "Town Hall",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Indian",
                        "Chinese",
                        "South Indian"
                      ],
                      "avgRating": 4.4,
                      "parentId": "18000",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "39K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-40 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-16 23:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "3.2K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-ebb67694-af45-452e-ab64-fb44ac290b04"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/hmr-hotel-muthu-rowther-ukkadam-town-hall-rest63464",
                      "type": "WEBLINK"
                    }
                  }]

const Body=()=>{
  return(
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
       {
        resList.map((restaurant)=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
       }
      </div>
    </div>
  )
}

const AppLayout=()=>{
  return(
    <div className="app">
      <Header/>
      <Body/>

    </div>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)