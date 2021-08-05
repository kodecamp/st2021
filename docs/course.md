---
title: Summer Training 2021
author: Sunil K.(kodecamp)
---

# Training Details

# Live Project Covering the
### Core Java
> 1. Various types of real time data and their reprsentation in oops(JAVA).
> 2. Best practices for writting maintainable code(Software Design Patterns).
> 3. Handling(Creating, Searching, Removing, Sorting) the collection of data(Collection Framework).
> 4. Code Distribution and dependency management techniques and tools(build tools).
> 5. Handling the persistence store in Java(Java Database Connectivity).

### Enterprise Java(JEE)
> 6. Exposing the persistence store via http to outside world(Servlets, REST API, Apache Tomcat, TomEE).
> 7. Creating the Server Side Rendered UI using JavaServer Faces(PrimeFaces).
> 8. Securing(Authentication and Authorization) the WebApplication.

### Side Skills
> 9. SQL fundamentals.
> 10. Version Control System (Github) and Markdown file format.

---

# Core Java(Java Fundamentals)

## Classes and Objects

> Ford Fiesta, Tata Indigo, Maruti Dezire => Cars => Vehicles

> Ford Fiesta, Volvo, Mahindra Truck => Vehicle

> Dog, Cat, Cow => Pet Animal

> Dog, Cat, Cow, Tiger, Lion => Animal

> Hydrogen, Nitrogen, Carbon Dioxide => Gas

### Think : Why do we need classes or classification ?

## Conclusions :
> 1. **Class** is just a formula to create instances.
> 2. **Object** represents the real time entity in virtual world.

```java
class Person {
  int id;
  String name;
  String address;
}

// instance creation => Constructor
Person p = new Person();

// accessing fields by using "." notation
int id = p.id();
int nme = p.name();
int addr = p.address();

```

---

# Object Construction

### Think : Can a person be without id and name ?

```java

class Person {
  int id;
  String name;
  String address;

  // Constructor => Creates and object which can be accessed by "this"
  Person(String id, String name) {
    this.id = id;
    this.name = name;
  }

  public void address(String address) {
    this.address = address;
  }
}

// jvm uses Person class to create and instance(X)
// this instance can be accessed into the class by "this". this => current instance of Person
Person p1 = new Person(1, "Rakesh Y");
p.address("Delhi India");

// second instance
Person p2 = new Person(1, "Rakesh Y");
p.address("Delhi India");

// referential equality(not value equality) check
boolean isEqual = p1 == p2;
System.out.println(isEqual);
```

---

# System Setup (Java Development Kit)

. Installing JDK(Java Development Kit) from [sdkman.io](sdkman.io)

. Compiling and Running

## Presentation at : https://github.com/kodecamp/2021/java

---

# Encapsulation

Level of closeness between data and it's processing logic.

```java
int id = p.id();
int nme = p.name();
int addr = p.address();
String personalDetails = "[ id = " + id + ", name = " + nme + ", address = " + addr + "]";
```

