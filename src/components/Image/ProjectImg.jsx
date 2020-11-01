import { useStaticQuery, graphql } from 'gatsby';

// useContentfulImage.js

// export default assetUrl => {
//   const { allContentfulAsset } = useStaticQuery(
//     graphql`
//       query CONTENTFUL_IMAGE_QUERY {
//         allContentfulAsset {
//           nodes {
//             file {
//               url
//             }
//             fluid(maxWidth: 1050, quality: 85) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//         }
//       }
//     `
//   );
//   return allContentfulAsset.nodes.find(n => n.file.url === assetUrl).fluid;
// };

