import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsFilePptFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/image6.jpg";
import ImageSeven from "../../images/image7.jpg";
import "./style.scss";
import { useState } from "react";

const portfolioData = [
    // {
    //     id: 3,
    //     name: "Fiverr",
    //     desc: "From this freelance I already made around $2k+",
    //     image: ImageOne,
    //     link: "https://drive.google.com/file/d/1EgcrsiyO6m5y2THOCFxLCvo7BJOWslEL/view?usp=sharing",
    // },
    {
        id: 3,
        name: "Sertifications",
        desc: "This is a pool of my sertifications",
        image: ImageSeven,
        link: "https://drive.google.com/drive/folders/1Uafb0VkdwfWv8qt4KVvJ_tSIezcjVqSK?usp=sharing",
    },
    // {
    //     id: 2,
    //     name: "Cat Forum Web",
    //     image: ImageTwo,
    //     link: "https://github.com/Zeemyo/cat-forum.git",
    //     desc: "I make this forum kinda like website for all of the cat lovers to sharing about their experience, information, advice and etc to other member of this website ",

    // },
    {
        id: 2,
        name: "Meowrachasite or Cat Custody Web",
        image: ImageThree,
        desc: "I made this website with my partner as an 3nd years student. Made by laravel 8 and integrated with Midtrans for the adoption transaction",
        link: "https://github.com/Zeemyo/Web-meowrachasite",
    },
    {
        id: 2,
        name: "Review Algorithm of Restaurant Web",
        image: ImageFour,
        desc: "This project is not really about building the website, I just need to resolve the algorithm behind this project when I was a 1st year student",
        link: "https://github.com/Zeemyo/restoran_native/tree/master",
    },
    {
        id: 2,
        name: "Query Analyzer Using Django Framework",
        image: ImageFive,
        desc: "This project was about analyzing the complexity and effecient of SQL Queries using Django Framework. Cannot share this project since it's owned by the company",
        link: "https://query-analyzer-zidanamir.carrd.co/",
    },
    {
        id: 2,
        name: "Excel to XML Tax File Converter",
        image: ImageSix,
        desc: "This website project for converting excel files that contains data of taxes and convert it to XML files for taxes reporting and it using XML format and for other things such as to protect data with XML format. Cannot share this project since it's owned by the company",
        link: "https://pelindo-excel-xml-converter.carrd.co/",
    }
];

const filterData = [
    {
        filterId: 1,
        label: "All",
    },
    {
        filterId: 2,
        label: "Developement",
    },
    {
        filterId: 3,
        label: "Design",
    },
];

const Portfolio = () => {
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    function handleHover(index) {
        setHoveredValue(index);
    }

    console.log("====================================");
    console.log(hoveredValue);
    console.log("====================================");

    const filteredItems =
        filteredvalue === 1
            ? portfolioData
            : portfolioData.filter((item) => item.id === filteredvalue);

    console.log(filteredItems);

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsFilePptFill size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {filterData.map((item) => (
                        <li
                            className={item.filterId === filteredvalue ? "active" : ""}
                            onClick={() => handleFilter(item.filterId)}
                            key={item.filterId}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className="portfolio__content__cards">
                    {filteredItems.map((item, index) => (
                        <div
                            className="portfolio__content__cards__item"
                            key={`cardItem${item.name.trim()}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className="portfolio__content__cards__item__img-wrapper">
                                <a>
                                    <img alt="dummy data" src={item.image} />
                                </a>
                            </div>
                            <div className="overlay">
                                {index === hoveredValue && (
                                    <div>
                                        <p>{item.name}</p>
                                        <br></br>
                                        <a>{item.desc}</a>
                                        <Link to={item.link} target="_blank">
                                            <br></br>
                                            <button>Visit</button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Portfolio;