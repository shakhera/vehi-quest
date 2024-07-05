import React from "react";

const Blogs = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg ">
        {/* <h1 className="text-3xl font-bold text-center mb-6">Blogs</h1> */}

        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p className="text-gray-700">
              Managing state in a React application can be done in several ways:
              <ul className="list-disc ml-5 mt-2">
                <li>
                  Local State: Managed within a single component using the
                  useState hook.
                </li>
                <li>
                  Global State: Managed across multiple components using Context
                  API or libraries like Redux.
                </li>
                <li>
                  Server State: Managed with data from an external server, often
                  handled with libraries like React Query or SWR.
                </li>
                <li>
                  URL State: Managed with data in the URL, including query
                  parameters and route parameters, using React Router.
                </li>
              </ul>
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">
              How does prototypical inheritance work?
            </h2>
            <p className="text-gray-700">
              Prototypical inheritance is a feature in JavaScript where objects
              can inherit properties and methods from other objects. Each object
              has a prototype property, which points to another object, and this
              chain continues until it reaches an object with a null prototype.
              This is known as the prototype chain. When trying to access a
              property or method on an object, JavaScript will traverse up the
              prototype chain until it finds the property or method or reaches
              the end of the chain.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">
              What is a unit test? Why should we write unit tests?
            </h2>
            <p className="text-gray-700">
              A unit test is a type of software testing where individual units
              or components of a software are tested. The purpose is to validate
              that each unit of the software performs as expected. Writing unit
              tests is important because it helps ensure that code works
              correctly, makes it easier to refactor code, provides
              documentation for the code, and can catch bugs early in the
              development process, which saves time and reduces costs in the
              long run.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">
              React vs. Angular vs. Vue?
            </h2>
            <p className="text-gray-700">
              <strong>React:</strong> A library for building user interfaces,
              developed by Facebook. It's known for its component-based
              architecture, virtual DOM, and a large ecosystem. React is
              flexible and can be integrated with other libraries and
              frameworks.
            </p>
            <p className="text-gray-700">
              <strong>Angular:</strong> A comprehensive framework for building
              web applications, developed by Google. It provides a full-fledged
              solution with tools and libraries for building complex
              applications. Angular uses TypeScript and has a steep learning
              curve.
            </p>
            <p className="text-gray-700">
              <strong>Vue:</strong> A progressive framework for building user
              interfaces. Vue is designed to be incrementally adoptable, meaning
              you can use as much or as little of Vue as you need. It's known
              for its simplicity, flexibility, and ease of integration with
              other projects and libraries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
