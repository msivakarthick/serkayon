import "./sensors.css";
 function Sensors(){
    return(
        <section className="sensors-section">
            <div className="sensors-content">
                <h1 className="sensors-title">
                    <span className="from">From</span>
                    <span className="sensors">Sensors</span>
                    <span className="to">to</span>
                    <span className="boardroom">Boardroom</span>
                </h1>
                <p className="para">We use sensors to collect real-time data from factory machines and deliver 
                    clear insights that help businesses monitor operations, identify losses, and make smarter decisions.</p>
            </div>
            <div className="video">
                {/* <h1 className="sensors-title">
                    <span className="from">From</span>
                    <span className="sensors">Sensors</span>
                    <span className="to">to</span>
                    <span className="boardroom">Boardroom</span>
                </h1> */}
            </div>
        </section>
    )
 }


 export default Sensors;