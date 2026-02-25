import React from "react";
// Using a simplified version while debugging react-helmet-async compatibility with React 19
const SEO = ({ title, description, name, type }) => {
  React.useEffect(() => {
    // Update Title
    if (title) {
      document.title = title;
    }

    // Update Meta Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    // Cleanup function not strictly necessary for simple metadata replacement
  }, [title, description]);

  return null;
};

SEO.defaultProps = {
  title: "NaucSeVic - Vzdělávací Platforma",
  description: "Interaktivní vzdělávací platforma pro matematiku a fyziku.",
  name: "NaucSeVic",
  type: "website",
};

export default SEO;
