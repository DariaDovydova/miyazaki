import Ember from '../gi.png';

function Preloader() {
  return (
    <div className="container-preloader">
        <div id="ball"><img src={Ember} alt="" width="70px" /></div>
        <div id="ball"><img src={Ember} alt="" width="70px" /></div>
        <div id="ball"><img src={Ember} alt="" width="70px" /></div>
    </div>
  )
}

export { Preloader };