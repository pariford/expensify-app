import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//RAF means request animation framework pollyfil for browser related test cases

Enzyme.configure({
  adapter: new Adapter()
});
