import React from "react";
import "./OutleadClient.css"
const OutleadClients = () => {

    const clientPics = [
        {
            icons:<i class='bx bxs-user-circle'></i>
        },
        {
            icons:<i class='bx bxs-user-circle'></i>
        },
        {
            icons:<i class='bx bxs-user-circle'></i>
        },
        {
            icons:<i class='bx bxs-user-circle'></i>
        },
        {
            icons:<i class='bx bxs-user-circle'></i>
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
            </section>
        </>
    )
}
export default OutleadClients