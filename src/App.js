import Head from "./Head";
import Design from "./Design";
import "./App.css"
let App=()=>{
  let img={"img":"https://encantotek.com/mobile-development/wp-content/webp-express/webp-images/uploads/2022/09/encanto-logo-purple.png.webp"}
  let secondline=[{"icon":"https://img.freepik.com/premium-vector/golden-five-star-icon-vector-isolated-online-shop-customer-review-produck-service-store-5-star_771881-201.jpg?w=900","text":"Mobile App","text2":"Development","text3":"Services","pra":"We are an India based top Mobile app development company, which can assist you take advantage of the rapidly developing fragment of mobile application development","button":"Get a Qoute","sideimg1":"https://encantotek.com/mobile-development/wp-content/webp-express/webp-images/uploads/2022/09/home-5-rev-img-4-200x69.jpg.webp","sideimg2":"https://encantotek.com/mobile-development/wp-content/webp-express/webp-images/uploads/2022/09/home-5-rev-img-7-200x128.png.webp",
  "mainimg":"https://www.noblewebstudio.com/img/mobile-app-development.png","fullimage":"https://www.tranktechnologies.com/blog/wp-content/uploads/2023/01/App-Development-1.png"}]
  return(
    <div>
      <Head data={img}/>
      {secondline.map((item)=><Design seconditem={item}/>)}
    </div>

  )
}
export default App;