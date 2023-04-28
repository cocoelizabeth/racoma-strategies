import { MdStar } from 'react-icons/md';
import S from '@sanity/desk-tool/structure-builder';
import featured from '../schemas/documents/featured';

function SidebarList() {
  return S.list()
    .title('Racoma Strategies')
    .items([
      S.listItem()
        .title('Featured')
        .id('featuredItems')
        .icon(MdStar)
        .child(S.editor().schemaType('featured').documentId('featuredItems')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'featured'
      ),
    ]);
}

export default SidebarList;
