const ghpages = require('gh-pages');

ghpages.publish(
  'build',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:taanhluan/New_Profile.git', // ✅ dùng SSH thay vì HTTPS
    dotfiles: true,
    add: true,
    message: 'Deploy from personal-portfolio'
  },
  function (err) {
    if (err) {
      console.error('❌ Deployment error:', err);
    } else {
      console.log('✅ Deployed successfully via SSH!');
    }
  }
);
