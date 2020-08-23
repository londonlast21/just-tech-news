const User = require('./User');
const Post = require('./Post')

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignLey: 'user_id',
});

module.exports = { User, Post };