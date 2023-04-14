import React from "react";
import Header from '../../components/Header/Header';
const Blog = () => {
  return (
    <>
      <Header></Header>
      <div>
        <h4>Q: When should you use contex API?</h4>
        <p>ANS:Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
      </div>
      <div>
        <h4>Q: What is coustom hook? </h4>
        <p>
        ANS:Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.
        </p>
      </div>
      <div>
      <h4>Q:How useref works? </h4>
      <p>ANS:useRef has a property called "current" used to retrieve the value of the referenced object at any time while also accepting an initial value as an argument. 
      </p>
      </div>
      <div>
        <h4>Q:How useMemo works?</h4>
        <p>ANS:During initial rendering, useMemo invokes compute , memoizes the calculation result, and returns it to the component. If the dependencies don't change during the next renderings, then useMemo() doesn't invoke compute , but returns the memoized value.</p>
      </div>
    </>
  );
};

export default Blog;
