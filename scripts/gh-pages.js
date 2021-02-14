const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/',
    {
        branch: 'master',
        repo: 'https://github.com/gonzalojpv/gonzalojpv.github.io.git',
        user: {
            name: 'gonzalojpv',
            email: 'gonzalojpv@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
