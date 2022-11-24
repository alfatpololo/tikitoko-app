import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

import mensuit from "../../assets/mensuit.png";
import icStar from "../../assets/icStar.svg";
import icCardTshirt from "../../assets/icCatTshirt.svg";
import icCardShorts from "../../assets/icCardShorts.svg";
import icCardJacket from "../../assets/icCardJacket.svg";
import icCardPants from "../../assets/icCardPants.svg";
import icCardShoes from "../../assets/icCardShoes.svg";
import icCardpromo1 from "../../assets/promoone.png";
import icCardpromo2 from "../../assets/promotwo.png";

import CardProduct from "../../component/module/cardProduct";
import Navbar from "../../component/module/navbar";
import NavbarLogin from "../../component/module/navbarLogin";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./test.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import axios from "axios";

const Home = () => {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/v1/category`)
  //     .then((response) => {
  //       console.log(response.data.data)
  //       setData(response.data.data)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }, [])

  return (
    <>
      {localStorage.token ? <NavbarLogin /> : <Navbar />}

      {/* <!-- Modal --> */}
      {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Filter</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
              <button type="button" className="btn btn-primary">Apply</button>
            </div>
          </div>
        </div>
      </div> */}
      <section className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 g-0">
              <div className={`d-flex flex-row py-5 ${styles.topSwiper}`}>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                    // margin: "1500px",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    {" "}
                    <Link to={`/category`}>
                      {" "}
                      <img src={icCardpromo1} alt="icCard" />{" "}
                    </Link>{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Link to={`/category`}>
                      {" "}
                      <img src={icCardpromo2} alt="icCard" />{" "}
                    </Link>{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Link to={`/category`}>
                      {" "}
                      <img src={icCardpromo1} alt="icCard" />{" "}
                    </Link>{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Link to={`/category`}>
                      {" "}
                      <img src={icCardpromo2} alt="icCard" />{" "}
                    </Link>{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Link to={`/category`}>
                      {" "}
                      <img src={icCardpromo1} alt="icCard" />{" "}
                    </Link>{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Link to={`/category`}>
                      {" "}
                      <img src={icCardpromo2} alt="icCard" />{" "}
                    </Link>{" "}
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 g-0">
              <div className={`d-flex flex-column ${styles.categorySwiper}`}>
                <p className={styles.textTitlemain}> Category </p>
                <p className={styles.textSubmain}>
                  What are you currently looking for
                </p>

                <Swiper
                  slidesPerView={5}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                    // margin: "1500px",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {/* {
                    data.map((item, index) => (
                      <div key={index}> */}
                  <SwiperSlide>
                    {" "}
                    <Link to={`/v1/category/2`}>
                      {" "}
                      <img src={icCardTshirt} alt="icCard" />{" "}
                    </Link>{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Link to={`/v1/category/6`}>
                      {" "}
                      <img src={icCardShorts} alt="icCard" />{" "}
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Link to={`/v1/category/5`}>
                      {" "}
                      <img src={icCardJacket} alt="icCard" />{" "}
                    </Link>{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Link to={`/v1/category/3`}>
                      {" "}
                      <img src={icCardPants} alt="icCard" />{" "}
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Link to={`/v1/category/4`}>
                      {" "}
                      <img src={icCardShoes} alt="icCard" />{" "}
                    </Link>
                  </SwiperSlide>
                  {/* </div>
                    ))
                  } */}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 g-0">
              <div className={`d-flex flex-column mt-5 ${styles.newSide}`}>
                <p className={styles.textTitlemain}> New </p>
                <p className={styles.textSubmain}>
                  You’ve never seen it before!
                </p>
                {/* {JSON.stringify(data)} */}

                <CardProduct />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 g-0">
              <div className={`d-flex flex-column mt-5 ${styles.popularSide}`}>
                <p className={styles.textTitlemain}> Popular </p>
                <p className={styles.textSubmain}>
                  Find clothes that are trending recently
                </p>

                <CardProduct />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
