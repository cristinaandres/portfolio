// utils/photos.ts

// Declare the type for require.context
declare const require: {
    context: (path: string, deep?: boolean, filter?: RegExp) => {
      keys: () => string[];
      (id: string): { default: string };
    };
  };
  
  // Function to import all images from a folder
  const importAll = (r: ReturnType<typeof require.context>) => r.keys().map(r);
  
  // Import images from the specified folder
  const images = importAll(require.context('../public/images/activities/animal-crossing/showcase', false, /\.(png|jpe?g|svg)$/));
  
  
  // Map images to the format required by react-photo-album
  const photos = images.map((image: { default: string }) => ({
    src: image.default,
    width: 400, // Placeholder width, you might want to update these values
    height: 300, // Placeholder height, you might want to update these values
  }));
  
  export default photos;
  
