const gulp = require('gulp');
const gulpQniu = require('gulp-qniu');

const options = {
  accessKey: 'KcH25vxJ8THYo9ExNp_-Kobr-TebdAZLss-JuLvD',
  secretKey: 'y82r6nTrPeQpjs5UXRdHlwePZh_9nFKIS-6gJFEn',
  bucket: 'static',
  domain: 'ocgkyeaew.bkt.clouddn.com'
};

/*
 * 发布脚本
 */
gulp.task('publish', () => {
  return gulp.src(['./libs/**/*'])
             .pipe(gulpQniu({ qiniu: options, baseDir: 'production' }));
});