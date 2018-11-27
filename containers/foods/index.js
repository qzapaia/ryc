import { Component } from "react";
import View from "./view";
import { getFoodsNearAddress, getFoodsNearHere } from "./lib";
import store from "store2";

const LAST_ADDRESS = "last-address";

export default class extends Component {
  constructor() {
    super();

    this.state = {
      foods: [],
      error: null
    };
  }
  async componentDidMount() {
    const { near:address, userGeoByIp = {} } = this.props;

    const { city = "", country = "" } = userGeoByIp;
    
    const nearHere = address == "here";

    const result = nearHere
      ? await getFoodsNearHere()
      : await getFoodsNearAddress({ address, city, country });

    !nearHere && store.set(LAST_ADDRESS, address);

    this.setState({
      foods: result.foods,
      error: result.error
    });
  }
  render() {
    const { foods, error } = this.state;
    const { near } = this.props;

    return <View foods={foods} error={error} near={near} />;
  }
}
