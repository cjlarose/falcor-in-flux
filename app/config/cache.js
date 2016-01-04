const cache = {
  productsById: {
    "101": {
      name: "LG 42LF5800",
      features: [
        { name: "inches", likes: 0, desc: "42" },
        { name: "refreshrate", likes: 0, desc: "400" }
      ]
    },
    "102": {
      name: "Panasonic TX-60AS650E",
      features: [
        { name: "inches", likes: 0, desc: "60" },
        { name: "refreshrate", likes: 0, desc: "1200" }
      ]
    },
    "103": {
      name: "Samsung UE48JS9000TXXC",
      features: [
        { name: "inches", likes: 0, desc: "48" },
        { name: "refreshrate", likes: 0, desc: "2000" }
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
