/**
 * 依赖库发布
 * @author steudnera
 */
const qn = require('qn');

const options = {
  accessKey: 'KcH25vxJ8THYo9ExNp_-Kobr-TebdAZLss-JuLvD',
  secretKey: 'y82r6nTrPeQpjs5UXRdHlwePZh_9nFKIS-6gJFEn',
  bucket: 'static',
  domain: 'ocgkyeaew.bkt.clouddn.com'
};

const client = qn.create(options);
const distpaths = {
  "bootstrap": "^3.3.7",
  "echarts": "^3.8.5",
  "snap": "*",
  "ckeditor": "^4.8.0",
  "three.js": "threejs#*",
  "webuploader": "*",
};

const filepaths = {
  "jquery": "^3.3.1",
  "sketch.js": "*",
  "PACE": "pace#^1.0.2",
  "requirejs": "^2.3.5",
};

Object.keys(filepaths).forEach((lib) => {
  const filepath = filepaths[lib];

  client.uploadFile(filepath, { key: 'qn/lib/client.js' }, (err, result) => {
    console.info(result);
  });
});
