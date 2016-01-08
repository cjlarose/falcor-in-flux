const cache = {
  productsById: {
    "101": {
      name: "LG 42LF5800",
      features: [
        { name: "inches", likes: 2, liked: false, desc: "42" },
        { name: "refreshrate", likes: 0, liked: false, desc: "400" }
      ]
    },
    "102": {
      name: "Panasonic TX-60AS650E",
      features: [
        { name: "inches", likes: 8, liked: false, desc: "60" },
        { name: "refreshrate", likes: 3 , liked: false, desc: "1200" }
      ]
    },
    "103": {
      name: "Samsung UE48JS9000TXXC",
      features: [
        { name: "inches", likes: 5, liked: false, desc: "48" },
        { name: "refreshrate", likes: 11, liked: false, desc: "2000" }
      ]
    }
  },
  products: [
    { $type: "ref", value: ["productsById", 101] },
    { $type: "ref", value: ["productsById", 102] },
    { $type: "ref", value: ["productsById", 103] }
  ],
};

export default cache;
