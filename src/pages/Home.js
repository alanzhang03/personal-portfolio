import Navbar2 from "../sections/Navbar2";


export default function Home(){
    return (
        <>
            <center><h1>Alan's React portfolio!</h1></center>
            <div class="flex-container">
                <img src={require("./PortPhoto.png")} class="img" alt="testing"/>
            </div>
            <Navbar2></Navbar2>
            
        </>
    );
}