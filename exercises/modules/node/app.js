const api = require('./api.js')
const data = require('./data.js')

const showPostsForCurrentUser = (userId, cb) => {
    api.getPostsForUser(userId, posts => {
        const postTemplates = data.posts.map(post => {
            return `
                <div class="post">
                    ${post.title}
                    ${post.body}
                    ${post.createdBy}
                </div>`
        })
        cb(postTemplates)
    })
}

const showUserProfile = (userId, cb) => {
    api.getUserById(userId, user => {
        const profile = `
      <div>
        ${user.name}
      </div>
    `
        cb(user)
    })
}


module.exports = { showPostsForCurrentUser, showUserProfile}


