let Design=(props)=>{
    let seconditem=props.seconditem
  return(
    <div>
    <div className="designheading">
         <div className="designone">
        <div className="staricon"><img src={seconditem.icon}/></div>
        <div><h1>{seconditem.text}</h1></div>
        <div><h1>{seconditem.text2}</h1></div>
        <div><h1>{seconditem.text3}</h1></div>
        <div className="designpragraph">{seconditem.pra}</div>
        <div><button>{seconditem.button}</button></div>
        </div>
        <div className="designtwo">
          <div className="sideimg1"><img src={seconditem.sideimg1}/></div>
        <div className="mainimg"><img src={seconditem.mainimg}/></div>
          <div className="sideimg2"><img src={seconditem.sideimg2}/></div>
        </div>
       
       
    </div>
    <div className="background">
      <h6>Get A Quote</h6><h1>Need To Grow Your Business</h1>
      <div className="insideback">
        <div className="phara">
          <div className="p1">Do you have a business idea but don’t know how to start?</div>
          <div className="p2">What is stopping you?</div>
          <div className="p3">Don’t worry! Our Experts at Encanto Technologies will resolve all your queries.</div>
          <div className="p4">Call Us Now on:</div>
          <div className="p5">+91 8989748544</div>
        </div>
        <div className="Or">OR</div>
        <div>
          <h2>Schedule a Free Consultation</h2>
          <div><input type="text" placeholder="Name"/></div>
          <div><input type="text" placeholder="Phone"/></div>
          <div><input type="text" placeholder="Email"/></div>
          <div><textarea>Message</textarea></div>
          <div><button>send</button></div>
        </div>

      </div>
      </div>
    </div>
  )
}
export default Design;