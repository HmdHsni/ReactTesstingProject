// import Onboarding from "../components/Onboarding";

// import ExpandableText from "../components/ExpandableText";
// import { Toaster } from "react-hot-toast";
// import OrderStatusSelector from "../components/OrderStatusSelector";
// import SearchBox from "../components/SearchBox";
// import ToastDemo from "../components/ToastDemo";
import OrderStatusSelector from "../components/OrderStatusSelector";
// import TermsAndConditions from "../components/TermsAndConditions";

const PlaygroundPage = () => {
  // return <Onboarding />;
  // return <TermsAndConditions />;

  // return (
  //   <ExpandableText text="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ratione beatae porro sed quibusdam necessitatibus voluptatem ipsa inventore, iste minima voluptatibus, dolore vitae asperiores labore magnam et, ea in voluptate sint quod accusamus? Omnis debitis incidunt, numquam eveniet ipsam odio perferendis quae nihil reiciendis? Maxime, quis exercitationem architecto repudiandae delectus facere voluptate eum ea natus praesentium temporibus molestias sed rerum assumenda voluptas et consectetur incidunt, sit autem nobis. Ea cumque dolorem voluptate mollitia molestiae aliquam tenetur quaerat odio quam nulla? Porro laborum optio sit, aut iste quis reiciendis enim sed amet culpa totam perspiciatis obcaecati excepturi architecto inventore ipsum facere." />
  // );
  // return <SearchBox onChange={(text) => console.log(text)} />;
  // <OrderStatusSelector onChange={(value) => console.log(value)} />;
  return (
    <>
      {/* <ToastDemo />
  <Toaster /> */}
      <OrderStatusSelector onChange={(value) => console.log(value)} />
    </>
  );
};

export default PlaygroundPage;
