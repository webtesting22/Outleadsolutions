import React,{useState,useContext} from "react";
import ThemeContext from "../../../ThemeContext";
import "./OutleadClient.css"
import NavigationBar from "../NavigationBar/NavigationBar";

const OutleadClients = () => {
    const { currentTheme, changeTheme } = useContext(ThemeContext);
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
            CardImage: "/images/Testimonials/1.png",
            CardHeading: "ABHISHEK BANSAL",
            CardCompany:"SHIVTEX SPINNING PVT LTD",
            CardPosition:"DIRECTOR, CEO",
            CardDescription: '"When it comes to social media marketing there\'s plenty of fish in the sea. Outlead solutions has helped me to engage customers and industry commentators alike, bringing my business great results."'
        },
        {
            CardImage: "/images/Testimonials/2.png",
            CardHeading: "RAJ SHAH",
            CardCompany:"HITECH PROJECTS PVT LTD",
            CardPosition:"DIRECTOR",
            CardDescription: '"Consistency, competency and creativity are the three words I can think have when it comes to ‘OutLead solutions’. They are constantly willing to adapt and support any fast-changes and new initiatives that might be outside of scope."'
        },
        {
            CardImage: "/images/Testimonials/3.png",
            CardHeading: "SNEH SHAH",
            CardCompany:"TIDBIT SOLUTIONS",
            CardPosition:"CO-FOUNDER",
            CardDescription: '"I have worked with a couple of agencies in the past and none of them even come close to how impressed i am with OutLead solutions. The incredible amount of effort and dedication they put into their work is more detailed than you can imagine."'
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
            CardCompany:"",
            CardPosition:"",
            CardDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat labore expedita officia quam, pariatur id exercitationem non sed nihil ipsam?"
        },
    ]
    return (
        <>
            <section id="OutleadClientsContainer" onClick={changeTheme} className={`client-container ${currentTheme.className}`} style={{paddingTop:"200px"}}>
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
                <div style={{ display: "flex", justifyContent: "center" }} >
                    <div>
                        <p>Welcomed over 100+ amazing people!</p>
                        <div style={{ display: "flex", justifyContent: "center" }} >
                            {clientPics.map((item, index) => (
                                <div key={index} className="icons `${currentTheme.className}`" >
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
                                        <div className="ClientHeader">
                                            <img src={item.CardImage} style={{width:"100px",aspectRatio:"3/2",objectFit:"contain"}}/>
                                            <h4>{item.CardHeading}</h4>
                                            <h4>{item.CardCompany}</h4>
                                            <h4>{item.CardPosition}</h4>
                                            
                                        </div>
                                        {/* <div>
                                            <i class='bx bxs-quote-single-right'></i>
                                        </div> */}
                                    </div>
                                    <div>
                                        <p style={{ textAlign: "center" }}>{item.CardDescription}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="rightSideRow">
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
                        </div> */}
                    </div>
                </div>
                <div className="viewMoreBtn ">
                    <div className="AnimatedBtn ">
                       {/* <button className={currentTheme.className}>Read More</button> */}
                       <button className="button `${currentTheme.className}`">Read More</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OutleadClients