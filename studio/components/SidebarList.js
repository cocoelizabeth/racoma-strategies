import { MdStar, MdHome } from 'react-icons/md';
import S from '@sanity/desk-tool/structure-builder';
import featured from '../schemas/documents/featured';

// create a separate folder for blog, don't include featured in blog folder because we want it to be structured differently
const blogFolderNames = ['blog', 'author', 'category'];
const blogFolder = (listItem) => blogFolderNames.includes(listItem.getId());
const hiddenDocTypeNames = ['blog', 'author', 'category', 'featured'];
const hiddenDocTypes = (listItem) =>
  !hiddenDocTypeNames.includes(listItem.getId());

// const formatPage = ()

// function SidebarList() {
//   return S.list()
//     .title('Pages')
//     .items([
//       S.listItem()
//         .title('Featured')
//         .id('featuredItems')
//         .icon(MdStar)
//         .child(S.editor().schemaType('featured').documentId('featuredItems')),
//       ...S.documentTypeListItems().filter(
//         (item) => item.getId() !== 'featured'
//       ),
//     ]);
// }

function SidebarList() {
  return S.list()
    .title('Pages')
    .items([
      // ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .title('Home')
        .id('home')
        .icon(MdHome)
        .child(S.editor().schemaType('home').documentId('home')),
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog Documents')
            .items([
              S.listItem()
                .title('Featured')
                .id('featuredItems')
                .icon(MdStar)
                .child(
                  S.editor().schemaType('featured').documentId('featuredItems')
                ),
              ...S.documentTypeListItems().filter(blogFolder),
            ])
        ),
    ]);
}

export default SidebarList;
