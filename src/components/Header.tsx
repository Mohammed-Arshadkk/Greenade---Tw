import menu from "../assets/icons8-menu-32 (1).png"

function Header() {
  return (
    <div>
      <div  className="w-screen h-screen bg-green-800 flex items-center justify-center">
        <div className="h-[100%] w-[50%] bg-cover" style={{backgroundImage:`url(https://i.pinimg.com/736x/d9/ac/1d/d9ac1d7cb60cd9cc39db550b72cf2b31.jpg)`}}>
            <nav>
                <ul className="text-white flex gap-6 ">
                    <li className="text-xl font-bold">ART <span className="font-normal text-lg">ICHOKE</span></li>
                    <span className="flex-1"></span>
                    <li className="hover:text-black cursor-pointer hover:underline decoration-solid">Home</li>
                    <li className="hover:text-black cursor-wait hover:underline decoration-dotted">Where to find</li>
                    <li className="hover:text-black cursor-help hover:underline decoration-dashed">Contact</li>
                    <span className="flex-1"></span>
                    <li><img src={menu} alt="" /></li>
                </ul>
            </nav>

            <div className="p-32 -ml-20" >
                <h1 className="text-4xl text-white font-bold">A HEALTHY <br /> EXPLOSION</h1><br />
                <p className="text-white"> Artichoke is the primary botanical ingredient <br />of the Italian aperitif Cynar, with 16.5% alcohol <br />by volume, produced by the Campari Group.</p><br />
                <button className="border-2 w-[26%] h-9 text-white hover:bg-black cursor-cell">READ MORE</button>
            </div>

            <div>
                <h1 className="text-white font-bold text-8xl ml-14 -mt-7">GREENADE!</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
