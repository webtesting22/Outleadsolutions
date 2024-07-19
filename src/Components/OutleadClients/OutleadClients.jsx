import React from "react";
import "./OutleadClient.css"
const OutleadClients = () => {

    const clientPics = [
        {
            icons: <i class='bx bxs-user-circle'></i>
        },
        {
            icons: <i class='bx bxs-user-circle'></i>
        },
        {
            icons: <i class='bx bxs-user-circle'></i>
        },
        {
            icons: <i class='bx bxs-user-circle'></i>
        },
        {
            icons: <i class='bx bxs-user-circle'></i>
        },
    ]

    const LeftsideCards = [
        {
            CardImage: "",
            CardHeading: "David Jackson",
            CardDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat labore expedita officia quam, pariatur id exercitationem non sed nihil ipsam?"
        },
        {
            CardImage: "",
            CardHeading: "David Jackson",
            CardDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat labore expedita officia quam, pariatur id exercitationem non sed nihil ipsam?"
        },
        {
            CardImage: "",
            CardHeading: "David Jackson",
            CardDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat labore expedita officia quam, pariatur id exercitationem non sed nihil ipsam?"
        },
    ]
    const rightsideCards = [
        {
            CardImage: "",
            CardHeading: "David Jackson",
            CardDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat labore expedita officia quam, pariatur id exercitationem non sed nihil ipsam?"
        },
        {
            CardImage: "",
            CardHeading: "David Jackson",
            CardDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat labore expedita officia quam, pariatur id exercitationem non sed nihil ipsam?"
        },
    ]
    return (
        <>
            <section id="OutleadClientsContainer">
                <div className="Top">
                    <div className="Sectionheading">
                        <h1>From Happy Clients to Happy Colleagues</h1>
                        <p>Dive into real-life experiences of those who benefit from working with us.</p>
                    </div>
                </div>
                <div className="AnimatedLine">
                    <div></div>
                    <div></div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                        <p>Welcomed over 100+ amazing people!</p>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            {clientPics.map((item, index) => (
                                <div key={index} className="icons">
                                    {item.icons}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <div className="ClientCards ">
                        <div className="leftSideRow">
                            {LeftsideCards.map((item, index) => (
                                <div className="ClientCard  ${currentTheme.className}" key={index}>
                                    <div className="TopBar">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <i class='bx bxs-user-circle'></i>
                                            <h4>{item.CardHeading}</h4>
                                        </div>
                                        <div>
                                            <i class='bx bxs-quote-single-right'></i>
                                        </div>
                                    </div>
                                    <div>
                                        <p style={{ textAlign: "start" }}>{item.CardDescription}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="rightSideRow">
                            {rightsideCards.map((item, index) => (
                                <div className="ClientCard  `${currentTheme.className}`" key={index}>
                                    <div className="TopBar">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <i class='bx bxs-user-circle'></i>
                                            <h4>{item.CardHeading}</h4>
                                        </div>
                                        <div>
                                            <i class='bx bxs-quote-single-right'></i>
                                        </div>
                                    </div>
                                    <div>
                                        <p style={{ textAlign: "start" }}>{item.CardDescription}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="ShadowEffect">
                    <div></div>
                    <div></div>
                </div>
                <div className="viewMoreBtn `${currentTheme.className}`">
                    <div className="AnimatedBtn `${currentTheme.className}`">
                        <button className="`${currentTheme.className}`">Read More</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OutleadClients