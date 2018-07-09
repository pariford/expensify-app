//react-test-renderer -> a new jest library to test components

import ReactShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/HeaderPage";

test("should render the header page correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("h1").text()).toBe("Expensify");
  expect(wrapper).toMatchSnapshot();
  //Best way to do is using enzyme, which is above
  /* const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot(); */
});
