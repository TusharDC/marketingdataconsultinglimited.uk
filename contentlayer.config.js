import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from 'contentlayer/source-files';

const FAQ = defineNestedType(() => ({
  name: 'FAQ',
  fields: {
    question: { type: 'string', required: true },
    answer: { type: 'string', required: true },
  },
}));

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    // author: {
    //   type: 'string',
    //   required: true,
    // },
    description: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    },
    faqs: {
      type: 'list',
      of: FAQ,
    },

    // draft: {
    //   type: 'string',
    //   required: true,
    // },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}));
export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});
