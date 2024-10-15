import React, { useState } from 'react';
import { Shape, Circle, Rectangle, Triangle, Cylinder } from './shapes';

const App: React.FC = () => {
  const [output, setOutput] = useState<string[]>([]);

  const runDemo = () => {
    const newOutput: string[] = [];

    const logOutput = (message: string) => {
      newOutput.push(message);
    };

    const c = new Circle(100);
    logOutput(`Area of Circle: ${c.getArea()}`);

    const sObj = new Shape();
    sObj.displayShapeName();
    logOutput(`sObj instanceof Shape: ${sObj instanceof Shape}`);

    logOutput("+++++++++");

    const shapeCircleObj: Shape = new Circle(100);
    shapeCircleObj.displayShapeName();
    logOutput(`Area of Circle: ${shapeCircleObj.getArea()}`);
    logOutput(shapeCircleObj.toString());
    logOutput(`shapeCircleObj instanceof Circle: ${shapeCircleObj instanceof Circle}`);
    logOutput(`sObj instanceof Circle: ${sObj instanceof Circle}`);

    logOutput("--------------------");

    const shapeRectangleObj: Shape = new Rectangle("Red");
    shapeRectangleObj.displayShapeName();
    shapeRectangleObj.setHeight(2);
    shapeRectangleObj.setWidth(2);
    logOutput(`Area of Rectangle is: ${shapeRectangleObj.getArea()}`);
    logOutput(shapeRectangleObj.toString());
    logOutput(`shapeRectangleObj instanceof Rectangle: ${shapeRectangleObj instanceof Rectangle}`);
    logOutput(`sObj instanceof Rectangle: ${sObj instanceof Rectangle}`);

    logOutput("--------------------");

    const shapeTriangleObj: Shape = new Triangle("Blue");
    shapeTriangleObj.displayShapeName();
    shapeTriangleObj.setHeight(2);
    shapeTriangleObj.setBase(3);
    logOutput(`Area of Triangle is: ${shapeTriangleObj.getArea()}`);
    logOutput(shapeTriangleObj.toString());
    logOutput(`shapeTriangleObj instanceof Triangle: ${shapeTriangleObj instanceof Triangle}`);
    logOutput(`sObj instanceof Triangle: ${sObj instanceof Triangle}`);

    logOutput("--------------------");

    const cylinderShape = new Cylinder(3);
    cylinderShape.displayShapeName();
    cylinderShape.setHeight(3);
    logOutput(`Volume of Cylinder is: ${cylinderShape.getVolume()}`);
    logOutput(cylinderShape.toString());

    setOutput(newOutput);
  };

  return (
    <div className="App">
      <h1>Polymorphism and Inheritance Demo</h1>
      <button onClick={runDemo}>Run Demo</button>
      <pre>
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </pre>
    </div>
  );
};

export default App;