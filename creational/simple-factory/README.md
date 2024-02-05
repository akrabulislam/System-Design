# Simple Factory Pattern

The Simple Factory Pattern is a creational design pattern that provides a centralized mechanism for creating objects. It encapsulates the object creation process in a dedicated factory class, allowing clients to request objects without being exposed to the intricacies of instantiation. This pattern enhances code abstraction, maintainability, and facilitates the seamless addition of new object types to the system.

## When to Use

- Use the Simple Factory Pattern when the process of object creation is relatively straightforward and does not involve complex configurations or dependencies.
- It is suitable when there is a need to centralize the creation logic, making it easy to manage and extend the system with new object types.

## Structure

- **Product Interface/Class**: Defines the common interface for all products.
- **Concrete Products**: Implement the product interface and represent specific objects to be created.
- **Factory Class**: Contains a method to create instances of concrete products based on input parameters.

## Example

In this folder, you can find code examples illustrating how to implement the Simple Factory Pattern in various scenarios.

## Contributing

Feel free to contribute more examples, explanations, or improvements to help the community understand and apply the Simple Factory Pattern effectively.

## License

This code is licensed under the [MIT License](../../LICENSE).
