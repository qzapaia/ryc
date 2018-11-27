import React, { PureComponent } from "react";
import { getCurrentPosition } from "../../lib/geo";
import { withRouter } from "next/router";
import store from "store2";
import autoBind from "react-autobind";

import HomeSearchSection from "./home-search-section";
import SellYourFoodSection from "./sell-you-food-section";

const LAST_ADDRESS = "last-address";

class Container extends PureComponent {
  constructor() {
    super();
    autoBind(this);

    this.state = {
      address: store.get(LAST_ADDRESS),
      redirectingToSearch: false
    };
  }
  componentDidMount() {
    const { router } = this.props;
    
    router.prefetch("/food");
    router.prefetch('/login');
    router.prefetch('/edit-food');

    // fuerza al componente a tomar el estado del cliente
    this.setState({
      a: Math.random(),
      redirectingToSearch: false
    });
  }
  onAddressChange(e) {
    const { value } = e.target;
    this.setState({ address: value });
  }
  onSubmitAddress(e) {
    const { address } = this.state;
    store.set(LAST_ADDRESS, address);
    location.href = `/food?near=${address}`;
  }
  async searchNearHere() {
    // this is made like this for safari
    await getCurrentPosition({ timeout: 200 }).catch(e=>console.log(e));
    const { router } = this.props;

    router
      .push({
        pathname: "/food",
        query: {
          near: "here"
        }
      })
      .then(() => window.scrollTo(0, 0));
  }
  render() {
    const { redirectingToSearch } = this.state;

    return (
      <div>
        <HomeSearchSection
          onSearchNearHere={this.searchNearHere}
          disableSearch={redirectingToSearch}
          onAddressChange={this.onAddressChange}
          address={this.state.address}
          onSearchByAddress={this.onSubmitAddress}
        />

        <SellYourFoodSection />
      </div>
    );
  }
}

Container.propTypes = {};

Container.defaultProps = {};

export default withRouter(Container);
