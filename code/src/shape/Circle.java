// indication for the jvm while compiling and searching the files
package shape;

// Abstraction => hiding the complexity
public class Circle implements IShape {
  double radius;

  public Circle(double radius) {
    this.radius = radius;
  }

  public double area() {
    return 3.14 * this.radius * this.radius;
  }

}
