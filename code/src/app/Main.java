package app;

class Main {
  public static void main(String[] args) {
    // IShape rect = new Rectangle(10.0, 20.0);
    // IShape cir = new Circle(10.0);
    // double rs1 = rect.area(); //
    // double rs2 = cir.area(); //
    // System.out.println("rs1 = " + rs1); // 200
    // System.out.println("rs1 = " + rs1); // 200
    // fully qualified class name
    // double len = rect.lenght;
    // double wid = rect.width;
    // double area = len * wid;
    shape.IShape shape1 = new shape.Rectangle(10.0, 20.0);
    // Rectangle rect = new shape.Rectangle(10.0, 20.0);
    double rs = calcArea(shape1);

    shape.IShape shape2 = new shape.Circle(20.0);
    rs = calcArea(shape2);

    // we can assign any instance of subtype to supertype.
  }

  public static double calcArea(shape.IShape shape) {
    return shape.area();
  }
}
