/**
 * This code demonstrates the use of the Simple Factory pattern to create content elements (Article, Img, Video) based on user input.
 * It includes interfaces for ContentElement and concrete implementations for different types of content elements.
 * The ContentElementFactory class serves as a simple factory for creating instances of content elements.
 * Usage examples show how to create and render content elements using the factory.
 */

interface ContentElement {
  render(): void;
}

//Concrete implementation of content elements
class Article implements ContentElement {
  render(): void {
    console.log('Rendering an Article');
  }
}

class Img implements ContentElement {
  render(): void {
    console.log('Rendering an Image');
  }
}

class Video implements ContentElement {
  render(): void {
    console.log('Rendering a Video');
  }
}

//Simple Factory class for creating content elements
class ContentElementFactory {
  /**
   * Creates an instance of a ContentElement based on the provided type.
   * @param type - The type of content element to create (e.g., "article", "image", "video").
   * @returns An instance of the corresponding ContentElement or null if the type is invalid.
   */
  createContentElement(type: string): ContentElement | null {
    switch (type.toLocaleLowerCase()) {
      case 'article':
        return new Article();
      case 'image':
        return new Img();
      case 'video':
        return new Video();
      default:
        console.log('Invalid content element type');
        return null;
    }
  }
}

// Usage
const contentElementFactory = new ContentElementFactory();

// User selects the type of content element
const userSelectedContentType = 'image';

// Create the content element based on user selection
const contentElement = contentElementFactory.createContentElement(
  userSelectedContentType
);

if (contentElement) {
  // Render the content element
  contentElement.render(); // Output: Rendering an Image
} else {
  // Handle the case where the content element instance is not created
  console.log('Content element instance not created');
}
