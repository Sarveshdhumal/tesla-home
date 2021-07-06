import "./App.css";
import Header from "./components/Header";
import Item from ".//components/Item";
import Assessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Solar Panels"
          desc="Money-back guarantee"
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink="https://www.tesla.com/energy/design"
          rightBtnTxt="LEARN MORE"
          rightBtnLink="https://www.tesla.com/solarpanels"
          twoButtons="true"
          first
        />
        <Item
          title="Model S"
          desc="$69,420"
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/models/design#overview"
          rightBtnTxt="LEARN MORE"
          rightBtnLink="https://www.tesla.com/models"
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="$69,420"
          backgroundImg={Model3}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/model3/design#overview"
          rightBtnTxt="LEARN MORE"
          rightBtnLink="https://www.tesla.com/model3"
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="$69,420"
          backgroundImg={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/modelx/design#overview"
          rightBtnTxt="LEARN MORE"
          rightBtnLink="https://www.tesla.com/modelx"
          twoButtons="true"
        />
        <Item
          title="Model Y"
          desc="$69,420"
          backgroundImg={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/modely/design#overview"
          rightBtnTxt="LEARN MORE"
          rightBtnLink="https://www.tesla.com/modely"
          twoButtons="true"
        />
        <Item
          title="Solar Roofs"
          desc="Money-back guarantee"
          backgroundImg={SolarRoof}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/energy/design"
          rightBtnTxt="LEARN MORE"
          rightBtnLink="https://www.tesla.com/solarroof"
          twoButtons="true"
        />
        <Item
          title="Assessories"
          desc="Money-back guarantee"
          backgroundImg={Assessories}
          leftBtnTxt="SHOP NOW"
          leftBtnLink="https://shop.tesla.com/?tesref=true"
        />
      </div>
    </div>
  );
}

export default App;
