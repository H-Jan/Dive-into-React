import POPOSSpace from './POPOSSpace';

function POPOSList() {
    return (
      <div className="POPOSList">
        <POPOSSpace
          name="50 California Street"
          address = "50 California St."
          image="50-California-st.jpg" />
        <POPOSSpace 
          name="100 Pine Avenue"
          address="100 Pine St."
          image="100-pine.jpg"/>
        <POPOSSpace 
          name="343 Sansome Roof"
          address="343 Sansome Roof Ave."
          image="343-sansome-roof-garden.jpg"
          />
        <POPOSSpace 
          name="Citigroup Center"
          address="Citigroup Drive"
          image="citigroup-center.jpg"/>
      </div>
    )
  }
  
export default POPOSList