import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "public/1626351396_small.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "public/R.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "public/OIP.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "public/festival-decoration-ideas-at-home.jpg",
      title: "Festival Planning",
    },
    {
      id: 5,
      url: "public/OIP (1).jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "public/wedding-stage-decoration-with-flowers.jpg",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;