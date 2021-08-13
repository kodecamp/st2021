package shape;

public class Rectangle implements IShape {
  private double length;
  private double width;

  public Rectangle(double length, double width) {
    this.length = length;
    this.width = width;
  }

  // the way to calculate area
  public double area() {
    return this.length * this.width;
  }
}
